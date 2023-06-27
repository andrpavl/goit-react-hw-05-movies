import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'utils/fetchs';
import Loader from 'components/Loader/Loader';

export const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    async function renderReview() {
      try {
        setLoading(true);
        const reviewDetails = await getReview(movieId);
        if (reviewDetails.data.results) {
          setReview(reviewDetails.data.results);
          //   console.log(reviewDetails.data.results);
        } else {
          setError('Ooops, something is wrong...');
          //   console.log(reviewDetails.data.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    renderReview();
    return () => abortCtrl.abort();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {review && review.length > 0 ? (
        <ul>
          {review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i> We don't have any reviews for this movie</i>
        </p>
      )}
    </>
  );
};
