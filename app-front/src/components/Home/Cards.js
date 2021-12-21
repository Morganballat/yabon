import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Carousel from 'react-elastic-carousel';

import twitterLogo from 'src/assets/img/Twitter.svg';
import facebookLogo from 'src/assets/img/Facebook.svg';
import instagramLogo from 'src/assets/img/Instagram.svg';

// Faire un carousel pour afficher les 3 premiers cards_card, qui sont des commentaires de users.

const Cards = ({ reviews }) => {
  // console.log("mapreview in cards");
  const userReviews = reviews.map((review) => [
    <div key={review.id} className="cards_carousel">
      <p className="cards_card-content">{review.content}</p>
      <Rating
        icon="star"
        defaultRating={review.rate}
        maxRating={5}
        disabled
      />
      <p className="cards_card-outro">{review.firstname}</p>
    </div>,
  ]);
  // console.log("userrevieews après push", userReviews);

  return (
    <div className="cards">
      <div className="cards_network-title"> Réseaux sociaux </div>

      <div className="cards_card cards_card-network">
        <Link to={{ pathname: 'https://twitter.com/' }} target="_blank">
          <img src={twitterLogo} alt="twitter Logo" className="network-logo" />
        </Link>
        <Link to={{ pathname: 'https://facebook.com/' }} target="_blank">
          <img
            src={facebookLogo}
            alt="facebook Logo"
            className="network-logo"
          />
        </Link>
        <Link to={{ pathname: 'https://instagram.com/' }} target="_blank">
          <img
            src={instagramLogo}
            alt="instagram Logo"
            className="network-logo"
          />
        </Link>
      </div>
      <div className="cards_card">
        <header className="cards_card-header">Demande aux abonnés!</header>
        <Carousel
          itemsToShow={1}
          autoPlaySpeed={4500}
          enableAutoPlay
          responsive
        >
          {userReviews}
        </Carousel>
      </div>
    </div>
  );
};

Cards.propTypes = {
  reviews: PropTypes.array.isRequired,
};
export default Cards;
