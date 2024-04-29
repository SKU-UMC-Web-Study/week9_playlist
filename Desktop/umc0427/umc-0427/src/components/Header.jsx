import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
`;

const LogoLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 30px;
  flex-grow: 0;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;

  &:hover {
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <nav>
      <Navcontainer>
        <LogoLink to="/">Ssoy Movie</LogoLink>
        <NavMenu>
          <NavLink to="/popular">Popular</NavLink>
          <NavLink to="/nowplaying">Now Playing</NavLink>
          <NavLink to="/toprated">TopRated</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </NavMenu>
      </Navcontainer>
    </nav>
  );
};

export default Header;