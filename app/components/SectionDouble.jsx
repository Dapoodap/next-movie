import React from 'react'
import Image from 'next/image'
import cover from '@/public/assets/cover2.jpg';
import { FaStar } from 'react-icons/fa';

function SectionDouble() {
  return (
    <div className="w-full px-3 py-5 mt-8 mb-10 sm:px-10">
      {/* <h1 className="text-4xl font-extrabold text-center text-white sm:text-left ">Just Realease</h1> */}
      <div className="px-8">
        <h1 className="mb-5 text-2xl font-extrabold text-center text-white sm:text-left ">Movie</h1>
        <div className=''>
            <div className="card max-w-[255px] min-h-[225] rounded-lg hover:scale-[1.1] cursor-pointer ">
                <Image src={cover} className='w-full rounded-lg'/>
                <div className='py-1 mt-2 text-white '>
                    <h1>ANT MAN AND THE WASP</h1>
                    <div className='flex items-center gap-3'>
                    <div className="flex items-center gap-2 mt-2 mb-2 ">
                        <FaStar className="text-sm text-yellow-300 sm:text-xl" />
                        <p className="font-bold">150</p>
                    </div>
                     <p className="font-light h-fit">Action | Romance</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="px-8 mt-10">
        <h1 className="mb-5 text-2xl font-extrabold text-center text-white sm:text-left ">Series</h1>
        <div className=''>
            <div className="card max-w-[255px] min-h-[225] rounded-lg hover:scale-[1.1] cursor-pointer  ">
                <Image src={cover} className='w-full rounded-lg'/>
                <div className='py-1 mt-2 text-white '>
                    <h1>ANT MAN AND THE WASP</h1>
                    <div className='flex items-center gap-3'>
                    <div className="flex items-center gap-2 mt-2 mb-2 ">
                        <FaStar className="text-sm text-yellow-300 sm:text-xl" />
                        <p className="font-bold">150</p>
                    </div>
                     <p className="font-light h-fit">Action | Romance</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDouble