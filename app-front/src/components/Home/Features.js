import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ ratio, bestWin }) => (
  <div className="cards">
    <div className="cards_network-title"> A propos </div>
    <div className="cards_card">
      <header className="cards_card-header">Quelques chiffres</header>
      <div className="cards_body">
        <div className="cards_numbers">
          <div className="cards_number">Mon ratio de victoire</div>
          <div className="cards_number-content">{ratio} %</div>
        </div>
        <div className="cards_numbers">
          <div className="cards_number">Mon gain record</div>
          <div className="cards_number-content">{bestWin} €</div>
        </div>
      </div>
      {/* <p className="cards_card-outro">No bullshit.</p> */}
    </div>
    
    <div className="cards_card">
      <header className="cards_card-header">Tout sur le foot</header>
      <p className="cards_card-content">
        J'analyse, décortique et vulgarise les principaux championnats
        européens.
      </p>
      <p className="cards_card-outro">Je ne dors jamais.</p>
    </div>
    
    <div className="cards_card">
      <header className="cards_card-header">Abonnements</header>
      <p className="cards_card-content">Bientôt disponible!</p>
      {/* <p className="cards_card-outro">gagnera qui cliquera.</p> */}
    </div>
  </div>
);
Features.propTypes = {
  ratio: PropTypes.number.isRequired,
  bestWin: PropTypes.number,
};

Features.defaultProps = {
  bestWin: null,
};

export default Features;
