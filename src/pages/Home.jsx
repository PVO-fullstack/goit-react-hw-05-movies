import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrending } from 'services/Api';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingFilms() {
      await getTrending().then(r => {
        const result = r.results;
        setFilms(result);
      });
    }
    getTrendingFilms();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink to={`movies/${film.id}`} state={{ from: location }}>
              {film.original_title || film.original_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
