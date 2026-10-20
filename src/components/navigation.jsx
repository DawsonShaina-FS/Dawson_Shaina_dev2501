import styled from "styled-components";
import { NavLink } from "react-router";

// container for nav links
const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
`;

const NavTitle = styled.h2`
  margin: 0 0 15px;
  font-size: 18px;
  font-weight: 600;
  color: #555;
`;

// styled router link
const MenuLink = styled(NavLink)`
  display: block;
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #777;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    background: #f1edff;
    color: #725ac1;
  }

  &.active {
    background: #f1edff;
    color: #49378b;
    font-weight: 600;
  }
`;

// nav used accross site
const Navigation = () => {
    return (
        <NavContainer>
            <NavTitle>Menu</NavTitle>

            <MenuLink to="/dashboard">Dashboard</MenuLink>
            <MenuLink to="/newsfeed">Newsfeed</MenuLink>
            <MenuLink to="/messages">Messages</MenuLink>
            <MenuLink to="/settings">Settings</MenuLink>
        </NavContainer>
    );
};

export default Navigation;