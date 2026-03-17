import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { ServicesOverview } from './components/ServicesOverview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StatsSection } from './components/StatsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Chatbot } from './components/Chatbot';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollToTop } from './components/ScrollToTop';

// Real Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

const ScrollToTopEffect = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <Hero />
    <TechStack />
    <ServicesOverview />
    <ProjectShowcase />
    <WhyChooseUs />
    <StatsSection />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LoadingScreen />
        <Router>
          <ScrollToTopEffect />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <Chatbot />
            <ScrollToTop />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

// Need to import AnimatePresence for the wrapper
import { AnimatePresence } from 'framer-motion';

export default App;
