import React, { useEffect, useState } from 'react';
import { getTrending } from 'utils/fetchTrendingMovies';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const abortCtrl = new AbortController();

    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrending(abortCtrl.signal);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();

    return () => abortCtrl.abort();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
