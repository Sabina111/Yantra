import React from 'react';
import { FaRocket, FaLightbulb, FaUsers, FaCode, FaChartLine } from 'react-icons/fa';

const Objectives = () => {
  const objectives = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Foster technological innovation and creative problem-solving among students."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Learning",
      description: "Provide hands-on learning opportunities in robotics and technology."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community",
      description: "Build a strong community of tech enthusiasts and innovators."
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Development",
      description: "Promote software and hardware development skills."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Growth",
      description: "Encourage personal and professional growth in technology."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-teal-500">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-slow"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-600/10 animate-gradient"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-teal-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">Objectives</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card background with glass effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              
              {/* Card content */}
              <div className="relative p-8 rounded-2xl border border-white/20 hover:border-teal-400/50 transition-colors duration-300">
                <div className="text-teal-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {objective.title}
                </h3>
                <p className="text-gray-200">
                  {objective.description}
                </p>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/20 group-hover:to-teal-600/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives; 