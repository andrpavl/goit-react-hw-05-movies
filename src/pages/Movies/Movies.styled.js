import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  list-style: none;

`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  text-decoration: none;
  color: darkred;
  font-size: 20px;
  font-family: cursive;

  &:hover {
    color: tomato
  }
`;

export const StyledInput = styled.input`
  height: 14px;
  margin-right: 10px;
  border-radius: 8px;
  padding: 8px;
 
`;

export const StyledForm = styled.form`
  margin-left: 30px;
  margin-top: 20px;
`;

export const StyledBtn = styled.button`
  height: 32px;
  background: darkblue;
  color: beige;
  font-style: italic;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background: yellow;
    color: black
  }
`;