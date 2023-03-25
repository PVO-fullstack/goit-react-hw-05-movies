import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MoviesDetails } from 'pages/MoviesDetails';
import { NotFound } from 'pages/NotFound';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.conteiner}>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
