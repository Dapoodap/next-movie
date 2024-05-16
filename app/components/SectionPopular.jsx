import React from 'react'
import { FaThumbsUp } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa';
import PopularRating from '../utils/movies';


async function SectionPopular() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const url_image = "https://image.tmdb.org/t/p/original/";
  const url_genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const url_trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

  
  const response = await fetch(url_trending);
  const responseG = await fetch(url_genre);

  const MoviesChoice = await response.json();
  const genresData = await responseG.json()

  
  const getGenreNameById = (genreIds) => {
    if (!genresData || !genresData.genres) return "";
    const genres = genresData .genres.filter((genre) =>
      genreIds.includes(genre.id)
    );
    return genres.map((genre) => genre.name).join(", ");
  };

  return (
    <div className="w-full px-2 py-3 mt-10 sm:px-10">
      <h1 className="text-4xl font-extrabold text-center text-white sm:text-left">Popular In This Week</h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 mb-10 ">
      {MoviesChoice && MoviesChoice.results.slice(0,4).map((item,index)=>(
        <div className="card max-w-[270px] h-[140px] px-2 rounded-lg flex justify-between gap-5 items-center">
        <h1 className='text-5xl font-extrabold text-white'>{index+1}</h1>
        <div className=" small-card min-w-[97px] h-[113px] rounded-lg" style={{
            backgroundImage: `url(${url_image+item.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}>

        </div>
        <div>
            <div className='flex items-center gap-2'>
                <FaThumbsUp className='text-sm text-white'/>
                <p className='text-sm text-white'>{item.popularity}</p>
            </div>
            <h1 className='mt-3 text-xs font-bold text-white'>{item.original_title ? item.original_title : item.original_name}</h1>
            <p className="mt-1 text-xs font-light text-white">
                    {getGenreNameById(item.genre_ids)}
                  </p>
        </div>
      </div>
      ))}
     
      </div>
    </div>
  )
}

export default SectionPopular