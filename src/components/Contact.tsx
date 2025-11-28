import React, { useState } from 'react';
import { MapPin, Globe, Mail, Send, User, Phone, Map } from 'lucide-react';
import "./style.css"
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // e.currentTarget is strongly typed as HTMLFormElement because of the generic above
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Prefer an env var or server-side proxy for the access key.
    // If using Next.js you might use NEXT_PUBLIC_... for non-secret keys,
    // but ideally call your own backend so keys are not exposed.
    formData.append("access_key", process.env.GEMINI_API_KEY);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        form.reset(); // safe because form is HTMLFormElement
        alert('Thank you for the enquiry! We will contact you soon.');
      } else {
        alert('Oh oh!! there is an error. Please try again later');
      }
    } catch (err) {
      alert('Oh oh!! there is an error. Please try again later');
      console.error("Network or fetch error", err);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-mihira-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mihira-gold opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form (Left Side / First) */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold text-mihira-blue mb-6">Contact us</h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mihira-blue focus:border-mihira-blue transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mihira-blue focus:border-mihira-blue transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mihira-blue focus:border-mihira-blue transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">Property City / Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Map className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mihira-blue focus:border-mihira-blue transition-colors"
                    placeholder="e.g. Hyderabad"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mihira-blue focus:border-mihira-blue transition-colors"
                  placeholder="Tell us about your energy needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-mihira-gold text-mihira-dark font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-400 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to be contacted by Mihira Energy Solutions.
              </p>
            </form>
          </div>

          {/* Contact Details (Right Side / Second) */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-200 mb-10 text-lg">
              Ready to switch to solar? Contact us for a free consultation or visit our offices.
              Your first step toward protecting the environment starts here.
            </p>

            <div className="space-y-8">

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-mihira-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Hyderabad</h3>
                  <p className="mt-1 text-gray-300 leading-relaxed">A509, Hallmark Vicinia, Narsingi,<br />Hyderabad</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-mihira-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Visakhapatnam</h3>
                  <p className="mt-1 text-gray-300 leading-relaxed">GF-2, Swayamkrushi Bhavan, CBI Down,<br />Vidyanagar Colony, Visakhapatnam</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20 mt-8">
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 text-mihira-gold mr-3 group-hover:text-white transition-colors" />
                  <a href="mailto:info@mihiraenergysolutions.com" className="text-gray-200 hover:text-mihira-gold transition-colors font-medium">info@mihiraenergysolutions.com</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;