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
          buttonText="Accept"
          cookieName="tomex-cookie-consent"
          style={{ background: '#21514E' }}
          buttonStyle={{ background: '#5FC2C1', color: 'white', fontSize: '13px' }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
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