import React from 'react';
import { FaRobot, FaMicrochip, FaCode, FaBrain, FaLaptopCode, FaTrophy, FaUsers, FaMedal, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Events = () => {
  const events = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Robotics Competition",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      description: "Build and program robots to complete challenging tasks in this exciting competition.",
      category: "Robotics",
      prize: "₹50,000",
      image: "https://yantra.ran.org.np/uploads/events/president-cup-yantra-teens-event-image-20231124134549.png"
    },
    {
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "Hardware Hackathon",
      date: "March 16, 2024",
      time: "24 Hours",
      description: "24-hour hackathon to create innovative hardware solutions for real-world problems.",
      category: "Hardware",
      prize: "₹75,000",
      image: "https://yantra.ran.org.np/uploads/events/president-cup-yantra-kids-event-image-20231124213512.png"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Code Wars",
      date: "March 17, 2024",
      time: "10:00 AM - 4:00 PM",
      description: "Competitive programming contest testing your algorithmic and problem-solving skills.",
      category: "Programming",
      prize: "₹25,000",
      image: "https://yantra.ran.org.np/uploads/events/yantra-international-league[robosoccer]-event-image-20231124212739.png"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "AI Challenge",
      date: "March 18, 2024",
      time: "9:00 AM - 6:00 PM",
      description: "Develop AI models to solve complex problems in this machine learning competition.",
      category: "AI/ML",
      prize: "₹60,000",
      image: "https://yantra.ran.org.np/uploads/events/yantra-autonomous-industries-[yai]-event-image-20231124213849.png"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Web Development",
      date: "March 19, 2024",
      time: "10:00 AM - 5:00 PM",
      description: "Create innovative web applications with modern technologies and frameworks.",
      category: "Web Dev",
      prize: "₹40,000",
      image: "/events/web.jpg"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Team Project Showcase",
      date: "March 20, 2024",
      time: "11:00 AM - 7:00 PM",
      description: "Showcase your team's innovative projects and compete for the grand prize.",
      category: "Showcase",
      prize: "₹100,000",
      image: "/events/showcase.jpg"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Logo with hover effects */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* Logo container */}
            <div className="relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-lg border-2 border-white/20 overflow-hidden transform group-hover:scale-110 transition-all duration-500">
              {/* Logo image */}
              <img 
                src="https://yantra.ran.org.np/uploads/website_logo-20231123153121.png" 
                alt="Yantra Logo" 
                className="w-full h-full object-contain p-4 transform group-hover:rotate-12 transition-transform duration-500"
              />
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-500"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            
            {/* Rotating rings */}
            <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
            <div className="absolute -inset-6 border-2 border-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow-reverse"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient">
              Explore Yantra 10.0 Events
            </span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto font-medium">
            Join us for an exciting lineup of competitions and workshops
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
            >
              {/* Event image with overlay */}
              <div className="relative h-56">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-blue-500/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg">
                    {event.category}
                  </span>
                </div>

                {/* Event icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-blue-500/90 backdrop-blur-sm rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {event.icon}
                  </div>
                </div>
              </div>

              {/* Event details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Date and time */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-200">
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-5 h-5 mr-2 text-blue-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="w-5 h-5 mr-2 text-blue-400" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <p className="text-gray-200 text-base mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Prize and register button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-400">
                    <FaTrophy className="w-6 h-6 mr-2" />
                    <span className="font-bold text-lg">{event.prize}</span>
                  </div>
                  <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                    Register
                  </button>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events; 