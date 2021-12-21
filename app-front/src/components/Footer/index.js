import React from 'react';
import { NavLink } from 'react-router-dom';

import LegalTerms from './LegalTerms';
import './style.scss';

const Footer = () => (
  <footer>
    <p className="footer_content">
      « Jouer comporte des risques : endettement, isolement, dépendance. Pour être
      aidé, appelez le 09-74-75-13-13 (appel non surtaxé) »
    </p>
    <LegalTerms />
    <NavLink to="/team">© Yabon Prono 2021</NavLink>
  </footer>
);

export default Footer;
