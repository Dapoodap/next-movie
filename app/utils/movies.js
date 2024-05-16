export default async function PopularRating() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
  
    return data;
  }