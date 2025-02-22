import React from 'react';
import { Construction, Cpu, Code } from 'lucide-react';

const projectServices = [
  {
    name: 'Machine Learning Projects',
    description: 'Custom ML solutions for data analysis, prediction models, and AI applications'
  },
  {
    name: 'Figma Design',
    description: 'Professional UI/UX design, wireframes, and interactive prototypes'
  },
  {
    name: 'Frontend Development',
    description: 'Responsive web applications using modern frameworks like React, Vue, Angular'
  },
  {
    name: 'Fullstack Development',
    description: 'End-to-end web solutions with both frontend and backend integration'
  },
  {
    name: 'Mobile Application Development',
    description: 'Native and cross-platform mobile apps for iOS and Android'
  },
  {
    name: 'Internet of Things Projects',
    description: 'Connected device solutions and IoT infrastructure development'
  },
  {
    name: 'Embedded Systems',
    description: 'Custom embedded solutions for specialized hardware applications'
  },
  {
    name: 'Control Systems',
    description: 'Automated control systems for industrial and commercial applications'
  },
  {
    name: 'Power Electronics',
    description: 'Electronic power system design and implementation'
  },
  {
    name: 'Robotics',
    description: 'Robotics development and automation solutions'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white relative">
  <span className="absolute inset-0 bg-gradient-to-r from-[#ff0080] to-[#7000ff] text-transparent bg-clip-text blur-sm">
    Project Development
  </span>
  Project Development
</h2>

          <p className="text-xl text-gray-400">Innovative solutions for modern challenges</p>
        </div>

        {/* Project Services List */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ff0080]/5 via-[#7000ff]/5 to-[#ff0080]/5 border border-[#ff0080]/20">
          <Construction className="w-16 h-16 text-[#ff0080] mb-6 mx-auto" />
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Available Project Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projectServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff0080]/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-[#ff0080] mb-2">{service.name}</h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;