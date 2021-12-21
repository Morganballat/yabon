import React from 'react';
import PropTypes from 'prop-types';

import DropdownBets from './Dropdown';
import './style.scss';

const BetValidateForm = ({handleChange, admin, apiMatches, handleMatch}) => {
  console.log('on est bien dans le formulaire');
  
  return (
    <div className="admin__bet_validator">
      <DropdownBets apiMatches={apiMatches} handleMatch={handleMatch}/>
      <input type='number' name='score_host' placeholder='Score domicile' value={admin.score_host} onChange={handleChange}/>
      <input type='number' name='score_visitor' placeholder='Score Exterieur' value={admin.score_visitor} onChange={handleChange}/>
      <input type='text' name='winner' placeholder='Vainqueur' value={admin.winner} onChange={handleChange}/>
      <button type='submit' >Valider mon bet</button>
    </div>
  );
};

BetValidateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  admin: PropTypes.bool,
  apiMatches: PropTypes.array.isRequired,
  handleMatch: PropTypes.func.isRequired,
};

BetValidateForm.defaultProps = {
  admin: false,
};

export default BetValidateForm;
