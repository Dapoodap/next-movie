import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';

async function SectionDouble() {
  const url_image = "https://image.tmdb.org/t/p/original/";
  const url_movies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const url_series = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const url_genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  
  const responseG = await fetch(url_genre);
  const responseM = await fetch(url_movies);
  const responseS = await fetch(url_series);
  const movieData = await responseM.json()
  const seriesData = await responseS.json()
  const genresData = await responseG.json()
  const getGenreNameById = (genreIds) => {
    if (!genresData || !genresData.genres) return "";
    const genres = genresData .genres.filter((genre) =>
      genreIds.includes(genre.id)
    );
    return genres.map((genre) => genre.name).join(", ");
  };

  
  return (
    <div className="w-full px-3 py-5 mt-8 mb-10 sm:px-10">
      {/* <h1 className="text-4xl font-extrabold text-center text-white sm:text-left ">Just Realease</h1> */}
      <div className="px-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="mb-5 text-2xl font-extrabold text-center text-white sm:text-left ">
          Movies
        </h1>
        <h1 className="text-sm font-extrabold text-center text-white sm:text-left ">
          See All {">"}
        </h1>
      </div>
        <div className='flex flex-wrap gap-10'>
            {movieData.results&&movieData.results.slice(0,4).map((item)=>(
              <div key={item.id} className="card max-w-[255px] min-h-[225] rounded-lg hover:scale-[1.1] cursor-pointer ">
              <img loading='lazy' src={url_image+item.backdrop_path} className='w-full rounded-lg'/>
              <div className='py-1 mt-2 text-white '>
                  <h1 className='font-bold text-md'>{item.original_title}</h1>
                  <div className='flex items-center gap-3'>
                  <div className="flex items-center gap-2 mt-2 mb-2 ">
                      <FaStar className="text-sm text-yellow-300 sm:text-xl" />
                      <p className="font-bold">{item.vote_count}</p>
                  </div>
                   <p className="text-xs font-light h-fit">{getGenreNameById(item.genre_ids)}</p>
                  </div>
              </div>
          </div>
            ))}
        </div>
      </div>
      <div className="px-8 mt-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="mb-5 text-2xl font-extrabold text-center text-white sm:text-left ">
          Series
        </h1>
        <h1 className="text-sm font-extrabold text-center text-white sm:text-left ">
          See All {">"}
        </h1>
      </div>
        <div className='flex flex-wrap gap-10'>
        {seriesData.results&&seriesData.results.slice(0,4).map((item)=>(
              <div key={item.id} className="card max-w-[255px] min-h-[225] rounded-lg hover:scale-[1.1] cursor-pointer ">
              <img loading='lazy' src={url_image+item.backdrop_path} className='w-full rounded-lg'/>
              <div className='py-1 mt-2 text-white '>
                  <h1 className='font-bold text-md'>{item.original_name}</h1>
                  <div className='flex items-center gap-3'>
                  <div className="flex items-center gap-2 mt-2 mb-2 ">
                      <FaStar className="text-sm text-yellow-300 sm:text-xl" />
                      <p className="font-bold">{item.vote_count}</p>
                  </div>
                   <p className="text-xs font-light h-fit">{getGenreNameById(item.genre_ids)}</p>
                  </div>
              </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SectionDouble