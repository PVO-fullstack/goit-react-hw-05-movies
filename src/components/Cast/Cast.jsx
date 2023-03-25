import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/Api';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getCastById(movieId).then(r => setCast(r.cast));
  }, [movieId]);

  return (
    <div>
      <ul className={css.cast_list}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`${baseUrl}${actor.profile_path}`}
              alt={actor.name}
              width="100px"
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
