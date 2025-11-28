import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScriptSection from './components/ScriptSection';
import Offer from './components/Offer';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ScriptSection />
        <Offer />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;