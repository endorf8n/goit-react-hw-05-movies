import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, SearchBtn, StyledForm } from './searchMoviesForm.styled';

export const SearchMoviesForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = ({ target }) => setValue(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        value={value}
        onChange={handleChangeValue}
        placeholder="Enter movie title"
        required
        autoFocus
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </StyledForm>
  );
};

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
