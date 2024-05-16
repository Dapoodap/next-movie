import React from 'react';
import { IoPlay } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

async function HeroSection() {
  const url_image = "https://image.tmdb.org/t/p/original/";
  const url_PopularMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  function truncateString(str) {
    // Memastikan panjang string lebih dari maxLength
    if (str.length > 150) {
      // Memotong string dan menambahkan ...
      return str.slice(0, 150 - 3) + '...';
    } else {
      // Jika panjang string tidak lebih dari maxLength, kembalikan string asli
      return str;
    }
  }
  const response = await fetch(url_PopularMovies);
  const movieData = await response.json()
  
  function getRandomIndex(array) {
    if (array.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }

  // Memastikan bahwa data film tersedia dan tidak sedang dimuat
  if (!movieData) {
    return <><div role="status">
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div></>;
  }

  // Mengambil indeks acak dari data film
  const randomIndex = getRandomIndex(movieData.results);
  const randomMovie = movieData.results[randomIndex];

  return (
    <div className='relative max-w-full h-[580px]'>
      <div style={{ backgroundImage: `url(${url_image + randomMovie.poster_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center' }} className='absolute inset-0'>
        {/* Background image */}

      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent/80 to-black'></div>

      {/* Content */}
      <div className='max-w-[800px] min-h-[200px] text-left absolute inset-x-0 flex flex-col items-start sm:px-14 px-5 text-white sm:bottom-16 bottom-10'>
        <h1 className='text-5xl font-bold'>{randomMovie.original_title}</h1>
        <p className='mt-2 text-xl'>{truncateString(randomMovie.overview)}</p>
        <div className='flex items-center gap-4 mt-5'>
          <button className="flex items-center gap-3 px-5 py-4 bg-green-600 rounded-lg hover:bg-green-700 btn1">
            <IoPlay className='text-xl' />
            <h2>Watch Trailer</h2>
          </button>
          <button className="flex items-center gap-3 px-5 py-4 bg-transparent border rounded-lg border-slate-400 btn2 btn1">
            <CiBookmark className='text-xl' />
            <h2>Whistlist</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
