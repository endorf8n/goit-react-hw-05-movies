import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/movieApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
