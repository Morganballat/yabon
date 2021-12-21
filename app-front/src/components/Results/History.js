import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const History = ({ bets }) => {
  // console.log('je suis dans historybet', bets);
  let betstatus = null;
  let i = 0;
  const historyBets = bets.slice((bets.length - 5), bets.length).map((item) => {
    if (item.gain > 0) {
      betstatus = 'positive';
    } else {
      betstatus = 'negative';
    }
    return (
      // Attention Key provisoire, les bets ont des id identiques
      // <tbody className={betstatus} key={item.length}>
      <tr className={betstatus} key={i++}>
        <td>{item.beting_team}</td>
        <td>{item.bet_odds}</td>
        <td>{item.mise}</td>
        <td>{item.gain}</td>
      </tr>
      // </tbody>
    );
  });
  return (
    <div className="results__container">
      <div className="cards_network-title"> Derniers paris </div>
      <table id="bets__table" className="results__container-table">
        <thead>
          <tr>
            <th>MATCH</th>
            <th>COTE</th>
            <th>MISE</th>
            <th>GAIN</th>
          </tr>
        </thead>
        <tbody>
          {historyBets}
        </tbody>
      </table>
    </div>
  );
};

History.propTypes = {
  bets: PropTypes.array.isRequired,
};

export default History;
