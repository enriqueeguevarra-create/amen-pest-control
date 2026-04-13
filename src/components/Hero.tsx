'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Los Angeles' Most <span className="text-[var(--color-accent)]">Trusted</span> Pest Control
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Fast response times, eco-friendly & pet-friendly solutions to keep your home or business 100% pest-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://api.leadconnectorhq.com/booking/amen-pest-control-l3o6zkahen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg w-full sm:w-auto text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="#contact"
                className="bg-white text-[var(--color-primary)] hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg w-full sm:w-auto text-center"
              >
                Request a Quote
              </Link>
            </div>
            
            <div className="mt-4 flex justify-center lg:justify-start">
               <a
                href="tel:8884282636"
                className="text-white hover:text-gray-200 font-bold text-lg flex items-center transition-all underline underline-offset-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Or call us at (888) 428-AMEN
              </a>
            </div>

            {/* Trust Badges Inline */}
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 items-center border-t border-white/10 text-sm font-medium">
              <div className="flex items-center text-gray-300">
                <ShieldCheck className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                A+ BBB Rated
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                2020 Expertise Award
              </div>
              <div className="flex items-center text-gray-300">
                <ThumbsUp className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                100% Satisfaction Guarantee
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                // poster="https://video.wixstatic.com/video/611f73_18f8c9fafa44452ab69e851170a017b4/1080p/mp4/file.mp4/v1/fill/w_1280,h_720/file.jpg"
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/vid_1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
