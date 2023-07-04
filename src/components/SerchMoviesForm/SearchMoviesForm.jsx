import { useState } from 'react';

export const SearchMoviesForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = ({ target }) => setValue(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleChangeValue}
        placeholder="Enter movie title"
        required
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};
