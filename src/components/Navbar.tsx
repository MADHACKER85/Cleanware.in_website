import React, { useState, useEffect } from 'react';
import { Monitor, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 hover-scale">
            <img src="/logo.png" alt="Cleanware.in Logo" className="h-8 w-auto" />
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
    Cleanware.in
  </span>
</a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">PC Repair Services</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Project Development</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;