import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 5px 30px;
`;
export const Input = styled.input`
  font-size: 16px;
  width: 300px;
  height: 32px;
  border-radius: 4px;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  font-size: 16px;
  width: 120px;
  height: 36px;
  border-radius: 4px;
  border-color: transparent;
  background-color: #d3d3d3;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #fa8072;
    color: white;
  }
`;
