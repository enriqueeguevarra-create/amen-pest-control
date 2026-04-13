'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Map, Thermometer, Wind, Bird, Home } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'general',
    title: 'General Pest Control',
    icon: Crosshair,
    description: 'Comprehensive protection against common household pests. Safe for family and pets.',
  },
  {
    id: 'rodents',
    title: 'Rodent Control',
    icon: Map, // Proxy icon for exclusion
    description: 'Trapping, exclusion, and sanitation to rid your property of mice and rats.',
  },
  {
    id: 'bedbugs',
    title: 'Bed Bugs',
    icon: Home,
    description: 'Targeted treatments to completely eliminate bed bugs from mattresses and furniture.',
  },
  {
    id: 'termites',
    title: 'Termites & Fungus',
    icon: ShieldAlert,
    description: 'Local treatments and full-structure protection against wood-destroying organisms.',
  },
  {
    id: 'birds',
    title: 'Bird & Flies Abatement',
    icon: Bird,
    description: 'Humane deterrents to keep birds and flies away from your commercial or residential property.',
  },
  {
    id: 'heat',
    title: 'Heat Treatment',
    icon: Thermometer,
    description: '100% chemical-free thermal remediation. Highly effective for deep infestations.',
  },
  {
    id: 'freezing',
    title: 'Freezing Treatment',
    icon: Wind,
    description: 'Cryonite freezing technology to instantly kill pests without toxic residues.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Our Specialized Services</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)]">
              How Can We Protect Your Home?
            </h3>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
          >
            Get a Free Quote
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent hover:bg-[var(--color-primary)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <service.icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-[var(--color-accent)]" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-300 mb-6 flex-grow transition-colors">
                {service.description}
              </p>

              <Link
                href={`/services#${service.id}`}
                className="mt-auto inline-flex items-center text-sm font-bold text-[var(--color-accent)] group-hover:text-white group-hover:opacity-80 transition-all hover:opacity-100"
              >
                Learn More <span className="ml-1 text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
