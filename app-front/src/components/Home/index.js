import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import des composants
import Features from 'src/components/Home/Features';
import Cards from 'src/components/Home/Cards';

import './style.scss';

const Home = ({
  getBets,
  getBestBet,
  getReviews,
  bestWin,
  reviews,
  bets,
}) => {
  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    getBets();
    getBestBet();
    getReviews();
  }, []);

  // calcul du ratio ( % )
  const ratio = Math.round(100 * (bets.filter(bet => bet.gain > 0)).length / bets.length);

  return (
    <div className="home">
      <Features ratio={ratio} bestWin={bestWin} />
      <Cards reviews={reviews} />
      <div className="home__button_container">
        <NavLink to="/register" className="home__button">
          Je m'abonne
        </NavLink>
      </div>
    </div>
  );
};

Home.propTypes = {
  getReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  bestWin: PropTypes.number,
  bets: PropTypes.array.isRequired,
};

Home.defaultProps = {
  bestWin: null,
};

export default Home;
