import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const MihiraLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 210" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Mihira Energy Solutions Logo">
    <defs>
      <pattern id="solarGridBlue" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        <rect width="6" height="6" fill="#004b8d" />
        <path d="M0 0 H6 M0 0 V6" stroke="white" strokeWidth="0.8" />
      </pattern>
    </defs>
    
    {/* Sun Group centered horizontally at 200 */}
    <g transform="translate(200, 95)">
        {/* Rays */}
        <g>
            {[...Array(7)].map((_, i) => {
                // 7 rays distributed in an arc
                const angle = (i - 3) * 22; 
                return (
                    <path 
                        key={i}
                        d="M-8 -62 L8 -62 L0 -95 Z" 
                        fill="#fbb03b" 
                        transform={`rotate(${angle})`}
                    />
                );
            })}
        </g>

        {/* Sun Body - Semi circle */}
        <path d="M-52 0 A 52 52 0 0 1 52 0" fill="#fbb03b" /> 
    </g>

    {/* Text MIHIRA */}
    <text 
        x="200" 
        y="165" 
        textAnchor="middle" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="900" 
        fontSize="80" 
        fill="url(#solarGridBlue)"
        style={{ letterSpacing: '1px' }}
    >
        MIHIRA
    </text>

    {/* Text ENERGY SOLUTIONS */}
    <text 
        x="200" 
        y="195" 
        textAnchor="middle" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="700" 
        fontSize="17" 
        fill="#222" 
        style={{ letterSpacing: '3px' }}
    >
        ENERGY SOLUTIONS
    </text>
</svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', ' ');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 block" onClick={handleLogoClick}>
              <MihiraLogo className="h-20 w-auto py-1" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-mihira-dark hover:text-mihira-gold font-medium transition-colors">Who We Are</a>
            <a href="#offer" onClick={(e) => handleNavClick(e, 'offer')} className="text-mihira-dark hover:text-mihira-gold font-medium transition-colors">What We Offer</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-mihira-dark hover:text-mihira-gold font-medium transition-colors">Our Services</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-4 py-2 bg-mihira-blue text-white rounded-full hover:bg-mihira-dark transition-colors font-medium">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mihira-dark hover:text-mihira-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-mihira-blue hover:bg-gray-50 rounded-md">Who We Are</a>
            <a href="#offer" onClick={(e) => handleNavClick(e, 'offer')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-mihira-blue hover:bg-gray-50 rounded-md">What We Offer</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-mihira-blue hover:bg-gray-50 rounded-md">Our Services</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-2 text-base font-medium text-mihira-blue font-bold hover:bg-gray-50 rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;