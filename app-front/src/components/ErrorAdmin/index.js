import React from 'react';

import './style.scss';
import colina from 'src/assets/img/colina.png';

const ErrorAdmin = () => (
  <div className="errorAdmin_section">
    <h4 className="errorAdmin_section-title">Carton Rouge vous n'êtes pas Admin</h4>
    <img src={colina} alt="colina" className="errorAdmin_section-img" />
  </div>
);

export default ErrorAdmin;
