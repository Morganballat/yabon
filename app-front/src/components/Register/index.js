import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

import Signin from './Signin';

const Register = ({
  changeFieldSignup,
  handleSignin,
  title,
  newUser,
}) => {
  const handleSigninSubmit = (event) => {
    event.preventDefault();
    handleSignin();
  };

  if (newUser.redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="forms">
      <div className="cards_network-title">{title}</div>
      <div className="register">
        <Signin onChange={changeFieldSignup} onSubmit={handleSigninSubmit} />
      </div>
    </div>
  );
};

Register.propTypes = {
  changeFieldSignup: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
  title: PropTypes.string,
  newUser: PropTypes.object.isRequired,
};

Register.defaultProps = {
  title: '',
};

export default Register;
