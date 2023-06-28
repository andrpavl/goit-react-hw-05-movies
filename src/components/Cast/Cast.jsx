import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'utils/fetchs';
import Loader from 'components/Loader/Loader';
import { ActorList, ActorCard } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    async function renderCast() {
      try {
        setLoading(true);
        const castDetails = await getCast(movieId);
        if (castDetails.data.cast) {
          setCast(castDetails.data.cast);
          //   console.log(castDetails);
        } else {
          setError('Ooops, something is wrong...');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    renderCast();
    return () => abortCtrl.abort();
  }, [movieId]);

  //   console.log(cast);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <Loader />}
      {!loading && cast && (
        <ActorList>
          {cast.map(({ character, name, profile_path, id }) => {
            return (
              <ActorCard key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                    width="150px"
                    height="200px"
                  />
                ) : (
                  <img
                    src="https://i.pinimg.com/564x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg"
                    alt="no_image"
                    width="150px"
                    height="200px"
                  />
                )}
                <p>{name}</p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </ActorCard>
            );
          })}
        </ActorList>
      )}
    </>
  );
};

export default Cast;
