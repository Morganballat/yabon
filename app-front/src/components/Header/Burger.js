import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import "./style.scss";

const Burger = ({ isLogged, handleLogout, admin }) => {
  const closeBurger = () => {
    const link = document.querySelector(".check");
    link.checked = false;
    window.scroll({ top: window.innerHeight, behavior: "smooth" });
  };
  let navStatus = null;
  if (isLogged && admin) {
    navStatus = (
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={closeBurger}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" onClick={closeBurger}>
              Bilan
            </NavLink>
          </li>
          <li>
            <NavLink to="/odds" onClick={closeBurger}>
              Pronostics
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" onClick={closeBurger}>
              Ajouter un bet
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminResolve" onClick={closeBurger}>
              Valider un bet
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
        </ul>
      </nav>
    );
  }
  else if (isLogged) {
    navStatus = (
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={closeBurger}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" onClick={closeBurger}>
              Bilan
            </NavLink>
          </li>
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
            <NavLink to="/logout" onClick={(closeBurger, handleLogout)}>
              Se déconnecter
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  else {
    navStatus = (
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={closeBurger}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" onClick={closeBurger}>
              Bilan
            </NavLink>
          </li>
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
        </ul>
      </nav>
    );
  }
  return (
    <div>
      <input id="burger" type="checkbox" className="check" />
      <label htmlFor="burger">
        <span />
        <span />
        <span />
      </label>
      {navStatus}
    </div>
  );
};

Burger.propTypes = {
  isLogged: PropTypes.bool,
  admin: PropTypes.bool,
};

export default Burger;
