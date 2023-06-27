import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { getTrending } from 'utils/fetchs';
import {
  StyledList,
  StyledListItem,
  StyledListLink,
  StyledTitle,
} from './Home.styled';
import { useLocation } from 'react-router-dom';
import Loader  from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const abortCtrl = new AbortController();

    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrending(abortCtrl.signal);
        setTrendingMovies(response.data.results);
      } catch (error) {
         Notiflix.Notify.warning('Ooops! You need to enter something');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();

    return () => abortCtrl.abort();
  }, []);

  return (
    <div>
      <StyledTitle>Movies are trending today:</StyledTitle>
      {loading && <Loader />}

      <StyledList>
        {trendingMovies.map(
          movie =>
            movie.title && (
              <StyledListItem key={movie.id}>
                <StyledListLink
                  to={`movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </StyledListLink>
              </StyledListItem>
            )
        )}
      </StyledList>
    </div>
  );
};

export default Home;
