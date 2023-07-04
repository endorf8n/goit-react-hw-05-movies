import { Link, useLocation } from 'react-router-dom';
import { StyledMoviesList } from './moviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <StyledMoviesList>
        {movies.map(({ id, original_title }, index) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {index + 1}. {original_title}
            </Link>
          </li>
        ))}
      </StyledMoviesList>
    </>
  );
};

export default MoviesList;
