"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/Pilem.png';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/navigation';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();
  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    if (!searchQuery) {
      setIsSearch(!isSearch);
    }
  };
  const resetForm = () => {
    setIsSearch(false)
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    router.push(`/search/${searchQuery}`);

    // Add your search handling logic here (optional)
  
    // router.push(`/search`); // Navigate to the search results page
  };
  

  return (
    <div className='absolute z-50 flex items-center justify-between w-full px-5 py-5 bg-transparent sm:px-14'>
      <div className='logo'>
        <Image src={logo} width={150} height={150} alt='logo' />
      </div>
      <div className='hidden gap-4 text-lg text-white sm:flex menu'>
        <a href="/" className='transition duration-300 ease-in-out hover:text-gray-300'>Home</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Discover</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Release</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>Forum</a>
        <a href="#" className='transition duration-300 ease-in-out hover:text-gray-300'>About</a>
      </div>
      <div className='items-center hidden gap-2 sm:flex btn-nav'>
        <div className={`relative flex items-center gap-3 ${isSearch ? 'px-8' : 'px-0'}`}>
          <CiSearch
            className={`cursor-pointer mr-5 text-2xl text-white ${isSearch || searchQuery ? 'hidden' : 'block'}`}
            onClick={toggleSearch}
          />
          <form
            className={`relative ${isSearch || searchQuery ? 'block' : 'hidden'}`}
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              className='text-md font-semibold max-w-[500px] max-h-[40px] text-white rounded-3xl px-3 py-2 bg-transparent border-gray-600 focus:border-gray-500 focus:bg-gray-700'
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button type='submit' className='absolute top-0 bottom-0 right-0 px-5 m-auto'>
              <CiSearch className='text-2xl text-black'/>
            </button> 
          </form>
          <button onClick={resetForm} className={`absolute top-0 bottom-0 right-0 m-auto ${isSearch ? 'block' :'hidden'}`}>
              <MdClose className='text-2xl text-black'/>
            </button> 
        </div>
        <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border rounded hover:bg-green-600">
          Login
        </button>
        <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-green-800 rounded hover:bg-green-600">
          Sign Up
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
          <div className='flex items-center gap-3'>
          <CiSearch
            className={`mr-5 text-2xl text-white ${isSearch || searchQuery ? 'hidden' : 'block'}`}
            onClick={toggleSearch}
          />
          <form
            className={`relative ${isSearch || searchQuery ? 'block' : 'hidden'}`}
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              className='text-md font-semibold max-w-[500px] max-h-[40px] text-white rounded-3xl px-3 py-2 bg-transparent border-gray-600 focus:border-gray-500 focus:bg-gray-700'
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            {searchQuery ? <button className='absolute top-0 bottom-0 right-0 px-5 m-auto' onClick={resetForm}>
              <MdClose className='text-2xl text-black'/>
            </button> :<button type='submit' className='absolute top-0 bottom-0 right-0 px-5 m-auto'>
             <CiSearch className='text-2xl text-black'/>
            </button> }
            
            
          </form>
        </div>
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
