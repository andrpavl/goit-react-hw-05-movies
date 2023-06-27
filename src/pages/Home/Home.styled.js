import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 0.7px;
`;

export const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledListLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: lightslategray;
  font-weight: 500;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  &:hover {
    color: cornflowerblue;
  }
`;

export const StyledTitle = styled.h1`
  font-style: italic;
  color: darkgoldenrod;
  margin-left: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
