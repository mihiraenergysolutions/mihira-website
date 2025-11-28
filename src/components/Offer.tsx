import React from 'react';
import { Sun } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="scroll-mt-24 py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mihira-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-mihira-gold rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="bg-mihira-gold rounded-full p-1 mt-1 mr-3">
                                <Sun className="h-4 w-4 text-mihira-blue" />
                            </div>
                            <span><strong className="text-mihira-gold">Rooftop Solar PPA (6-12 years):</strong> We build, operate, and transfer the solar plant to you for free after the contract period.</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-mihira-gold rounded-full p-1 mt-1 mr-3">
                                <Sun className="h-4 w-4 text-mihira-blue" />
                            </div>
                            <span><strong>Pay less than your current unit price</strong> and start your savings</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-mihira-gold rounded-full p-1 mt-1 mr-3">
                                <Sun className="h-4 w-4 text-mihira-blue" />
                            </div>
                            <span>End-to-end EPC, design, installation & maintenance.</span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                        <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Projected Savings Example</p>
                        <p className="text-4xl font-bold text-mihira-gold mb-1">₹15 Crores+</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;