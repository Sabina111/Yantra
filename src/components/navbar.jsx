import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b bg-gray-800 to-teal-500 py-2">
      <div className="flex justify-between items-center mx-5">
        <a href="/" className="text-white text-2xl font-semibold flex items-center justify-center gap-3">
          <img className='max-w-xs max-h-16' src="https://yantra.ran.org.np/uploads/website_logo-20231123153121.png" alt="" />
        </a>
        <ul className="flex space-x-6 gap-10 mx-20">
          <li>
            <a href="/" className="text-white text-lg hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="/events" className="text-white text-lg hover:text-yellow-400">
              Events <span className="ml-2">▼</span>
            </a>
          </li>
          <li>
            <a href="/news" className="text-white text-lg hover:text-yellow-400">
              News
            </a>
          </li>
          <li>
            <a href="/partners" className="text-white text-lg hover:text-yellow-400">
              Partners
            </a>
          </li>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
