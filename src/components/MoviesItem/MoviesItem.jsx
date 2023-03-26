import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../MoviesItem/MoviesItem.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesItem = ({ title, overview, genresName, poster }) => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from || '/movies');

  return (
    <>
      <div className={css.go_back}>
        <Link className={css.link_back} to={backLinkLocation.current}>
          Go back
        </Link>
      </div>
      <div className={css.film_conteiner}>
        <img src={`${baseUrl}${poster}`} alt="" width={200} />
        <div className="other">
          <h1>{title}</h1>
          <h2>OverWiew</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresName}</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoviesItem;
