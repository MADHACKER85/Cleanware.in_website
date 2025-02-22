import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-50"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;