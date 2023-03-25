import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviById } from 'services/Api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    getMoviById(movieId).then(r => setFilm(r));
  }, [movieId]);

  let genresName = [];

  if (film) {
    const { title, overview, genres, poster_path } = film;
    if (genres) {
      genresName = genres.map(el => el.name).join(', ');
    }

    return (
      <div>
        <MoviesItem
          title={title}
          overview={overview}
          genresName={genresName}
          poster={poster_path}
        />
        <Outlet />
      </div>
    );
  }
};
