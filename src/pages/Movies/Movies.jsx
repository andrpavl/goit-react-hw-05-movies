import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { getMovies } from 'utils/fetchs';
import Loader from 'components/Loader/Loader';

export function Movies() {
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
    if (form.elements.query.value === '') return;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  // console.log(movie);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter movie name" name="query" />
        <button type="submit">
          Search <TbMovie />
        </button>
      </form>

      {error && Notiflix.Notify.failure('You need to enter something))')}
      {loading && <Loader />}
      <ul>
        {movie.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
