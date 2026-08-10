/*
import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
const Navbar = () => {
  return (
    <>
    <div className=' h-64 flex  justify-between text-7xl h- bg-gray-200' >
   <i><MdOutlineDarkMode /></i>
    <nav className=' justify-around '>
        <a href='/'>Home</a>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
         <Link to="/footercontact">Contact</Link>
    </nav>
  </div>
    </>
  )
}

export default Navbar
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Menu & Close
import DarkMode from './DarkMode';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <div className="">
      {/* Navbar Container */}
      <div className="h-24 flex items-center justify-between px-6">
        
        {/* Left Side - Logo & Dark Mode Icon */}
        <div className="flex items-center space-x-3">
           <DarkMode/>
          {/* <MdOutlineDarkMode className="text-4xl cursor-pointer" /> */}
          <h1 className="text-4xl font-bold font-[Poppins] tracking-wide">Portfolio</h1>
        </div>

        {/* Mobile Menu Button (Hidden on large screens) */}
        <button 
          className="lg:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Right Side - Navigation Links (Hidden on small screens) */}
        <nav className="hidden lg:flex space-x-8 text-xl">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/project" className="hover:text-blue-500">Projects</Link>
          <Link to="/footercontact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu (Only Visible When Open) */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 text-xl bg-gray-300">
          <Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/project" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/footercontact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
