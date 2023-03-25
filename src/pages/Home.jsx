import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrending } from 'services/Api';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrending().then(r => {
      const result = r.results;
      setFilms(result);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink to={`movies/${film.id}`}>
              {film.original_title || film.original_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
