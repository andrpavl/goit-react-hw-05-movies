import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getDetails } from 'utils/fetchs';
import Loader from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
import {
  DetsWrap,
  StyledInfo,
  StyledH3Title,
  AddList,
  AddLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

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
      {loading && <Loader />}
      {!loading && movieDetails && (
        <>
          <BackLink to={backLinkLocation.current}>Go back</BackLink>
          <DetsWrap>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.data.poster_path}`}
              alt={movieDetails.title}
              width="350px"
              height="500px"
            />
            <StyledInfo>
              <h2>{`${
                movieDetails.data.title
              } (${movieDetails.data.release_date.slice(0, 4)})`}</h2>
              <p>
                <b>User Score: </b>
                {Math.round(movieDetails.data.vote_average * 10)}%
              </p>
              <StyledH3Title>Overview:</StyledH3Title>
              <p>{movieDetails.data.overview}</p>
              <StyledH3Title>Genres:</StyledH3Title>
              <p>
                {movieDetails.data.genres.map(genre => genre.name).join(', ')}
              </p>
            </StyledInfo>
          </DetsWrap>
          <AddList>
            <b>Additional information:</b>
            <li>
              <AddLink to="cast">Cast</AddLink>
            </li>
            <li>
              <AddLink to="review">Review</AddLink>
            </li>
          </AddList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
