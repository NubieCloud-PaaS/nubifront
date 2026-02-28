'use client';

import Logo from '@/components/Logo';

const CONSOLE_URL = process.env.NEXT_PUBLIC_CONSOLE_URL || 'https://console.nubiecloud.io';

export default function Footer() {
  return (
    <footer className="bg-surface-0 border-t border-border-0 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4">
              <Logo size="small" />
            </a>
            <p className="text-text-tertiary text-sm">
              Simplifying Cloud, Amplifying Business
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-4">Plateforme</h3>
            <ul className="space-y-2 text-sm text-text-tertiary">
              <li><a href="/#processus" className="hover:text-text-primary transition-colors">Processus</a></li>
              <li><a href="/#plateformes" className="hover:text-text-primary transition-colors">Plateformes</a></li>
              <li><a href="/#fonctionnalites" className="hover:text-text-primary transition-colors">Fonctionnalites</a></li>
              <li><a href="/#tarifs" className="hover:text-text-primary transition-colors">Tarifs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-text-tertiary">
              <li><a href="mailto:contact@nubitech.io" className="hover:text-text-primary transition-colors">Contact</a></li>
              <li><a href="mailto:support@nubitech.io" className="hover:text-text-primary transition-colors">Support</a></li>
              <li><a href={`${CONSOLE_URL}/login`} className="hover:text-text-primary transition-colors">Connexion</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-4">Demarrer</h3>
            <ul className="space-y-2 text-sm text-text-tertiary">
              <li><a href={`${CONSOLE_URL}/register`} className="hover:text-text-primary transition-colors">Inscription gratuite</a></li>
              <li><a href="mailto:demo@nubitech.io" className="hover:text-text-primary transition-colors">Demander une demo</a></li>
              <li><a href="mailto:sales@nubitech.io" className="hover:text-text-primary transition-colors">Sales</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-0 mt-8 pt-8 text-center text-xs text-text-quaternary">
          <p>&copy; 2025 NUBIECLOUD PLATFORM. Tous droits reserves. - Simplifying Cloud, Amplifying Business</p>
        </div>
      </div>
    </footer>
  );
}
