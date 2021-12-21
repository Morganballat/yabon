  
import React from 'react';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

// détail et méthode de l'onget de connexion
const Login = ({
  onChange,
  onSubmit,
  mail,
  password,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };
  return (
    <Tab.Pane attached={false}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Adresse Email</label>
          <input type="text" name="mail" placeholder="Email" value={mail} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Mot de passe</label>
          <input type="password" name="password" placeholder="Mot de passe" value={password} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Connexion
        </button>
      </form>
    </Tab.Pane>
  );
};

Login.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  mail: PropTypes.string,
  password: PropTypes.string,
  loggedMessage: PropTypes.string,
  isLogged: PropTypes.bool,
};

export default Login;
