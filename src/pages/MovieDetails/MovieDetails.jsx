import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'utils/fetchs';

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
      {!loading && movieDetails && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>{`${movieDetails.title} (${movieDetails.release_date.slice(
            0,
            4
          )})`}</h2>
          <h3>User Score:</h3>
          <p>{movieDetails.user_score}</p>
          <h3>Overview:</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres:</h3>
          <p>{movieDetails.genres.join(', ')}</p>
        </>
      )}
    </main>
  );
};
