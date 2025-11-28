import React from 'react';
import { Zap, Wallet, CheckCircle } from 'lucide-react';

const ScriptSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Question */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Do you own a commercial property?
            </h2>
            <p className="text-xl text-gray-600">
              Are you feeling the pressure of rising electricity costs?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Representation */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 group">
              <img 
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Commercial Building with Solar Panels" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100/90 via-gray-100/40 to-transparent flex items-end p-6">
                <p className="text-mihira-blue font-bold text-lg">Mihira brings solar to your rooftop</p>
              </div>
            </div>

            {/* Content Logic */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mihira-light text-mihira-blue">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">The Problem</h3>
                  <p className="mt-1 text-gray-600">
                    High electricity bills or meters running fast can eat into your commercial profits significantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mihira-light text-mihira-blue">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">The Hesitation</h3>
                  <p className="mt-1 text-gray-600">
                    Have you considered solar energy but hesitated because of the heavy initial investment required?
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mihira-gold/20 text-mihira-gold">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">The Solution</h3>
                  <p className="mt-1 text-gray-600 font-semibold text-mihira-blue">
                    What if you could switch to solar with <span className="underline decoration-mihira-gold decoration-2 underline-offset-2">zero upfront cost?</span>
                  </p>
                  <p className="mt-2 text-gray-600">
                    Mihira Energy Solutions brings this option directly to your property.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ScriptSection;