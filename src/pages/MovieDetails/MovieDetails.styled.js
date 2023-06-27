import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetsWrap = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
`;

export const StyledInfo = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledH3Title = styled.h3`
  margin-bottom: 5px;
  margin-top: 30px;
`;

export const AddList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  font-size: 24px;
  margin-top: 50px;
  background: gainsboro;
  width: 300px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-style: italic;
`;
