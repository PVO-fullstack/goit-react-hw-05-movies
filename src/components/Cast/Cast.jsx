import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getCastById(movieId).then(r => setCast(r.cast));
  }, [movieId]);

  return (
    <div>
      <ul className={css.cast_list}>
        {cast.length > 0
          ? cast.map(actor => (
              <li className={css.cast_item} key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`${baseUrl}${actor.profile_path}`}
                    alt={actor.name}
                    width="100px"
                    height="150px"
                  />
                ) : (
                  <img
                    src="https://dummyimage.com/640x480/2a2a2a/ffffff&text=No Photo"
                    alt={actor.name}
                    width="100px"
                    height="150px"
                  />
                )}
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            ))
          : 'Not have cast now'}
      </ul>
    </div>
  );
};

export default Cast;
