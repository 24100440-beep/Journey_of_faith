// 'use client'

// import * as React from 'react'
// import {
//   ThemeProvider as NextThemesProvider,
//   type ThemeProviderProps,
// } from 'next-themes'

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type StyleTheme = 'minimal' | 'dark' | 'card' | 'glass' | 'vintage' | 'modern';

interface ThemeContextType {
  currentStyle: StyleTheme;
  changeStyle: (style: StyleTheme) => void;
  isStyleMenuOpen: boolean;
  toggleStyleMenu: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentStyle, setCurrentStyle] = useState<StyleTheme>('modern');
  const [isStyleMenuOpen, setIsStyleMenuOpen] = useState(false);

  useEffect(() => {
    const savedStyle = localStorage.getItem('userStyle') as StyleTheme;
    if (savedStyle && ['minimal', 'dark', 'card', 'glass', 'vintage', 'modern'].includes(savedStyle)) {
      setCurrentStyle(savedStyle);
    }
  }, []);

  const changeStyle = (style: StyleTheme) => {
    setCurrentStyle(style);
    localStorage.setItem('userStyle', style);
    setIsStyleMenuOpen(false);
  };

  const toggleStyleMenu = () => setIsStyleMenuOpen(!isStyleMenuOpen);

  return (
    <ThemeContext.Provider value={{ currentStyle, changeStyle, isStyleMenuOpen, toggleStyleMenu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};