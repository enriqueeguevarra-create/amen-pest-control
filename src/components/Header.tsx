'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/#why-us', label: 'Why Us' },
    { href: '/#testimonials', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="AMEN Pest Control Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${pathname === link.href
                  ? 'text-[var(--color-primary)] font-bold'
                  : 'text-gray-700 hover:text-[var(--color-primary)]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-center space-x-3 text-gray-500 mr-2 xl:mr-6">
              <Link href="https://www.facebook.com/AMENPestControl/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/amen_pest_control/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <a href="tel:8884282636" className="flex items-center text-[var(--color-primary)] font-bold text-lg hover:text-[var(--color-primary-light)]">
              <Phone className="h-5 w-5 mr-2" />
              (888) 428-AMEN
            </a>
            <Link
              href="https://api.leadconnectorhq.com/booking/amen-pest-control-l3o6zkahen"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
              className="w-full sm:w-auto text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-md font-bold transition-colors shadow-md"
            >
              Book A Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[var(--color-primary)] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${pathname === link.href
                  ? 'text-[var(--color-primary)] bg-blue-50 font-bold'
                  : 'text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-gray-100 mb-2">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <Link href="https://www.facebook.com/AMENPestControl/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/amen_pest_control/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex items-center justify-center px-4">
              <a href="tel:8884282636" className="flex items-center text-[var(--color-primary)] font-bold text-lg">
                <Phone className="h-5 w-5 mr-2" />
                (888) 428-AMEN
              </a>
            </div>
            <div className="mt-4 px-4 flex justify-center">
              <Link
                href="https://api.leadconnectorhq.com/booking/amen-pest-control-l3o6zkahen"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-md font-bold shadow-md"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
