'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide Directly',
        text: 'When you contact us through our website, request a quote, or schedule a service, we may collect personal information including your full name, email address, phone number, service address, and any details you share about your pest control needs.',
      },
      {
        subtitle: 'Information Collected Automatically',
        text: 'When you visit our website, we may automatically collect certain technical information such as your IP address, browser type, device type, pages visited, time spent on pages, and referring URLs. This data is collected through cookies and similar tracking technologies.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: '',
        text: 'We use the personal information we collect to: respond to your inquiries and quote requests; schedule and confirm pest control services; send you appointment reminders and follow-up communications; improve our website and customer experience; comply with legal obligations; and send promotional communications if you have opted in.',
      },
    ],
  },
  {
    title: '3. Sharing Your Information',
    content: [
      {
        subtitle: '',
        text: 'We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business (such as email delivery platforms or scheduling software), only to the extent necessary for those services and under strict confidentiality agreements. We may also disclose information where required by law or to protect the rights, property, or safety of AMEN Pest Control, our customers, or others.',
      },
    ],
  },
  {
    title: '4. Cookies & Tracking Technologies',
    content: [
      {
        subtitle: '',
        text: 'Our website uses cookies — small text files stored on your device — to enhance your browsing experience, analyze website traffic, and understand how visitors use our site. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of some parts of our website.',
      },
    ],
  },
  {
    title: '5. Data Security',
    content: [
      {
        subtitle: '',
        text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security of your data.',
      },
    ],
  },
  {
    title: '6. Your Rights (California Residents — CCPA)',
    content: [
      {
        subtitle: '',
        text: 'If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to: know what personal information we collect and how it is used; request deletion of your personal information; opt out of the sale of your personal information (we do not sell your data); and non-discrimination for exercising your privacy rights. To exercise any of these rights, please contact us using the information below.',
      },
    ],
  },
  {
    title: '7. Third-Party Links',
    content: [
      {
        subtitle: '',
        text: 'Our website may contain links to third-party websites, including social media platforms such as Facebook and Instagram. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
      },
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      {
        subtitle: '',
        text: 'Our services and website are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can take appropriate action.',
      },
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      {
        subtitle: '',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will be posted on this page with a revised effective date. We encourage you to review this page periodically.',
      },
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      {
        subtitle: '',
        text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at: AMEN Pest Control | 3435 Ocean Park Blvd. #107, Santa Monica, CA 90405 | Phone: (888) 428-AMEN | Email: nomorepests@amenpestcontrol.com',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Privacy <span className="text-[var(--color-accent)]">Policy</span>
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Effective Date: January 1, 2024 &nbsp;|&nbsp; Last Updated: April 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 text-lg mb-10 leading-relaxed border-l-4 border-[var(--color-accent)] pl-5">
              AMEN Pest Control ("we," "us," or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your personal information
              when you visit our website or use our services. By using our website, you agree to the
              terms of this policy.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                    {section.title}
                  </h2>
                  {section.content.map((item, j) => (
                    <div key={j} className="mb-3 last:mb-0">
                      {item.subtitle && (
                        <h3 className="font-semibold text-gray-800 mb-1">{item.subtitle}</h3>
                      )}
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Home */}
          <div className="mt-14 text-center">
            <Link
              href="/"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-md"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
