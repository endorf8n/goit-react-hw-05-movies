import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'service/movieApi';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    getMovieInfo(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  if (!movieInfo) return;

  const { poster_path, original_title, vote_average, overview, genres } =
    movieInfo;
  return (
    <div>
      <Link to={location?.state?.from || '/'}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="original_title"
          width="200"
        />

        <div>
          <h2>{original_title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(({ name, id }) => (
              <span key={id}>{name} </span>
            ))}
          </p>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
