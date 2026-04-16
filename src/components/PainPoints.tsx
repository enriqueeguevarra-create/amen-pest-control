'use client';

import { motion } from 'framer-motion';
import { BugOff, Rat, Bug, Home } from 'lucide-react';

const pains = [
  {
    title: 'Roaches',
    description: 'They multiply fast and hide in your walls. We flush them out.',
    icon: BugOff,
  },
  {
    title: 'Rodents',
    description: 'Chewed wires, droppings, and health risks. We stop them at the source.',
    icon: Rat,
  },
  {
    title: 'Bed Bugs',
    description: 'Sleepless nights and itchy bites. Our heat treatments eradicate them completely.',
    icon: Bug,
  },
  {
    title: 'Termites',
    description: 'Silent destroyers of your greatest investment. We protect your home structure.',
    icon: Home,
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
            Don't Let Pests Take Over Your Home
          </h2>
          <p className="text-lg text-gray-600">
            Southern California weather means pests are a year-round threat. Whether you're dealing with structural damage, health risks, or just the gross factor, we have the fast, effective solution you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-orange-50 text-[var(--color-accent)] rounded-full flex items-center justify-center mb-6">
                <pain.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{pain.title}</h3>
              <p className="text-gray-600">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
