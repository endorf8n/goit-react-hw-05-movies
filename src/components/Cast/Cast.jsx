import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/movieApi';

const Cast = () => {
  const [movieCast, setMovieCast] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => setMovieCast(cast));
  }, [movieId]);

  if (!movieCast) return;

  return (
    <div>
      <ul>
        {movieCast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width="80"
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
