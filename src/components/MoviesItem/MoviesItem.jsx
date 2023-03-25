import { Link, useLocation } from 'react-router-dom';
import css from '../MoviesItem/MoviesItem.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

export const MoviesItem = ({ title, overview, genresName, poster }) => {
  const location = useLocation();

  return (
    <>
      <div className={css.go_back}>
        <Link className={css.link_back} to={location.state.from}>
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};