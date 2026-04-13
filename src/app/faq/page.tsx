'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'How quickly can AMEN Pest Control respond to a pest emergency?',
    answer:
      'We prioritize urgent pest situations and aim to respond same-day for our service area. Depending on your location and the time of day, we often arrive within a few hours of your call. For the fastest response, call us directly.',
  },
  {
    question: 'Do you offer free estimates for pest control services?',
    answer:
      'Yes! We provide free, no-obligation estimates for all pest control treatments and inspections. Simply fill out our contact form or give us a call and we\'ll schedule a convenient time to assess your property and provide a transparent, upfront quote — no hidden fees.',
  },
  {
    question: 'How often should I schedule pest control treatments?',
    answer:
      'We recommend scheduling professional pest control at least quarterly for year-round protection. However, some infestations may require more frequent treatments. Regular maintenance keeps pests away, protects your home, and is more cost-effective than dealing with large infestations.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'AMEN Pest Control proudly serves the local community and surrounding areas. If you\'re unsure whether we cover your area, just give us a call and we\'ll let you know right away.',
  },
  {
    question: 'Are your pest control treatments safe for children and pets?',
    answer:
      'Yes, we use EPA-approved, eco-friendly products that are safe for your family and pets when applied correctly. Our technicians will give you specific guidance on any precautions to take — such as keeping pets away from treated areas for a short drying period — to ensure everyone\'s safety.',
  },
  {
    question: 'What types of pests do you treat?',
    answer:
      'We treat a wide range of common pests including ants, cockroaches, rodents, termites, bed bugs, spiders, wasps, mosquitoes, and more. If you\'re dealing with a pest not listed here, contact us and we\'ll let you know if we can help or refer you to a specialist.',
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        id={`faq-toggle-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-orange-50/60 transition-colors group"
      >
        <span className="text-gray-900 font-semibold text-base sm:text-lg leading-snug group-hover:text-[var(--color-primary)] transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100 bg-white">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[var(--color-primary)] text-white py-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-200 text-lg"
          >
            Everything you need to know about AMEN Pest Control. Can&apos;t find your answer?{' '}
            <a
              href="tel:+1234567890"
              className="text-white font-bold hover:text-[var(--color-accent)] transition-colors underline underline-offset-2"
            >
              Call us directly.
            </a>
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* CTA below accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-14 rounded-2xl bg-[var(--color-primary)] text-white p-8 text-center shadow-xl"
          >
            <h2 className="text-2xl font-extrabold mb-2">Still have questions?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              Our team is available to answer any pest control questions and schedule your service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                id="faq-cta-phone"
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
              <a
                id="faq-cta-schedule"
                href="https://api.leadconnectorhq.com/booking/amen-pest-control-l3o6zkahen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md text-center"
              >
                Book Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
