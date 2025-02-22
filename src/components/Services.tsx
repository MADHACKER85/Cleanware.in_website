import React from 'react';
import { Monitor, Cpu, Terminal, Wrench, HardDrive, Gamepad, Package, Settings } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'PC Maintenance',
    description: 'Regular maintenance to keep your systems running at peak performance'
  },
  {
    icon: Settings,
    title: 'Upgrade Consultation',
    description: 'Expert advice on hardware upgrades for optimal performance'
  },
  {
    icon: Terminal,
    title: 'OS Optimization',
    description: 'System optimization for better overall performance'
  },
  {
    icon: Wrench,
    title: 'Hardware Optimization',
    description: 'Fine-tuning your hardware for maximum efficiency'
  },
  {
    icon: HardDrive,
    title: 'Hardware Replacement',
    description: 'Professional replacement of faulty components'
  },
  {
    icon: Cpu,
    title: 'Custom Hardware',
    description: 'Custom systems built to your specifications'
  },
  {
    icon: Gamepad,
    title: 'Game Installation',
    description: 'Professional game installation and optimization'
  },
  {
    icon: Package,
    title: 'Software Installation',
    description: 'Software installation and configuration'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] to-[#7000ff] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400">Comprehensive PC solutions for every need</p>
        </div>

        {/* Main Service Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* PC Repair Services */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ff0080]/10 via-[#7000ff]/10 to-[#ff0080]/10 border border-[#ff0080]/20 hover:border-[#ff0080]/40 transition-all duration-300">
            <Cpu className="w-16 h-16 text-[#ff0080] mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4 text-center">PC Repair Services</h3>
            <p className="text-gray-400 mb-6 text-center">
              Professional PC maintenance, repairs, and upgrades to keep your systems running at peak performance.
            </p>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZabDYolk7jNCLuhMPGe2M31IFCqvo3KkZfAzIgp91l89LuQ/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff0080] to-[#7000ff] rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Book Service
              </a>
            </div>
          </div>

          {/* Project Development Services */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7000ff]/10 via-[#ff0080]/10 to-[#7000ff]/10 border border-[#7000ff]/20 hover:border-[#7000ff]/40 transition-all duration-300">
            <Terminal className="w-16 h-16 text-[#7000ff] mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Project Development</h3>
            <p className="text-gray-400 mb-6 text-center">
              Comprehensive project development services across various domains and technologies.
            </p>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPhhUeMlWhLvnrWtbBfKaAU0OOv5KFsUceIIId9bEW78ZRag/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#7000ff] to-[#ff0080] rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Discuss Project
              </a>
            </div>
          </div>
        </div>

        {/* PC Services List Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#ff0080] to-[#7000ff] bg-clip-text text-transparent">
            PC REPAIR SERVICES
          </h3>
          <p className="text-xl text-gray-400 mt-4">Explore our comprehensive PC repair and maintenance solutions</p>
        </div>

        {/* PC Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#ff0080]/30 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-[#ff0080] mb-6 group-hover:text-[#7000ff] transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#ff0080] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;