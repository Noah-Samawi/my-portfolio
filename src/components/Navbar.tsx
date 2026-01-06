"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  lang: string;
  setLang: (l: string) => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: lang === 'EN' ? 'Home' : 'Startseite', href: '#home' },
    { name: lang === 'EN' ? 'About' : 'Über mich', href: '#about' },
    { name: lang === 'EN' ? 'Services' : 'Leistungen', href: '#services' },
    { name: lang === 'EN' ? 'Skills' : 'Fähigkeiten', href: '#skills' },
    { name: lang === 'EN' ? 'Contact' : 'Kontakt', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-black tracking-tighter italic"
          whileHover={{ scale: 1.05 }}
        >
          NOAH<span className="text-blue-600">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'DE' : 'EN')}
            className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl hover:scale-110 transition-all relative group"
          >
            <Globe className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            <span className="absolute -top-1 -right-1 text-[9px] font-black bg-blue-600 text-white px-1 rounded shadow-sm">
              {lang}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl hover:scale-110 transition-all text-blue-600 dark:text-yellow-400"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-slate-600 dark:text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;