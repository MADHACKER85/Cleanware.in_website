import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#7000ff] bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-cyan-300">Get in touch for expert PC & Project services &#10084;</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="tel:9489686985"
            className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-300 hover:text-purple-400 transition-colors duration-300">948-968-6985</span>
          </a>
          <a
            href="mailto:info@cleanware.in"
            className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-6 h-6 text-purple-400" />
            <span className="text-purple-300 hover:text-cyan-400 transition-colors duration-300">cleanware.org@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/cleanware.in?igsh=MW9obnh0aHRpYXoyeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-300 hover:text-purple-400 transition-colors duration-300">@cleanware.in</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;