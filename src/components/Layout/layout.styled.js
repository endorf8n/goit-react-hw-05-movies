import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px 30px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const PageList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 700;

  &.active {
    color: #ee4b2b;
  }
`;
