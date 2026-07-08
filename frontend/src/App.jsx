import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ModulesPage from './pages/ModulesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import InstallationsPage from './pages/InstallationsPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/installations" element={<InstallationsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
