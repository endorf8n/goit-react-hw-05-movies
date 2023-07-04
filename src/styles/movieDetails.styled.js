import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkGoBack = styled(Link)`
  display: block;
  width: 100px;
  border: 2px solid gray;
  border-radius: 4px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 30px;
`;

export const MovieDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieTitle = styled.h2`
  font-size: 28px;
`;

export const MoviesInfoText = styled.p`
  font-size: 14px;
`;

export const AddInfoText = styled.h3`
  padding: 5px 30px;
`;

export const AddInfoItem = styled.li`
  padding: 0 30px;
`;
