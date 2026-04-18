'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsoredLogos = [
  { src: '/sponsored lists/AHMA.svg', alt: 'AHMA', url: 'https://www.ahma-psw.org/' },
  { src: '/sponsored lists/FPCAC logotype yellow-small.avif', alt: 'FPCAC', url: 'https://www.pullumcenter.org/' },
  { src: '/sponsored lists/Image-Mark_SIM_By-Prayer_Red_Updated.png', alt: 'SIM By Prayer', url: 'https://www.sim.org/about-sim-international/' },
  { src: '/sponsored lists/Revolution_Logo_Transparent-removebg-1920w.png', alt: 'Revolution', url: 'https://www.revolutionnationalpestcouncil.com/' },
  { src: '/sponsored lists/TES-logo.PNG', alt: 'TES', url: 'http://www.transfigurationla.org/' },
  { src: '/sponsored lists/abode-communities-logo-285x300.png', alt: 'Abode Communities', url: 'https://abodecommunities.org/' },
  { src: '/sponsored lists/century-villages-logo_enfold-300x150.png', alt: 'Century Villages', url: 'https://centuryvillages.org/' },
  { src: '/sponsored lists/first-new-christian-logo.jpg', alt: 'First New Christian', url: 'https://1stnewchristian.org/' },
  { src: '/sponsored lists/fulfullment-fund-logo.png', alt: 'Fulfillment Fund', url: 'https://fulfillment.org/' },
  { src: '/sponsored lists/rhf-logo.png', alt: 'RHF', url: 'https://rhf.org/' },
  { src: '/sponsored lists/wsh_logowhite1.png', alt: 'WSH', url: 'https://www.wshmgmt.com/' },
];

// Duplicate 4x for seamless infinite loop
const duplicatedLogos = [
  ...sponsoredLogos,
  ...sponsoredLogos,
  ...sponsoredLogos,
  ...sponsoredLogos,
];

export default function SponsoredLists() {
  return (
    <section className="pb-15 pt-5 bg-gray-50 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent)]">Our Partners &amp; Affiliations</h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 80,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {duplicatedLogos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-8 md:mx-12 w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
