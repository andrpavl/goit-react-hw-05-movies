import React, { useEffect, useState } from 'react';
import { getTrending } from 'utils/fetchs';
import {
  StyledList,
  StyledListItem,
  StyledListLink,
  StyledTitle,
} from './Home.styled';

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
      <StyledTitle>Movies are trending today:</StyledTitle>
      <StyledList>
        {trendingMovies.map(
          movie =>
            movie.title && (
              <StyledListItem key={movie.id}>
                <StyledListLink to={`movies/${movie.id}`}>
                  {movie.title}
                </StyledListLink>
              </StyledListItem>
            )
        )}
      </StyledList>
    </div>
  );
}
