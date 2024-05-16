import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';
import { CiBookmark } from 'react-icons/ci';

async function PreviewSeries() {
  const url_image = "https://image.tmdb.org/t/p/original/";
  const url_TrendingSeries = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const url_genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(url_TrendingSeries);
  const responseG = await fetch(url_genre);

  const SeriesChoice = await response.json();
  const genresData = await responseG.json()

  function getRandomIndex(array) {
    if (array.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }  

  const getGenreNameById = (genreIds) => {
    if (!genresData || !genresData.genres) return "";
    const genres = genresData .genres.filter((genre) =>
      genreIds.includes(genre.id)
    );
    return genres.map((genre) => genre.name).join(", ");
  };


  const randomIndex = getRandomIndex(SeriesChoice.results);
  const randomSeries = SeriesChoice.results[randomIndex];
  return (
    <div className='relative max-w-full min-h-[600px]'>
      <div style={{ backgroundImage: `url(${url_image+randomSeries.backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center' }} className='absolute inset-0'>
        {/* Background image */}
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent/80 to-black'></div>
      
      {/* Title and description */}
      <div className='absolute z-10 text-white top-[10%] w-fit px-8'>
        <h1 className='text-5xl font-extrabold text-white'>Recently Trending TV Series</h1>
        <p className='text-xl font-semibold'>Best featured for you today</p>
      </div>

      {/* Series content */}
      <div className='absolute z-10 text-white sm:top-[50%] top-[40%] w-full flex justify-start items-center sm:px-20 px-8 flex-wrap'>
        <div className=' max-w-[500px] md:max-w-full md:w-1/2'>
          <h1 className='text-4xl font-extrabold text-white'>{randomSeries.original_name}</h1>
          <div className="flex items-center gap-2 mt-1 mb-4">
            <FaStar className="text-sm text-yellow-300 sm:text-xl" />
            <p className="text-xs font-light">
                    {getGenreNameById(randomSeries.genre_ids)}
            </p>
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
