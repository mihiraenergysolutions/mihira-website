import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="relative bg-mihira-blue text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Solar Panels on Roof" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mihira-blue/90 to-mihira-blue/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1 mb-6 border border-mihira-gold rounded-full text-mihira-gold font-semibold text-sm uppercase tracking-wide">
            Powering India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Solar Energy at <span className="text-mihira-gold">Zero Upfront Cost</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Your first step toward protecting the environment is reducing your carbon footprint. Switch to solar today with zero upfront investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mihira-blue bg-white hover:bg-gray-100 transition-colors md:text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="inline-flex items-center justify-center px-8 py-3 border-2 border-mihira-gold text-base font-medium rounded-md text-mihira-gold hover:bg-mihira-gold hover:text-white transition-colors md:text-lg">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;