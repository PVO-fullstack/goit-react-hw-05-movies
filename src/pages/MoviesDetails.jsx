import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviById } from 'services/Api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const location = useLocation();

  console.log(Location);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    async function getFilmById() {
      await getMoviById(movieId).then(r => {
        const result = r;
        setFilm(result);
      });
    }
    getFilmById();
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
        <Link to={location.state.from}>Back to collection</Link>
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
