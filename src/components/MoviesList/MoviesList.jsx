const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }, index) => (
          <li key={id}>
            {index + 1}. {original_title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
