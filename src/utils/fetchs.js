import axios from 'axios';

const API_KEY = '8797bf46728068285205c5125a7a7653';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrending(signal) {
  const resp = await axios.get(
    `${BASE_URL}trending/all/day?language=en-US'&api_key=${API_KEY}`,
    signal
  );
  return resp;
}

export async function getDetails(movieId, signal) {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US?&api_key=${API_KEY}`,
    signal
  );

  return resp;
}

export async function getCast(movieId, signal) {
  const resp = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
    signal
  );

  return resp;
}

export async function getReview(movieId, signal) {
  const resp = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`,
    signal
  );

  return resp;
}