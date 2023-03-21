import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  return <div>MoviesDetails {movieId}</div>;
};
