import React, { useEffect } from "react";
import PropTypes from "prop-types";

import History from "src/components/Results/History";
import Loader from "./Loader";
import Bet from "./Bet";
// import CombinedBets from "./CombinedBets";
import "./style.scss";

const Odds = ({ bets, bet, getOddsBet }) => {
  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    getOddsBet();
  }, []);
  // console.log("je suis dans odds", getOddsBet);
  return (
    <div className="odds_container">
      <Bet bet={bet} />
      <History bets={bets} />
    </div>
  );
};

Odds.propTypes = {
  bets: PropTypes.array.isRequired,
  bet: PropTypes.array,
  getOddsBet: PropTypes.func.isRequired,
};

Odds.defaultProps = {
  bet: [],
};

export default Odds;
