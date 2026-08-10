

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';

import { IoMdContact } from 'react-icons/io';

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `flex items-center gap-1 px-3 py-2 rounded-md transition duration-200 ${
      location.pathname === path
        ? 'bg-[#3ABEF9] text-black font-semibold'
        : 'text-white hover:text-[#3ABEF9]'
    }`;

  return (
    <header className="bg-[#121212] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 h-20">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-[#3ABEF9]">
          Vocabulary Builder
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 text-lg">
          <Link to="/" className={linkStyle('/')}>Home</Link>
          <Link to="/saved" className={linkStyle('/saved')}>
         <FaFire className="text-orange-500 text-xl" />
           Saved
         </Link>



          <Link to="/profile" className={linkStyle('/profile')}>
            <IoMdContact />
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
