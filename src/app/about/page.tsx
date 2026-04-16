'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Heart, ShieldCheck, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jaeson',
    role: 'Assistant Field Manager',
    bio: 'Jaeson began his career at AMEN Pest Control as a student apprentice and rose through the ranks as a day laborer turned part-time technician turned full-time account manager turned current Assistant Field Manager. Jaeson is a team player, for colleagues and customers alike, and his customer care is unparalleled. He is the proud father of a beautiful daughter.',
    initials: 'J',
    photo: '', // e.g. '/images/team/jaeson.jpg'
  },
  {
    name: 'Eugene',
    role: 'Director of Operations',
    bio: 'Eugene has over a decade of experience in the pest control industry. His industry expertise combined with his infectious laugh are a calming presence when dealing with pesky pests. Eugene has wisdom to share about everything, from conversations about rats or fleas to conversations about Japan or Hawaii, as he, his wife, and daughter and son are well-traveled. ',
    initials: 'E',
    photo: '/images/eugene.jpg', // e.g. '/images/team/eugene.jpg'
  },
  {
    name: 'Silvia',
    role: 'Service Manager',
    bio: "Silvia has spent her professional career managing the office operations of growing customer service industry businesses. She has mastered the delicate balance of promoting collaborative communication between her office team, the field technicians, and customers - whether they're managers, maintenance staff, tenants, or homeowners - all in a fast-paced and ever shifting environment. These skills are refined as a wife and mother of 4 boys.",
    initials: 'S',
    photo: '', // e.g. '/images/team/harold.jpg'
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
            We&apos;re a family-run, community-driven pest control company serving the greater Southern California area with pride
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section
        className="py-32 relative bg-zinc-50 bg-cover bg-no-repeat bg-top lg:bg-center lg:bg-[length:auto_100%]"
        style={{ backgroundImage: "url('/images/george_2.png')" }}
      >
        <div className="absolute inset-0 bg-white/40 lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:from-100% lg:to-white/90 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 bg-white/50 p-8 lg:p-12 rounded-3xl backdrop-blur-lg shadow-2xl border border-white/60"
          >
            <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Meet The Owner</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6">
              George
            </h3>
            <div className="space-y-4 text-black text-lg leading-relaxed">
              <p>
                George has over 25 years of experience in the pest control industry. He has worked as a technician, inspector, and account manager for small businesses as well as international companies. Since the founding of AMEN in 2013, George's commitment to service has expanded to include motivational speaking presentations as an entrepreneur and licensed professional, AMEN sponsorship of multiple social justice organizations, and collaborations with training programs for people experiencing homelessness, veterans, and others overcoming challenges to re-enter the job market. George and his wife are preparing their 8 children to carry on this legacy of service.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center text-black">
                <ShieldCheck className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                A+ BBB Rating
              </div>
              {/* <div className="flex items-center text-gray-600">
                <Award className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                2020 Expertise Award
              </div> */}
              <div className="flex items-center text-black">
                <Heart className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                Eco & Pet Friendly
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
                {/* Avatar: photo if available, otherwise initials */}
                {member.photo ? (
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-md ring-4 ring-[var(--color-primary)]/20">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 mx-auto bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-md">
                    {member.initials}
                  </div>
                )}
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{member.name}</h4>
                <p className="text-[var(--color-accent)] font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-24 bg-zinc-50 border-t border-gray-100">
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

      {/* Values / Mission */}
      <section className="py-20 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Users className="h-12 w-12 mx-auto text-[var(--color-accent)] mb-6" />
          <h2 className="text-3xl font-extrabold mb-4">Serving Residential, Commercial & Property Management</h2>
          <p className="text-blue-100 text-lg mb-8">
            No matter the size of your property or the severity of the infestation, our team has the tools and expertise to deliver results — guaranteed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* TEMPORARY CTA — Book A Service button commented out until booking system is live
            <a
              href="https://api.leadconnectorhq.com/booking/amen-pest-control-l3o6zkahen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg w-full sm:w-auto"
            >
              Book A Service
            </a>
            */}
            <a
              href="/#contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg w-full sm:w-auto"
            >
              Get a Free Quote
            </a>
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
