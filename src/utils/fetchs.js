import axios from 'axios';

const API_KEY = '8797bf46728068285205c5125a7a7653';
const BASE_URL = 'api.themoviedb.org/3';

export async function getTrending(signal) {
  const resp = await axios.get(
    `https://${BASE_URL}/trending/all/day?language=en-US'&api_key=${API_KEY}`,
    signal
  );
  return resp;
}

export async function getDetails(movieId, signal) {
  const resp = await axios.get(
    `https://${BASE_URL}/3/movie/${movieId}&api_key=${API_KEY}`,
    signal
  );

  return resp;
}

