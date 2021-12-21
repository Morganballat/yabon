import React from 'react';
import PropTypes from 'prop-types';

// composant stylisé via semantic-ui
import {
  Rating,
} from 'semantic-ui-react';

const Bet = ({ bet }) => {
  const cardElement = bet.map((item) => (
    <div key={item.id}>
      <div className="cards_card cards_prono">
        <header className="cards_card-header bet_title">{`${item.host_team} - ${item.visitor}`}</header>      
        <div className="cards_body">
          <div className="cards_numbers">
            <div className="cards_number rating">
              <div className="cards_number-content bet_text-content">{item.beting_team}</div> 
              <Rating
                icon="star"
                defaultRating={item.trust}
                maxRating={5}
                disabled
              />
            </div>
            <div className="cards_number-content bet_text-content">{item.comment}</div>
          </div>
          <div className="cards_numbers">
            <div className="cards_number bet_cote-content">Cote : {item.bet_odds}</div>
              <a className="cards_card-outro"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Unibet_logo.svg/langfr-1920px-Unibet_logo.svg.png" alt="" className="slug_picture" /></a>
          </div>
        </div>
        
      </div>
    </div>
  ));

  return (
    <div className="cards">
      <div className="cards_network-title">Pronostics en cours</div>
      {cardElement}
    </div>
  );
};

Bet.propTypes = {
  bet: PropTypes.array,
};

Bet.defaultProps = {
  bet: [],
};

export default Bet;
