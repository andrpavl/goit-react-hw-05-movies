import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 30px;

  :hover {
    color: #2630be;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <MdKeyboardBackspace size="24" />
      {children}
    </StyledLink>
  );
};
