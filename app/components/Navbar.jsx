'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/Pilem.png';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='absolute z-50 flex items-center justify-between w-full px-5 py-5 bg-transparent sm:px-14'>
      <div className='logo'>
        <Image src={logo} width={80} height={80} alt='logo' />
      </div>
      <div className='hidden gap-4 text-lg text-white sm:flex menu'>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Home</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Discover</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Release</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Forum</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>About</a>
      </div>
      <div className='items-center hidden gap-2 sm:flex btn-nav'>
        <CiSearch className='text-2xl text-white'/>
        <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border rounded hover:bg-blue-700">
          Button
        </button>
        <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-green-800 rounded hover:bg-blue-700">
          Button
        </button>
      </div>
      <div className='sm:hidden'>
        <GiHamburgerMenu className='text-2xl text-white' onClick={toggleMenu}/>
      </div>
      <div className={`fixed top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-full bg-black transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <MdClose className='absolute text-2xl text-white top-5 right-5' onClick={toggleMenu}/>
        <div className='flex flex-col items-center gap-3 text-lg text-white'>
          <a href="#" className='px-3 py-2 transition duration-300 ease-in-out hover:text-gray-300' onClick={toggleMenu}>Home</a>
          <a href="#" className='px-3 py-2 transition duration-300 ease-in-out hover:text-gray-300' onClick={toggleMenu}>Discover</a>
          <a href="#" className='px-3 py-2 transition duration-300 ease-in-out hover:text-gray-300' onClick={toggleMenu}>Release</a>
          <a href="#" className='px-3 py-2 transition duration-300 ease-in-out hover:text-gray-300' onClick={toggleMenu}>Forum</a>
          <a href="#" className='px-3 py-2 transition duration-300 ease-in-out hover:text-gray-300' onClick={toggleMenu}>About</a>
          <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border rounded hover:bg-blue-700">
            Button
          </button>
          <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-green-800 rounded hover:bg-blue-700">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
