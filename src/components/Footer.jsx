import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b bg-gray-800 to-teal-500 text-white py-8 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 rounded-lg hover:animate-neon-pulse transition-all duration-300">
            <img 
              src="https://yantra.ran.org.np/uploads/website_logo-20231123153121.png" 
              alt="" 
              className="h-12 mb-2 mx-auto hover:opacity-80 transition-all duration-300 animate-bounce-slow" 
            />
            <p className="text-lg font-semibold animate-fade-in">Talchikhel, Lalitpur</p>
            <p className="flex items-center justify-center mt-2">
              <span role="img" aria-label="phone" className="mr-2 animate-pulse-slow">📞</span>
              <a href="tel:+9779860478881" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 hover:animate-glow hover:animate-shake">+977 9860478881</a>
            </p>
            <p className="flex items-center justify-center mt-2">
              <span role="img" aria-label="email" className="mr-2 animate-pulse-slow">✉️</span>
              <a href="mailto:yantrairc@gmail.com" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 hover:animate-glow hover:animate-shake">yantrairc@gmail.com</a>
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:animate-neon-pulse transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 animate-fade-in animate-glow">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300 transition-all duration-300 block py-1 hover:translate-x-2 hover:animate-glow hover:animate-shake">About</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-all duration-300 block py-1 hover:translate-x-2 hover:animate-glow hover:animate-shake">Events</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-all duration-300 block py-1 hover:translate-x-2 hover:animate-glow hover:animate-shake">News</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-all duration-300 block py-1 hover:translate-x-2 hover:animate-glow hover:animate-shake">Sponsors & Partners</a></li>
            </ul>
          </div>

          <div className="text-center p-6 rounded-lg hover:animate-neon-pulse transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 animate-fade-in animate-glow">Social Media Links</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/YantraScienceTechEntrepreneurshipFestival/" className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 hover:animate-glow hover:animate-rotate-slow"><FaFacebook size={24} /></a>
              <a href="https://www.linkedin.com/company/robotics-association-of-nepal/posts/?feedView=all" className="text-white hover:text-blue-500 transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 hover:animate-glow hover:animate-rotate-slow"><FaLinkedin size={24} /></a>
              <a href="https://www.youtube.com/@RoboticsNepal" className="text-white hover:text-red-500 transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 hover:animate-glow hover:animate-rotate-slow"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white w-full max-w-2xl pt-4 text-center text-sm">
          <a href="#" className="mx-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105 inline-block hover:animate-glow hover:animate-shake">Terms</a>
          <a href="#" className="mx-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105 inline-block hover:animate-glow hover:animate-shake">Privacy</a>
          <a href="#" className="mx-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105 inline-block hover:animate-glow hover:animate-shake">Condition</a>
        </div>
        <div className="text-center mt-4 animate-fade-in">
          &copy; 2025 Yantra10. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


 

