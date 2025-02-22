import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://www.a2dpcfactory.com/img/PC.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in">
              <div className="flex justify-center lg:justify-start mb-12">
                <img src="https://github.com/MADHACKER85/cleanware_logos/blob/fba926ff335687f06e84b5d921bc453d3da1f1f6/cleanware%20logo%20only.png" alt="Cleanware.in Logo" className="h-120 w-auto animate-float" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Cleanware
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#7000ff]">
                Tech Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
              Elevating your computing experience with cutting-edge repairs, optimizations, and custom builds. Your tech deserves the best.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ff0080] to-[#7000ff] rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:9489686985"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#ff0080] rounded-lg text-[#ff0080] font-medium hover:bg-[#ff0080]/10 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  948-968-6985
                </a>
              </div>
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-[#ff0080]/30 transition-colors duration-300">
                <p className="text-[#ff0080] font-medium mb-2">Special Offer!</p>
                <p className="text-gray-300">
                  Get 10% discount on all services till March 31st + Additional 5% on referral
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&q=80&w=2070"
                  alt="Gaming Laptop"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7000ff]/20 to-[#ff0080]/20 rounded-2xl"></div>
              </div>
              <div className="relative animate-float" style={{ animationDelay: "0.2s" }}>
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=2000"
                  alt="Gaming Laptop Setup"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0080]/20 to-[#7000ff]/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
