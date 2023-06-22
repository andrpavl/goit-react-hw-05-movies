import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 20px;
  background: lightsteelblue;
  box-shadow: 0 4px 2px -2px gray;
`;

export const NavLinkItem = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: brown;

  &.active {
    font-style: italic;
    font-weight: bold;
  }
`;
