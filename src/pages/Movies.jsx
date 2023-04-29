import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import NotFound from './NotFound';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesId = searchParams.get('moviesId') ?? '';

  console.log(films);

  useEffect(() => {
    getMovies(moviesId).then(r => setFilms(r.results));
  }, [moviesId]);

  const submit = e => {
    e.preventDefault();
    setSearchParams({ moviesId: e.target.elements.search.value });
  };

  return (
    <div>
      {films.length > 0 ? (
        <MoviesList films={films} submit={submit} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Movies;
