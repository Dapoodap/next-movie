
import React from 'react';
import Image from 'next/image';
import cover from '@/public/assets/contoC.jpg';
import { IoPlay } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";






function HeroSection() {


  return (
    <div className='relative max-w-full h-[580px]'>
      <div style={{ backgroundImage: `url(${cover.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition:'top center' }} className='absolute inset-0'>
        {/* Background image */}
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent/80 to-black'></div>

      {/* Content */}
      <div className='max-w-[800px] min-h-[200px] text-left absolute inset-x-0 flex flex-col items-start sm:px-14 px-5 text-white sm:bottom-5 bottom-10'>
        <h1 className='text-4xl font-bold'>승리호 Space Sweepers</h1>
        <p className='mt-2 text-xl'>In the year 2092, space is full of dangerous floating garbage like discarded satellites and deserted spaceships. The crew of a space ...</p>
        <div className='flex items-center gap-4 mt-5'>
          <button className="flex items-center gap-3 px-5 py-4 bg-green-600 rounded-lg hover:bg-green-700 btn1">
            <IoPlay className='text-xl'/>
            <h2>Watch Trailer</h2>
          </button>
          <button className="flex items-center gap-3 px-5 py-4 bg-transparent border rounded-lg border-slate-400 btn2 btn1">
            <CiBookmark className='text-xl'/>
            <h2>Whistlist</h2>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default HeroSection;
