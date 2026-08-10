'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  // La section /docs (Fumadocs) pilote son propre thème, avec son propre stockage.
  // Sans cette garde, l'effet ci-dessous retirerait la classe `light` posée par
  // Fumadocs — d'où un fond clair sous un texte clair hérité des tokens sombres.
  const isDocs = pathname?.startsWith('/docs') ?? false;

  useEffect(() => {
    if (isDocs) return;

    // Fumadocs laisse sa classe `dark` en quittant /docs (navigation client) :
    // inerte pour les tokens du site, mais on ne garde pas d'état fantôme.
    document.documentElement.classList.remove('dark');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light');
    }
  }, [isDocs]);

  const toggleDarkMode = () => {
    if (isDocs) return;

    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
