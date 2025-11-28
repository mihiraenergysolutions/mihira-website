import React from 'react';

const SavingsCalculator: React.FC = () => {
  return (
    <section id="savings" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Savings Illustration
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Based on a 500KW System Size with ~67,500 units generation per month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Regular Bill Card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-700 mb-6">Regular Power Bill</h3>
            <div className="space-y-4 w-full">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-500 uppercase">Monthly</p>
                <p className="text-2xl font-bold text-gray-800">₹ 5,40,000</p>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-500 uppercase">Yearly</p>
                <p className="text-2xl font-bold text-gray-800">₹ 64,80,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase">6 Years</p>
                <p className="text-2xl font-bold text-gray-800">₹ 3,88,80,000</p>
              </div>
            </div>
          </div>

          {/* Mihira Solutions Card */}
          <div className="bg-mihira-blue/5 rounded-2xl p-8 border border-mihira-blue/20 flex flex-col items-center text-center relative overflow-hidden">
             <div className="absolute top-0 w-full h-1 bg-mihira-blue"></div>
            <h3 className="text-xl font-bold text-mihira-blue mb-6">With Mihira Solutions</h3>
            <div className="space-y-4 w-full">
              <div className="pb-4 border-b border-blue-100">
                <p className="text-sm text-gray-500 uppercase">Monthly</p>
                <p className="text-2xl font-bold text-mihira-blue">₹ 4,72,500</p>
              </div>
              <div className="pb-4 border-b border-blue-100">
                <p className="text-sm text-gray-500 uppercase">Yearly</p>
                <p className="text-2xl font-bold text-mihira-blue">₹ 56,70,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase">6 Years</p>
                <p className="text-2xl font-bold text-mihira-blue">₹ 3,40,20,000</p>
              </div>
            </div>
          </div>

          {/* Your Savings Card */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 flex flex-col items-center text-center relative shadow-lg transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
            <h3 className="text-xl font-bold text-green-700 mb-6">Your Net Savings</h3>
            <div className="space-y-4 w-full">
              <div className="pb-4 border-b border-green-100">
                <p className="text-sm text-green-600 uppercase">Monthly Savings</p>
                <p className="text-3xl font-extrabold text-green-700">₹ 68,000</p>
              </div>
              <div className="pb-4 border-b border-green-100">
                <p className="text-sm text-green-600 uppercase">Yearly Savings</p>
                <p className="text-3xl font-extrabold text-green-700">₹ 8,16,000</p>
              </div>
              <div>
                <p className="text-sm text-green-600 uppercase">6-Year Savings</p>
                <p className="text-3xl font-extrabold text-green-700">₹ 48,96,000</p>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          ** Calculations assume regular electricity cost of ₹8 per unit vs Mihira PPA at ₹7 per unit. Conditions Apply.
        </p>
      </div>
    </section>
  );
};

export default SavingsCalculator;