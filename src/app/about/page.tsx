'use client';

import { motion } from 'framer-motion';
import { Users, Heart, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Jaeson Fuentes',
    role: 'Assistant Director of Operations',
    bio: 'Jaeson is a licensed pest control technician with 5 years of field experience. He specializes in residential and commercial pest control services, including termite control, rodent control, and general pest management.',
    initials: 'JF',
  },
  {
    name: 'Eugene Nguyen',
    role: 'Director of Operations',
    bio: 'Eugene has 8 years experience in the pest control industry and an extensive professional history in the service sector. These combined skills have positioned him at the crossroads between field management, customer service, and service technician - our swiss army knife in residence.',
    initials: 'EN',
  },
  {
    name: 'Harold Jones, Sr.',
    role: 'Service Manager',
    bio: 'Harold has 30 years experience in the pest control industry. He understands the biology of pests as well as their behavioral patterns, which allows him the ability to  answer almost any question and effectively treat even the most highly-infested areas. From rats to fleas, Harold is the pest whisperer.',
    initials: 'DK',
  },
];

export default function AboutPage() {
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
            About <span className="text-[var(--color-accent)]">AMEN Pest Control</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re a family-run, community-driven pest control company serving the greater Los Angeles area with pride.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Owner Photo */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden">
                <Image
                  src="/images/george.png"
                  alt="George - Founder and CEO of AMEN Pest Control"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Owner Info */}
            <div className="lg:w-3/5">
              <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Meet The Owner</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6">
                George Blackwell
              </h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  George has over 25 years of experience in the pest control industry. He has worked as a technician. inspector, and account manager for local, small businesses as well as international companies. In his current role as owner/operator, he now also serves as a presentation speaker with topics ranging from best practices to avoid pests, pests infestation intervention, as well as speaking as an entrepreneur and licensed professional to social enterprises designed to train homeless individuals, veterans, and others re-entering the job market.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center text-gray-600">
                  <ShieldCheck className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                  A+ BBB Rating
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                  2020 Expertise Award
                </div>
                <div className="flex items-center text-gray-600">
                  <Heart className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                  Eco & Pet Friendly
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
              The People Behind Your Protection
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                <div className="w-24 h-24 mx-auto bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-md">
                  {member.initials}
                </div>
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{member.name}</h4>
                <p className="text-[var(--color-accent)] font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Mission */}
      <section className="py-20 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Users className="h-12 w-12 mx-auto text-[var(--color-accent)] mb-6" />
          <h2 className="text-3xl font-extrabold mb-4">Serving Residential, Commercial & Property Management</h2>
          <p className="text-blue-100 text-lg mb-8">
            No matter the size of your property or the severity of the infestation, our team has the tools and expertise to deliver results — guaranteed.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
