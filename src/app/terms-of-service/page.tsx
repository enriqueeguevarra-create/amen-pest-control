'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    title: '1. Acceptance of Terms',
    text: 'By accessing and using the AMEN Pest Control website (amenpestcontrol.com) and our pest control services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site or our services. These Terms apply to all visitors, clients, and others who access the website or engage our services.',
  },
  {
    title: '2. Services Provided',
    text: 'AMEN Pest Control provides residential and commercial pest management services in the greater Los Angeles area, including but not limited to general pest control, rodent control, bed bug treatment, termite and fungus treatment, bird and fly abatement, heat treatment, and cryonite freezing treatment. Service availability, pricing, and scheduling are subject to change without notice.',
  },
  {
    title: '3. Service Agreements & Scheduling',
    text: 'Scheduling a service through our website or by phone constitutes a request for service and does not guarantee availability. A confirmed appointment will be communicated to you by our team. We reserve the right to reschedule or cancel appointments due to weather conditions, technician availability, or other circumstances beyond our control. We will make reasonable efforts to notify you as soon as possible in such cases.',
  },
  {
    title: '4. Payment Terms',
    text: 'Payment for services is due at the time of completion unless otherwise agreed upon in a written service contract. We accept cash, check, and major credit cards. For recurring service contracts, payment terms will be outlined in your individual agreement. AMEN Pest Control reserves the right to charge a cancellation or no-show fee for appointments cancelled with less than 24 hours\' notice.',
  },
  {
    title: '5. Satisfaction Guarantee',
    text: 'If you are still experiencing an issue with the pest we treated for within 30 days of service, we will return and re-treat the affected area at no additional charge. This guarantee applies only to the specific pest type treated and does not cover new infestations or pests not included in the original service. The guarantee is void if the client has not followed our post-treatment preparation or re-entry instructions.',
  },
  {
    title: '6. Client Responsibilities',
    text: 'To ensure the effectiveness of our treatments, clients are responsible for preparing the property as instructed by our technicians prior to service; securing or removing pets, children, food, and sensitive items from treatment areas; following all post-treatment re-entry guidelines provided by our team; and notifying us of any known allergies, chemical sensitivities, or health conditions that may affect treatment options.',
  },
  {
    title: '7. Liability Limitation',
    text: 'AMEN Pest Control shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website, including but not limited to property damage resulting from pre-existing conditions, structural deficiencies, or failure to follow technician instructions. Our total liability for any claim arising from a service shall not exceed the amount paid for that specific service.',
  },
  {
    title: '8. Use of Website',
    text: 'You agree to use this website only for lawful purposes. You must not: use the site in any way that violates applicable local, national, or international laws; transmit any unsolicited or unauthorized advertising or promotional material; or attempt to gain unauthorized access to any part of the website or its related systems. AMEN Pest Control reserves the right to restrict or terminate access to the site for any user who violates these terms.',
  },
  {
    title: '9. Intellectual Property',
    text: 'All content on this website — including text, images, logos, videos, and graphics — is the property of AMEN Pest Control or its content suppliers and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content from this site without express written permission from AMEN Pest Control.',
  },
  {
    title: '10. Third-Party Links',
    text: 'Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility or liability for them or for any loss or damage that may arise from your use of them.',
  },
  {
    title: '11. Privacy',
    text: 'Your use of this website and our services is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand our data collection and use practices.',
  },
  {
    title: '12. Changes to Terms',
    text: 'AMEN Pest Control reserves the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to this page with an updated date. Your continued use of our website or services following any changes constitutes your acceptance of the revised terms.',
  },
  {
    title: '13. Governing Law',
    text: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts located in Los Angeles County, California.',
  },
  {
    title: '14. Contact Us',
    text: 'If you have any questions about these Terms of Service, please contact us at: AMEN Pest Control | 3435 Ocean Park Blvd. #107, Santa Monica, CA 90405 | Phone: (888) 428-AMEN | Email: nomorepests@amenpestcontrol.com',
  },
];

export default function TermsOfServicePage() {
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
            Terms of <span className="text-[var(--color-accent)]">Service</span>
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
          >
            <p className="text-gray-600 text-lg mb-10 leading-relaxed border-l-4 border-[var(--color-accent)] pl-5">
              Please read these Terms of Service carefully before using the AMEN Pest Control website
              or engaging our pest control services. These terms govern your access to and use of our
              website and services. AMEN Pest Control is headquartered in Santa Monica, California.
            </p>

            <div className="space-y-6">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{section.text}</p>
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
