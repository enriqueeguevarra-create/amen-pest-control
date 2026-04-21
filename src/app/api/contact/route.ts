import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// ─── XSS Prevention ──────────────────────────────────────────────────────────

/** Escape HTML entities to prevent XSS in email templates */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Sanitize, trim, and enforce max length on any string input */
function sanitize(input: unknown, maxLength = 500): string {
  if (typeof input !== 'string') return '';
  return escapeHtml(input.trim().slice(0, maxLength));
}

// ─── Whitelisted Pest Types ───────────────────────────────────────────────────

const ALLOWED_PEST_TYPES = new Set([
  'General Pest Control',
  'Rodents',
  'Bed Bugs',
  'Termites',
  'Roaches',
  'Birds',
  'Heat Treatment',
  'Freezing Treatment',
  'Other',
]);

// ─── Format Validators ────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[0-9()+\-\s.]{7,20}$/.test(phone);
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // ── Honeypot check: bots fill this hidden field, real users don't
    if (data.website) {
      // Return a fake success so bots don't know they were blocked
      return NextResponse.json({ success: true });
    }

    // ── Sanitize all string inputs
    const name = sanitize(data.name, 100);
    const phone = sanitize(data.phone, 20);
    const email = sanitize(data.email, 254);
    const message = sanitize(data.message, 2000);

    // ── Validate required fields
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    // ── Validate phone format
    if (!isValidPhone(data.phone)) {
      return NextResponse.json({ error: 'Invalid phone number format.' }, { status: 400 });
    }

    // ── Validate email format if provided
    if (data.email && !isValidEmail(data.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // ── Whitelist pest types — only accept known values
    const pestTypes: string[] = Array.isArray(data.pestTypes)
      ? data.pestTypes.filter((t: unknown) => typeof t === 'string' && ALLOWED_PEST_TYPES.has(t))
      : [];

    const pestSummary = pestTypes.length > 0
      ? pestTypes.map(escapeHtml).join(', ')
      : 'Not specified';

    // ── Mock mode (no API key set)
    if (!resend) {
      console.log('[Mock] Email send skipped — no RESEND_API_KEY:', { name, phone, email, pestTypes, message });
      return NextResponse.json({ success: true, mocked: true });
    }

    // ── Send email via Resend
    // NOTE: Until amenpestcontrol.com is verified in the Resend dashboard,
    // keep 'from' as onboarding@resend.dev and 'to' as your Resend account email.
    // Once verified, change to e.g. noreply@amenpestcontrol.com
    const { data: sendData, error } = await resend.emails.send({
      from: 'AMEN Pest Control Website <onboarding@resend.dev>',
      to: ['nomorepests@amenpestcontrol.com'],
      replyTo: (data.email && isValidEmail(data.email)) ? data.email : undefined,
      subject: `New Lead: ${pestSummary} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a3a6b; padding: 20px 30px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0;">New Service Request</h2>
            <p style="color: #93c5fd; margin: 4px 0 0;">from amenpestcontrol.com</p>
          </div>
          <div style="background: #f9fafb; padding: 24px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 130px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #111827;">${email || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Pest Issue(s)</td>
                <td style="padding: 8px 0; color: #111827;">${pestSummary}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #111827;">${message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend Error]', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: "Internal server error, please call us at (888) 428-2636" }, { status: 400 });
    }

    console.log('[Resend] Email sent successfully. ID:', sendData?.id);
    return NextResponse.json({ success: true });

  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
