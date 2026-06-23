import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';
import VisitTracker from '@/components/VisitTracker';
import { AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <VisitTracker />
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default MainLayout;
