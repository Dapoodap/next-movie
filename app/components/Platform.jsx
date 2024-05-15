"use client"
import { Dropdown } from "flowbite-react";
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import netflixLogo from '@/public/assets/plat/Netflix_2015_logo.svg';
import appleTVLogo from '@/public/assets/plat/Apple TV+ Logotype.svg';
import crunchyrollLogo from '@/public/assets/plat/Crunchyroll Logotype.svg';
import hboMaxLogo from '@/public/assets/plat/hbo max - Koleksilogo.com.svg';
import huluLogo from '@/public/assets/plat/Hulu Logotype.svg';
import lionsgateLogo from '@/public/assets/plat/Lionsgate+ Logotype.svg';
import maxLogo from '@/public/assets/plat/Max.svg';
import paramountLogo from '@/public/assets/plat/Paramount+ Logotype.svg';
import primeVideoLogo from '@/public/assets/plat/Prime Video Logotype.svg';
import disney from '@/public/assets/plat/Disney+_logo.svg';
import pixar from '@/public/assets/plat/pixar.svg';
import marvel from '@/public/assets/plat/marvel.svg';

function Platform() {
    const [emblaRef] = useEmblaCarousel();

    const logos = [
        { id: 1, src: netflixLogo, alt: 'Netflix Logo' },
        { id: 2, src: appleTVLogo, alt: 'Apple TV+ Logo' },
        { id: 3, src: disney, alt: 'Disney Logo' },
        { id: 4, src: crunchyrollLogo, alt: 'Crunchyroll Logo' },
        { id: 5, src: hboMaxLogo, alt: 'HBO Max Logo' },
        { id: 6, src: huluLogo, alt: 'Hulu Logo' },
        { id: 7, src: lionsgateLogo, alt: 'Lionsgate+ Logo' },
        { id: 8, src: maxLogo, alt: 'Max Logo' },
        { id: 9, src: paramountLogo, alt: 'Paramount+ Logo' },
        { id: 10, src: primeVideoLogo, alt: 'Prime Video Logo' },
        { id: 11, src: pixar, alt: 'Pixar Logo' },
        { id: 12, src: marvel, alt: 'Marvel Logo' },
        
    ];

    return (
        <div className="max-w-full h-[100px] m-auto mt-4 embla py-5 px-5 " ref={emblaRef}>
            <div className="max-w-[155px] h-[73px] embla__container">
                {logos.map((logo) => (
                    <>
                    <div key={logo.id} className="mr-5 bg-[#08080A] max-w-[155px] h-[73px] rounded-lg embla__slide">
                        <Image src={logo.src}   className='m-auto  max-w-[150px] h-[70px] ' alt={logo.alt} />
                    </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Platform;
