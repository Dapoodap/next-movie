
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

async function SectionMovies() {
  const url_image = "https://image.tmdb.org/t/p/original/";
  const url_PopularMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const url_genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const responseM = await fetch(url_PopularMovies);
  const responseG = await fetch(url_genre);
  const movieData = await responseM.json()
  const genresData = await responseG.json()

  // Fungsi untuk mendapatkan nama genre berdasarkan id
  const getGenreNameById = (genreIds) => {
    if (!genresData || !genresData.genres) return "";
    const genres = genresData .genres.filter((genre) =>
      genreIds.includes(genre.id)
    );
    return genres.map((genre) => genre.name).join(", ");
  };

  return (
    <div className="w-full px-3 py-5 mt-10 sm:px-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-extrabold text-center text-white sm:text-left ">
          Just Realease
        </h1>
        <h1 className="text-sm font-extrabold text-center text-white sm:text-left ">
          See All {">"}
        </h1>
      </div>
      <div className="flex flex-wrap justify-around gap-1 mt-10">
      {!movieData && (
          <div role="status">
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
          </div>
        )}
       {movieData &&
          movieData.results &&
          movieData.results.slice(0, 4).map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${url_image + item.poster_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
              className="card sm:m-0 m-auto w-[280px] h-[350px] rounded-xl relative cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full rounded-xl card bg-gradient-to-b from-transparent via-transparent/30 to-black"></div>
              <div className="absolute bottom-0 z-10 px-3 py-5 font-semibold text-white">
                <h1 className="text-xl">{item.original_title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="text-sm text-yellow-300 sm:text-xl" />
                  <p className="font-light">{item.vote_count}</p>
                  <p className="text-xs font-light">
                    {getGenreNameById(item.genre_ids)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SectionMovies;
