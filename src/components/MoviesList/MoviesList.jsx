import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }, index) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {index + 1}. {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
