import { useSearchParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { getMovies } from 'utils/fetchs';
import Loader from 'components/Loader/Loader';
import {
  MovieList,
  MovieLink,
  StyledInput,
  StyledForm,
  StyledBtn,
} from './Movies.styled';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const abortCtrl = new AbortController();

    if (query === '') return;
    async function searchMovies() {
      try {
        setLoading(true);
        const movies = await getMovies(query);
        if (movies) {
          setMovie(movies.data.results);
        }
      } catch (error) {
        setError(error.message);
        Notiflix.Notify.failure(
          'Sorry, cannot find any movie. Please, try again'
        );
      } finally {
        setLoading(false);
      }
    }
    searchMovies();

    return () => abortCtrl.abort();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value === '') {
      Notiflix.Notify.warning('Ooops! You need to enter something');
      return;
    }
    setSearchParams({ query: form.elements.query.value });
    form.reset();
    Notiflix.Notify.success('Enjoy!');
  };
  // console.log(movie);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          autoComplete="off"
          placeholder="Enter movie name"
          name="query"
        />
        <StyledBtn type="submit">Search</StyledBtn>
      </StyledForm>

      {error &&
        Notiflix.Notify.failure(
          'Sorry, cannot find any movie. Please, try again'
        )}
      {loading && <Loader />}

      <MovieList>
        {movie.map(({ title, id }) => (
          <li key={id}>
            <MovieLink to={`${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </li>
        ))}
      </MovieList>
    </>
  );
};

export default Movies;
