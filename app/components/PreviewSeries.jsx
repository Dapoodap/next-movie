import React from 'react';
import cover from '@/public/assets/cover2.jpg';
import { FaStar } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';
import { CiBookmark } from 'react-icons/ci';

function PreviewSeries() {
  return (
    <div className='relative max-w-full min-h-[580px]'>
      <div style={{ backgroundImage: `url(${cover.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center' }} className='absolute inset-0'>
        {/* Background image */}
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent/80 to-black'></div>
      
      {/* Title and description */}
      <div className='absolute z-10 text-white top-[10%] w-fit px-8'>
        <h1 className='text-5xl font-extrabold text-white'>Recently Add Series</h1>
        <p className='text-xl font-semibold'>Best featured for you today</p>
      </div>

      {/* Series content */}
      <div className='absolute z-10 text-white sm:top-[50%] top-[40%] w-full flex justify-start items-center sm:px-20 px-8 flex-wrap'>
        <div className=' max-w-[500px] md:max-w-full md:w-1/2'>
          <h1 className='text-4xl font-extrabold text-white'>Doctor Who</h1>
          <div className="flex items-center gap-2 mt-1 mb-4">
            <FaStar className="text-sm text-yellow-300 sm:text-xl" />
            <p className="font-light">Action | Romance</p>
          </div>
          <p>The Doctor and his companion travel across time and space encountering incredible friends and foes.</p>
          <div className='flex items-center gap-4 mt-3'>
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
    </div>
  )
}

export default PreviewSeries;
