'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldAlert, Crosshair, Thermometer, Wind, Bird, Home, Map, Bug, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'general',
    title: 'General Pest Control',
    icon: Crosshair,
    shortDescription: 'Comprehensive protection against common household pests.',
    details: [
      'Full interior and exterior inspection',
      'Treatment for ants, spiders, cockroaches, and more',
      'Eco-friendly and pet-safe products',
      'Quarterly or monthly maintenance plans available',
      'Same-day or next-day service',
    ],
  },
  {
    id: 'rodents',
    title: 'Rodent Control',
    icon: Map,
    shortDescription: 'Complete rodent exclusion, trapping, and sanitation.',
    details: [
      'Thorough property assessment for entry points',
      'Sealing and exclusion work to prevent re-entry',
      'Trapping and removal of mice, rats',
      'Attic and crawl-space sanitation',
      'Follow-up monitoring visits',
    ],
  },
  {
    id: 'bedbugs',
    title: 'Bed Bugs',
    icon: Bug,
    shortDescription: 'Targeted treatments to completely eliminate bed bugs.',
    details: [
      'Detailed mattress, furniture, and room inspection',
      'Chemical treatment and heat treatment options',
      'Follow-up visits to ensure complete eradication',
      'Encasement recommendations for prevention',
      'Discreet service vehicles for tenant comfort',
    ],
  },
  {
    id: 'termites',
    title: 'Termites & Fungus',
    icon: ShieldAlert,
    shortDescription: 'Structural protection against wood-destroying organisms.',
    details: [
      'Free termite inspection and damage assessment',
      'Local and full-structure fumigation options',
      'Wood-destroying fungus treatment',
      'Real estate transaction (escrow) inspections',
      'Annual monitoring and prevention plans',
    ],
  },
  {
    id: 'birds',
    title: 'Bird & Flies Abatement',
    icon: Bird,
    shortDescription: 'Humane deterrents for commercial and residential properties.',
    details: [
      'Bird spike, netting, and wire installation',
      'Pigeon and crows exclusion',
      'Fly control for restaurants and food facilities',
      'Rooftop and ledge deterrent systems',
      'Humane trapping and relocation',
    ],
  },
  {
    id: 'heat',
    title: 'Heat Treatment',
    icon: Thermometer,
    shortDescription: '100% chemical-free thermal remediation for deep infestations.',
    details: [
      'Raises room temperature to eliminate all life stages of pests',
      'Ideal for bed bugs, cockroaches, and stored-product pests',
      'No chemicals — safe for sensitive environments',
      'Single-day treatment with minimal prep required',
      'Post-treatment monitoring included',
    ],
  },
  {
    id: 'freezing',
    title: 'Freezing Treatment',
    icon: Wind,
    shortDescription: 'Cryonite freezing technology to instantly kill pests.',
    details: [
      'Uses CO2 snow at -110°F to freeze pests on contact',
      'No chemical residues left behind',
      'Perfect for food-handling, healthcare, and sensitive areas',
      'Can be used alongside other treatment methods',
      'Immediate results with no drying time',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Our <span className="text-[var(--color-accent)]">Services</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From roaches to rodents, termites to birds — we have the expertise and eco-friendly solutions to protect your property.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-8">
              AMEN Pest Control Overview
            </h2>
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/videos/vid_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`scroll-mt-28 flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Icon Panel */}
              <div className="lg:w-2/5 flex justify-center">
                <div className="w-48 h-48 rounded-3xl bg-blue-50 flex items-center justify-center shadow-lg">
                  <service.icon className="h-24 w-24 text-[var(--color-primary)]" />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-extrabold text-[var(--color-primary)] mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.shortDescription}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-md"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-primary)] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">Contact us today for a free, no-obligation inspection and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8884282636"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-blue-50 px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg w-full sm:w-auto"
            >
              Call (888) 428-AMEN
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
