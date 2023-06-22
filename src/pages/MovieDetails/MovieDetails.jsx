import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'utils/fetchs';

export const MovieDetails = () => {
    const { movieId } = useParams();
    

    useEffect(() => {
        getDetails(movieId)
    
    })
};
