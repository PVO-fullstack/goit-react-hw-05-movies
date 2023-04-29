import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMoviById } from 'services/Api';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import NotFound from './NotFound';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    getMoviById(movieId).then(result => {
      setFilm(result);
    });
  }, [movieId]);

  let genresName = [];

  if (film) {
    const { title, overview, genres, poster_path } = film;
    if (genres) {
      genresName = genres.map(el => el.name).join(', ');
    }
    if (!poster_path) {
      return;
    }

    return (
      <div>
        <MoviesItem
          title={title}
          overview={overview}
          genresName={genresName}
          poster={poster_path}
        />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
  // console.log('AAAAAAAA');
  return <NotFound />;
};

export default MoviesDetails;
