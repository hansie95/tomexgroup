import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CookieConsent from 'react-cookie-consent';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import Home from './pages/Home';
import GiftSector from './pages/sectors/GiftSector';
import MedSector from './pages/sectors/MedSector';
import SportSector from './pages/sectors/SportSector';
import TechSector from './pages/sectors/TechSector';
import HotelSector from './pages/sectors/HotelSector';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import './i18n/config';
import { useTranslation } from 'react-i18next';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main app content with scroll to top functionality
function AppContent() {
    const { t } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="pt-12 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sectors/gift" element={<GiftSector />} />
            <Route path="/sectors/med" element={<MedSector />} />
            <Route path="/sectors/sport" element={<SportSector />} />
            <Route path="/sectors/tech" element={<TechSector />} />
            <Route path="/sectors/hotel" element={<HotelSector />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent
      location="bottom"
      buttonText={t("cookieConsentApprove")}
      cookieName="tomex-cookie-consent"
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#ffffff',
        padding: '1rem',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      buttonStyle={{
        background: '#10B981',
        color: '#ffffff',
        fontSize: '14px',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out',
      }}
      buttonClasses="hover:bg-green-600 hover:scale-105"
      expires={150}
    >
      <div className="flex items-center gap-2">
        <span className="hidden sm:block">🍪</span>
        <p>
          {t("cookieConsent")}
        </p>
      </div>
    </CookieConsent>
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppContent />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}