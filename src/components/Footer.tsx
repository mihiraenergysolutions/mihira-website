import React from 'react';

const FooterLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 210" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Mihira Energy Solutions Logo">
    {/* Sun Group */}
    <g transform="translate(200, 95)">
        {/* Rays */}
        <g>
            {[...Array(7)].map((_, i) => {
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
        fill="#ffffff"
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
        fill="#e5e7eb" 
        style={{ letterSpacing: '3px' }}
    >
        ENERGY SOLUTIONS
    </text>
</svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-mihira-dark text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center mb-6 md:mb-0">
             <FooterLogo className="h-24 w-auto" />
          </div>

          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div> */}
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Mihira Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;