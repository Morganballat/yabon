import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from "prop-types";

import "./style.scss";

const DesktopMenu = ({ isLogged, handleLogout, admin }) => {
  const closeBurger = () => {
    const link = document.querySelector('.check');
    link.checked = false;
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  };
  let navStatus = null;
  if (isLogged && admin) {
    navStatus = (
      <div>
        <li>
          <NavLink to="/odds" onClick={closeBurger}>
            Pronostics
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" onClick={closeBurger}>
            Ajouter un Bet
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminResolve" onClick={closeBurger}>
            Valider un Bet
          </NavLink>
        </li>
          <li>
            <NavLink to="/moderator" onClick={closeBurger}>
              Modération
            </NavLink>
          </li>
        <li>
          <NavLink to="/logout" onClick={(closeBurger, handleLogout)}>
            Se déconnecter
          </NavLink>
        </li>
      </div>
    );
  }
  else if (isLogged) {
    navStatus = (
      <div>
        <li>
          <NavLink to="/odds" onClick={closeBurger}>
            Pronostics
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" onClick={closeBurger}>
            Mon compte
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" onClick={(closeBurger, handleLogout)} className="deconnection">
            Se déconnecter
          </NavLink>
        </li>
      </div>
    );
  }

  else {
    navStatus = (
      <div>
        <li>
          <NavLink to="/login" onClick={closeBurger}>
            Connexion
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" onClick={closeBurger}>
            Inscription
          </NavLink>
        </li>
      </div>
    );
  }
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" className="check" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li>
            <NavLink className="" to="/" onClick={closeBurger}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" onClick={closeBurger}>
              Bilan
            </NavLink>
          </li>
          {/* Si admin , la page dans le burger */}
          {/* <li><NavLink to="/admin" onClick={closeBurger}>Admin</NavLink></li> */}
          {navStatus}
        </ul>
      </div>
    </nav>
  );
};

DesktopMenu.propTypes = {
  isLogged: PropTypes.bool,
  admin: PropTypes.bool,
};

export default DesktopMenu;
