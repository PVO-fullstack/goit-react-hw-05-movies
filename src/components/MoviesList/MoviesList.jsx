import { NavLink } from 'react-router-dom';

export const MoviesList = ({ films, submit }) => {
  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={submit}>
        <input name="search" type="text" />
        <button type="submit">Find films</button>
      </form>

      <ul>
        {films.length > 0 &&
          films.map(film => (
            <li key={film.id}>
              <NavLink to={`${film.id}`}>
                {film.original_title || film.original_name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
