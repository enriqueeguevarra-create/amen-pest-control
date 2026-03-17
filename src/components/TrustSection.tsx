'use client';

import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

const trustFeatures = [
  {
    icon: Leaf,
    title: '2020 Award Recipient ',
    description: 'AMEN Pest  Control has been recognized as one of the best pest control companies in Los Angeles for 2020',
  },
  {
    icon: ShieldCheck,
    title: 'A+ Rating on BBB',
    description: 'The A+ rating with the BBB represents our hard work to build strong relationships with our clients',
  },
  {
    icon: HeartHandshake,
    title: '100% Satisfaction Guarantee',
    description: 'If you are still experiencing an issue with the pest we treated for within 30 days, we will come out to treat again at no cost to you!',
  },
];

export default function TrustSection() {
  return (
    <section id="why-us" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Why Homeowners Choose AMEN</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
            The Future of Integrated Pest Management
          </h3>
          <p className="text-xl text-gray-600">
            We don't just spray chemicals and leave. We provide environmentally-friendly, effective solutions backed by an unbeatable guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-xl text-center border-t-4 border-[var(--color-accent)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-10 w-10 text-[var(--color-accent)]" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
