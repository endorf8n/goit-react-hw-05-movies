import MoviesList from 'components/MoviesList/MoviesList';
import { SearchMoviesForm } from 'components/SerchMoviesForm/SearchMoviesForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilteredMovies } from 'service/movieApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    getFilteredMovies(query).then(({ results }) => setMovies(results));
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchMoviesForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
