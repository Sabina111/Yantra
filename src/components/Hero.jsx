import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-800 to-teal-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-600/10 animate-gradient"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">Yantra10</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              Experience the future of technology and innovation at Nepal's premier tech festival.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 rounded-full transform hover:scale-105 transition-all duration-300 hover:animate-glow">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white hover:border-teal-400 rounded-full transform hover:scale-105 transition-all duration-300 hover:animate-glow">
                Learn More
              </button>
            </div>
          </div>

          {/* Image grid */}
          <div className="relative h-[600px] animate-fade-in">
            {/* Main center image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105">
                <img 
                  src="/hero-main.jpg" 
                  alt="Main Event" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Floating images */}
            <div className="absolute top-0 left-0 w-48 h-48 rounded-xl overflow-hidden shadow-lg animate-float">
              <img 
                src="/hero-1.jpg" 
                alt="Event 1" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/4 right-0 w-48 h-48 rounded-xl overflow-hidden shadow-lg animate-float-delayed">
              <img 
                src="/hero-2.jpg" 
                alt="Event 2" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-xl overflow-hidden shadow-lg animate-float-more-delayed">
              <img 
                src="/hero-3.jpg" 
                alt="Event 3" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teal-600/10 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full p-2">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 