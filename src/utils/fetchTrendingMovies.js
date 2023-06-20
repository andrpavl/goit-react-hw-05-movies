import axios from 'axios';

export function getTrending(signal) {
  const request = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US'&api_key=8797bf46728068285205c5125a7a7653`,
    signal
  );
  return request;
}

