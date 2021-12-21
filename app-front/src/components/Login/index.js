import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

import LoginForm from './LoginForm';

const Login = ({
  handleLogin,
  changeField,
  title,
  user,
  redirectFalse
}) => {
   useEffect(() => {
    redirectFalse();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('ici je passe par handleSubmit');
    handleLogin();
  };

  return (
    <div className="forms">
      <div className="cards_network-title">{title}</div>
      <div className="register">
        <LoginForm onChange={changeField} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Login.defaultProps = {
  title: '',
};

export default Login;
