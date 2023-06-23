import { Route, Routes } from 'react-router-dom';
import { Movies } from 'pages/Movies/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
