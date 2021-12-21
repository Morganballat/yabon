import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import DropdownWinner from './DropdownBet'
import './style.scss';

const AdminResolve = ({
  changeField,
  getApiBets,
  apiMatches,
  setMatchId,
  match,
  admin,
  setSelectedWinner,
  submitWinner,
  redirectFalse,
}) => {
  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    redirectFalse();
    getApiBets();
  }, []);
  // console.log('on est dans admin');
  let selectedMatchValue;
  let selectedMatchOdd;

  const handleMatch = (event) => {
    // event.preventDefault();
    selectedMatchValue = document.querySelector('.selected');
    console.log(selectedMatchValue);
    for (let i = 0; i < apiMatches.length; i++) {
      if (`${apiMatches[i].host_team} - ${apiMatches[i].visitor}` === selectedMatchValue.textContent) {
        // l'id du match selectionné pars dans le state
        const match_id = apiMatches[i].id
        setMatchId(apiMatches[i], match_id);
        console.log(apiMatches[i].id);
      }
    }
  };

  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };


  const handleSelectWinnerChange = (event) => {
    const selectWinner = document.querySelector('.winner_team').value;
    console.log('on selectionne le winner', selectWinner);
    setSelectedWinner(selectWinner);
  }

  const handleSubmitWinner = (event) => {
    event.preventDefault();
    submitWinner()
  }

  if (admin.redirectTo2) {
    return <Redirect to="/results" />;
  }

  return (
    <form className="admin_form" onSubmit={handleSubmitWinner} >
      <h3 className="admin_title">Formulaire de resolution de Bet</h3>
      <DropdownWinner apiMatches={apiMatches} handleMatch={handleMatch} />
      <div className="admin_form-selections">
        <select name="winner_team" className="winner_team" onChange={handleSelectWinnerChange}>
          <option name="beting_team" value={match.host_team}>{match.host_team}</option>
          <option name="beting_team" value="Draw">Draw</option>
          <option name="beting_team" value={match.visitor}>{match.visitor}</option>
        </select>
      </div>
      <div className="admin_form-inputs">
        <div className="admin_form-betCalculate">
          <input className="admin_input" type="number" name="score_host" placeholder="Score domicile" value={admin.score_host} onChange={handleChange} required />
        </div>
        <div>
          <input className="admin_input" type="number" name="score_visitor" placeholder="Score visiteur" value={admin.score_visitor} onChange={handleChange} required />
        </div>
        <div>
          <input className="admin_input" type="text" name="winner" placeholder="Vainqueur" value={admin.winner} onChange={handleChange} readOnly />
        </div>
      </div>
      <button className="admin_submit" type="submit">Valider mon Bet</button>
    </form>
  );
};

AdminResolve.propTypes = {
  changeField: PropTypes.func,
  analysis: PropTypes.string,
  rating: PropTypes.number,
  getApiBets: PropTypes.func,
  apiMatches: PropTypes.array,
  setMatchId: PropTypes.func,
  match: PropTypes.object,
  admin: PropTypes.object,
  setSelectedMatchOdd: PropTypes.func,
};

export default AdminResolve;
