import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";



function Footer() {
  return (
    <div className='border-t-[#292931] w-full min-h-[357px] flex-wrap text-white flex justify-between sm:px-8 px-3 border-t-[1px] py-5'>
        <div className="flex flex-col justify-between mb-11 left-section sm:mb-5">
            <p className='text-5xl font-semibold max-w-[600px] sm:mb-0 mb-7'>Our platform is trusted by millions & features best updated movies all around the world.</p>
            <div className='flex items-center gap-5'>
                <a href="#" className='text-sm font-extralight'>Privacy policy</a>
                <a href="#"className='text-sm font-extralight' >Term of service</a>
                <a href="#" className='text-sm font-extralight'>Languange</a>
            </div>
        </div>
        <div className="flex flex-col justify-between left-section">
            <p className='mb-5 text-base font-normal sm:mb-0 '>Copyright Pilemku By <a href="#">Daffa Radhitya</a></p>
            <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-5'>
                <CiInstagram className='text-3xl'/>
                <CiFacebook className='text-3xl'/>
                <FaXTwitter className='text-3xl'/>
                <CiMail className='text-3xl'/>
            </div>
            <p className='mt-5 text-sm font-extralight sm:mt-0'>@2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer