import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'service/movieApi';
import {
  AddInfoItem,
  AddInfoText,
  LinkGoBack,
  MovieDetailsStyled,
  MovieTitle,
  MoviesInfoText,
  Wrapper,
} from 'styles/movieDetails.styled';

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
      <LinkGoBack to={location?.state?.from || '/'}>Go back</LinkGoBack>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="original_title"
          width="200"
        />

        <MovieDetailsStyled>
          <MovieTitle>{original_title}</MovieTitle>
          <MoviesInfoText>Users vote: {vote_average}</MoviesInfoText>
          <h3>Overview</h3>
          <MoviesInfoText>{overview}</MoviesInfoText>
          <h3>Genres</h3>
          <MoviesInfoText>
            {genres.map(({ name, id }) => (
              <span key={id}>{name} </span>
            ))}
          </MoviesInfoText>
        </MovieDetailsStyled>
      </Wrapper>
      <AddInfoText>Additional information</AddInfoText>
      <ul>
        <AddInfoItem>
          <Link to="cast">Cast</Link>
        </AddInfoItem>
        <AddInfoItem>
          <Link to="reviews">Reviews</Link>
        </AddInfoItem>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
