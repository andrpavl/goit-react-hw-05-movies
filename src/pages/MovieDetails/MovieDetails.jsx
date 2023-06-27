import { useEffect, useState, Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getDetails } from 'utils/fetchs';
import Loader from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    async function renderMovieDetails() {
      try {
        setLoading(true);
        const details = await getDetails(movieId);
        if (details) {
          setMovieDetails(details);
        } else {
          setError('Ooops, something is wrong...');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    renderMovieDetails();
    return () => abortCtrl.abort();
  }, [movieId]);

  return (
    <main>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {!loading && movieDetails && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.data.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>{`${
            movieDetails.data.title
          } (${movieDetails.data.release_date.slice(0, 4)})`}</h2>
          <p>
            <b>User Score: </b>
            {Math.round(movieDetails.data.vote_average * 10)}%
          </p>
          <h3>Overview:</h3>
          <p>{movieDetails.data.overview}</p>
          <h3>Genres:</h3>
          <p>{movieDetails.data.genres.map(genre => genre.name).join(', ')}</p>
          <ul>
            <b>Additional information:</b>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="review">Review</Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};
