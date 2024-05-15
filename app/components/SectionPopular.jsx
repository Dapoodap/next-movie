import React from 'react'
import cover from "@/public/assets/poster.jpg";
import { FaThumbsUp } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa';


function SectionPopular() {
  return (
    <div className="w-full px-2 py-3 mt-10 sm:px-10">
      <h1 className="text-4xl font-extrabold text-center text-white sm:text-left">Popular In This Week</h1>
      <div className="flex flex-wrap items-center gap-6 mt-10 ">
      <div className="card max-w-[270px] min-h-[140px] px-2 rounded-lg flex justify-between gap-5 items-center">
        <h1 className='text-5xl font-extrabold text-white'>1</h1>
        <div className="small-card w-[97px] h-[113px] rounded-lg" style={{
            backgroundImage: `url(${cover.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}>

        </div>
        <div>
            <div className='flex items-center gap-2'>
                <FaThumbsUp className='text-sm text-white'/>
                <p className='text-sm text-white'>200.2003</p>
            </div>
            <h1 className='mt-3 font-bold text-white text-md'>Last Of Us</h1>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-sm text-yellow-300 " />
              <p className="text-xs font-light text-white">Action|Romance</p>
            </div>
        </div>
      </div>
      <div className="card max-w-[270px] min-h-[140px] px-2 rounded-lg flex justify-between gap-5 items-center">
        <h1 className='text-5xl font-extrabold text-white'>1</h1>
        <div className="small-card w-[97px] h-[113px] rounded-lg" style={{
            backgroundImage: `url(${cover.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}>

        </div>
        <div>
            <div className='flex items-center gap-2'>
                <FaThumbsUp className='text-sm text-white'/>
                <p className='text-sm text-white'>200.2003</p>
            </div>
            <h1 className='mt-3 font-bold text-white text-md'>Last Of Us</h1>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-sm text-yellow-300 " />
              <p className="text-xs font-light text-white">Action|Romance</p>
            </div>
        </div>
      </div>
      <div className="card max-w-[270px] min-h-[140px] px-2 rounded-lg flex justify-between gap-5 items-center">
        <h1 className='text-5xl font-extrabold text-white'>1</h1>
        <div className="small-card w-[97px] h-[113px] rounded-lg" style={{
            backgroundImage: `url(${cover.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}>

        </div>
        <div>
            <div className='flex items-center gap-2'>
                <FaThumbsUp className='text-sm text-white'/>
                <p className='text-sm text-white'>200.2003</p>
            </div>
            <h1 className='mt-3 font-bold text-white text-md'>Last Of Us</h1>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-sm text-yellow-300 " />
              <p className="text-xs font-light text-white">Action|Romance</p>
            </div>
        </div>
      </div>
      <div className="card max-w-[270px] min-h-[140px] px-2 rounded-lg flex justify-between gap-5 items-center">
        <h1 className='text-5xl font-extrabold text-white'>1</h1>
        <div className="small-card w-[97px] h-[113px] rounded-lg" style={{
            backgroundImage: `url(${cover.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}>

        </div>
        <div>
            <div className='flex items-center gap-2'>
                <FaThumbsUp className='text-sm text-white'/>
                <p className='text-sm text-white'>200.2003</p>
            </div>
            <h1 className='mt-3 font-bold text-white text-md'>Last Of Us</h1>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-sm text-yellow-300 " />
              <p className="text-xs font-light text-white">Action|Romance</p>
            </div>
        </div>
      </div>
     
      </div>
    </div>
  )
}

export default SectionPopular