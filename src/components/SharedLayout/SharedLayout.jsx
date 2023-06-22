import { Outlet } from 'react-router-dom';
import { Nav, NavLinkItem } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
      </Nav>
      <Outlet />
    </div>
  );
};
