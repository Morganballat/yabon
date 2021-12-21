import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import des composants
import Bankroll from './Bankroll';
import History from './History';
import Highlights from './Highlights';

import './style.scss';

const Results = ({
  bets,
  bestWin,
  getBestBet,
  getBets,
}) => {
  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    getBestBet();
    getBets();
  }, []);

  // calcul du ratio ( % )
  const ratio = Math.round(100 * (bets.filter(bet => bet.gain > 0)).length / bets.length);

  return (
    <div className="results">
      <Highlights ratio={ratio} bestWin={bestWin} />
      <div className="results__cards">
        <History bets={bets} />

      </div>
      <Bankroll bets={bets} />
    </div>
  );
};

Results.propTypes = {
  bets: PropTypes.array.isRequired,
  bestWin: PropTypes.number,
  getBestBet: PropTypes.func.isRequired,
};
Results.defaultProps = {
  bestWin: null,
};

export default Results;
