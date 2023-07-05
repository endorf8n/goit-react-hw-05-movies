import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/movieApi';
import { CastCharacter, CastList, CastListItem, CastName } from './cast.styled';
import noProfilePhoto from './../../service/images/NoProfilePicture.jpg';

const Cast = () => {
  const [movieCast, setMovieCast] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => setMovieCast(cast));
  }, [movieId]);

  if (!movieCast) return;

  return (
    <div>
      <CastList>
        {movieCast.map(({ id, profile_path, name, character }) => (
          <CastListItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `${noProfilePhoto}`
              }
              alt={name}
              width="80"
            />
            <CastName>Name: {name}</CastName>
            <CastCharacter>Character: {character}</CastCharacter>
          </CastListItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
