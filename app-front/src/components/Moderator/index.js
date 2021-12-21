import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import './style.scss';

const Moderator = ({
  reviews,
  setIdReviewToDelete,
  sendDeleteReview,
  getReviews,
  idReviewToDelete
}) => {
  console.log('ici la liste des reviews dans modérator', reviews);

  const handleDeleteReview = (event) => {
    event.preventDefault();
    setIdReviewToDelete(event.target.name);
    sendDeleteReview();
    console.log(event.target.name);
  };

  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    getReviews();
  }, [reviews.length]);

  const userReviews = reviews.map((review) => (
    <form onSubmit={handleDeleteReview} key={review.id} name={review.id} value={review.id}>
      <ul className="reviews_list">
        <li>
          <div className="reviews_review">
            <p className="reviews_review-content">{review.content}</p>
            <Rating
              icon="star"
              defaultRating={review.rate}
              maxRating={5}
              disabled
            />
            <p className="reviews_review-author">{review.firstname}</p>
          </div>
          <button type="submit">Supprimer</button>
        </li>
      </ul>
    </form>
  ));

  return (
    <>
      {userReviews}
    </>
  );
};

Moderator.propTypes = {
  reviews: PropTypes.array.isRequired,
  sendDeleteReview: PropTypes.func.isRequired,
  getReviews: PropTypes.func.isRequired,
  idReviewToDelete: PropTypes.number.isRequired,
  setIdReviewToDelete: PropTypes.func.isRequired,
};

export default Moderator;
