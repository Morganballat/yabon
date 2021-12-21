import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from 'src/assets/V2.png';
import Burger from './Burger';
import DesktopMenu from './DesktopMenu';
import './style.scss';

const Header = ({ user, handleLogout }) => {
  let menu = null;
  let displayConnected = null;
  const scrollWindow = () => {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
    console.log('ici je scroll');
  };
  if (window.innerWidth < 959) {
    menu = <Burger isLogged={user.isLogged} handleLogout={handleLogout} admin={user.admin} />;
  }
  else {
    menu = <DesktopMenu isLogged={user.isLogged} handleLogout={handleLogout} admin={user.admin} />;
  }

  if (user.isLogged) {
    (
      displayConnected = <div className="header_connected">Bienvenue {user.firstname}</div>
    );
  }

  // if(window.location.pathname === 'http://localhost:8080'){(
  //   homePoint = <div className="home__button_container">
  //     <NavLink to="/" className="banner__button" onClick={scrollWindow}>Je découvre</NavLink>
  //   </div>
  //   );
  //  }

  return (
    <header className="header__banner">
      <div className="header__logo">
        <NavLink to="/"><img src={logo} alt="logo-yabon" className="header__logo-img" /></NavLink>
      </div>
      {displayConnected}
      {menu}
      <div className="banner__content">
        <h2 className="banner__subtitle">Le meilleur du paris sportif en ligne. Découvre nos pronostics et gagne avec nous</h2>
      </div>
      <div className="home__button_container">
        <NavLink to="/" className="banner__button" onClick={scrollWindow}>Je découvre</NavLink>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

// Header.defaultProps = {
//   isLogged: false,
//   firstname: '',
//   admin: false,
// };

export default Header;
