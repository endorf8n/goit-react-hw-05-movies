import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movieApi';
import { ReviewAuthor, ReviewContent, ReviewsList } from './reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setMovieReviews(results));
  }, [movieId]);

  if (movieReviews.length < 1) {
    return "We don't have any reviews for this movie.";
  }

  return (
    <div>
      <ReviewsList>
        {movieReviews.map(({ id, author, content }) => (
          <li key={id}>
            <ReviewAuthor>Author: {author}</ReviewAuthor>
            <ReviewContent>{content}</ReviewContent>
          </li>
        ))}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
