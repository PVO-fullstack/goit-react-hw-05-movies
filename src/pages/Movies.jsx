import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/Api';
import MoviesList from 'components/MoviesList/MoviesList';

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
      <MoviesList films={films} submit={submit} />
    </div>
  );
};

export default Movies;
