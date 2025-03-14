import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hu', label: 'Magyar' },
  { code: 'de', label: 'Deutsch' },
];

const navigationLinks = [
  { path: '/sectors/gift', label: 'nav.gift' },
  { path: '/sectors/med', label: 'nav.med' },
  { path: '/sectors/sport', label: 'nav.sport' },
  { path: '/sectors/tech', label: 'nav.tech' },
  { path: '/sectors/hotel', label: 'nav.hotel' },
  { path: '/', label: 'nav.group' },
];

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
          >
            <img className='h-6' src="/logos/tomex_group_line_logo.png" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tomex-light-teal transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative group py-2 px-4 transition-all duration-300 rounded-md ${
                    isActiveRoute(path)
                      ? 'text-tomex-light-teal font-semibold'
                      : 'text-gray-600 hover:text-tomex-dark-teal'
                  } ${label === 'nav.group' ? 'border border-teal-500 rounded-md' : ''}`}
                >
                  {t(label)}
               { label !== 'nav.group' && <span 
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-tomex-light-teal transition-all duration-300 ${
                    isActiveRoute(path)  ? 'w-full' : 'group-hover:w-full'
                  }`} 
                />}
                  {label === 'nav.group' && (
                    <span className="absolute inset-0 border-1 border-teal-500 rounded-md pointer-events-none" />
                  )}
                </Link>
              ))}
    
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center text-gray-600 ml-2 hover:text-tomex-dark-teal transition-all duration-300 relative group py-2"
              >
                <Globe size={20} className="mr-1" />
                <span>{i18n.language.toUpperCase()}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tomex-light-teal transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 relative group ${
                          i18n.language === lang.code
                            ? 'text-tomex-light-teal bg-gray-50'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-tomex-dark-teal'
                        }`}
                      >
                        {lang.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tomex-light-teal transition-all duration-300 group-hover:w-full" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-tomex-dark-teal transition-all duration-300"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4">
                {navigationLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative group py-2 transition-all duration-300 ${
                      isActiveRoute(path)
                        ? 'text-tomex-light-teal font-semibold'
                        : 'text-gray-600 hover:text-tomex-dark-teal'
                    }`}
                  >
                    {t(label)}
                    <span 
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-tomex-light-teal transition-all duration-300 ${
                        isActiveRoute(path) ? 'w-full' : 'group-hover:w-full'
                      }`} 
                    />
                  </Link>
                ))}

                <div className="border-t pt-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left py-2 text-sm transition-all duration-300 relative group ${
                        i18n.language === lang.code
                          ? 'text-tomex-light-teal bg-gray-50'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-tomex-dark-teal'
                      }`}
                    >
                      {lang.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tomex-light-teal transition-all duration-300 group-hover:w-full" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};