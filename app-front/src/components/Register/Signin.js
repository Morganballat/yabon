import React from 'react';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

// détail et méthode de l'onglet inscription
const Signin = ({
  onChange,
  onSubmit,
  firstname,
  lastname,
  mail,
  password,
  confirmPassword,
}) => {
  // console.log('newUser');
  const handleSignupChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  return (
    <Tab.Pane attached={false}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Prénom</label>
          <input type="text" name="firstname" placeholder="Prénom" onChange={handleSignupChange} value={firstname} required />
        </div>
        <div className="field">
          <label>Nom</label>
          <input type="text" name="lastname" placeholder="Nom" onChange={handleSignupChange} value={lastname} required />
        </div>
        <div className="field">
          <label>Adresse mail</label>
          <input type="email" name="mail" placeholder="Email" onChange={handleSignupChange} value={mail} required />
        </div>
        <div className="field">
          <label>Choisissez un mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Entrer votre mot de passe"
            onChange={handleSignupChange}
            value={password}
            required
          />
          <label>Confirmez le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmation du mot de passe"
            onChange={handleSignupChange}
            value={confirmPassword}
            required
          />
        </div>
        <div className="field">
          <label>
            <input className="ui checkbox" type="checkbox" name="checkbox" required />
            J'accepte les termes et conditions
          </label>
          <label>
            <input className="ui checkbox" type="checkbox" name="checkbox" required />
            Je suis majeur
          </label>
          <button className="ui button" type="submit">
            Inscription
          </button>
        </div>
      </form>
    </Tab.Pane>
  );
};

Signin.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  mail: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};

export default Signin;
