import React from 'react';
import { FaRobot, FaMicrochip, FaCode, FaBrain, FaLaptopCode } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Robotics Workshops",
      description: "Hands-on workshops in robotics and automation technology."
    },
    {
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "Hardware Projects",
      description: "Build and program your own electronic devices and gadgets."
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Coding Challenges",
      description: "Competitive programming and software development contests."
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "AI & ML",
      description: "Explore artificial intelligence and machine learning projects."
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Create modern web applications and interactive websites."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500 to-gray-800">
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
          Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card background with glass effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              
              {/* Card content */}
              <div className="relative p-8 rounded-2xl border border-white/20 hover:border-teal-400/50 transition-colors duration-300">
                <div className="text-teal-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-200">
                  {feature.description}
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

export default Features; 