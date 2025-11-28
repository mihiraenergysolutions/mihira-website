import React from 'react';
import { Sun, BatteryCharging, ShieldCheck, PenTool } from 'lucide-react';

const features = [
  {
    title: "Zero Investment",
    description: "We install and maintain the plant. You pay only for the electricity you use, just like your regular bill but cheaper.",
    icon: <Sun className="h-8 w-8 text-white" />,
    color: "bg-blue-500"
  },
  {
    title: "Zero Maintenance",
    description: "End-to-end maintenance included. We handle operations so you can focus on your business.",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    color: "bg-green-500"
  },
  {
    title: "Guaranteed Savings",
    description: "Significant reduction in electricity bills from Day 1 with our PPA model.",
    icon: <BatteryCharging className="h-8 w-8 text-white" />,
    color: "bg-mihira-gold"
  },
  {
    title: "Smart Monitoring",
    description: "Advanced technology for real-time monitoring of power generation and efficiency.",
    icon: <PenTool className="h-8 w-8 text-white" />,
    color: "bg-purple-500"
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24 py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mihira-blue font-semibold tracking-wider uppercase text-sm">Why Solar with Mihira?</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Turn Sunlight Into Savings</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-mihira-gold">
              <div className={`w-16 h-16 ${feature.color === 'bg-mihira-gold' ? 'bg-yellow-500' : 'bg-mihira-blue'} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;