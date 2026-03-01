'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/components/ThemeProvider';
import Logo from '@/components/Logo';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

const navLinks = [
  { label: 'Produit', href: '/#plateformes' },
  { label: 'Processus', href: '/#processus' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-0/80 backdrop-blur-xl border-b border-border-0 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Logo size="small" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/blog') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
              className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-surface-3 transition-colors"
            >
              {isDarkMode ? (
                <svg className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a
              href={`${CONSOLE_URL}/login`}
              className="btn-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Lancez-vous
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-8 w-8 flex items-center justify-center rounded-md hover:bg-surface-3 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-5 w-5 text-text-primary" />
            ) : (
              <Bars3Icon className="h-5 w-5 text-text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-surface-0/95 backdrop-blur-xl border-b border-border-0"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-text-secondary hover:text-text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border-0 flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-surface-3 transition-colors"
                >
                  {isDarkMode ? (
                    <svg className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                <a
                  href={`${CONSOLE_URL}/login`}
                  className="flex-1 text-center btn-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Lancez-vous
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
