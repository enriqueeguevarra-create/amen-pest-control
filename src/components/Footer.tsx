'use client';

import Link from 'next/link';
import { Facebook, Twitter, Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              AMEN <span className="text-[var(--color-accent)]">Pest Control</span>
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Los Angeles&apos; most trusted pest control service. We provide environmentally-friendly pest control options and effective solutions for commercial properties and residential owners.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://www.facebook.com/AmenPestControlLA" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/amen_pest_control/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              {/* <Link href="https://twitter.com/amen_pest" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#general" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">General Pest Control</Link></li>
              <li><Link href="/services#rodents" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Rodents Control</Link></li>
              <li><Link href="/services#bedbugs" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Bed Bugs</Link></li>
              <li><Link href="/services#termites" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Termites & Fungus</Link></li>
              <li><Link href="/services#birds" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Bird/Flies Abatement</Link></li>
              <li><Link href="/services#heat" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Heat Treatment</Link></li>
              <li><Link href="/services#freezing" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Freezing Treatment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:8884282636" className="text-blue-100 hover:text-white transition-colors">
                  (888) 428-AMEN <br />
                  <span className="text-sm">(888) 428-2636</span>
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:NoMorePests@AmenPestControl.com" className="text-blue-100 hover:text-white break-all transition-colors">
                  NoMorePests@AmenPestControl.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 leading-tight">
                  3435 Ocean Park Blvd. #107,<br />
                  Santa Monica, CA 90405
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / BBB */}
          <div className="space-y-6">
            {/* <div>
              <h4 className="text-lg font-semibold uppercase tracking-wider text-white mb-4">Pest Tips & Offers</h4>
              <p className="text-sm text-blue-100 mb-3">Get seasonal pest tips — enter your email</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 w-full text-gray-900 bg-white border-2 border-white/80 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] placeholder-gray-500"
                />
                <button type="submit" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] px-4 py-2 rounded-r-md transition-colors font-medium text-white">
                  Join
                </button>
              </form>
            </div> */}

            <div className="pt-2">
              {/* BBB Badge Placeholder */}
              <div className="inline-flex items-center bg-white/10 px-4 py-2 border border-white/20 rounded-md">
                <span className="text-white font-bold text-lg mr-2">BBB</span>
                <span className="text-white text-sm font-medium leading-tight tracking-wider uppercase">ACCREDITED<br />BUSINESS</span>
                <span className="ml-3 text-[var(--color-accent)] font-bold text-xl">A+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} AMEN Pest Control. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
