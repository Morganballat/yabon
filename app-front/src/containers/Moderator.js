import { connect } from 'react-redux';
import Moderator from 'src/components/Moderator';

import {
  sendDeleteReview,
  getReviews,
  setIdReviewToDelete,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  reviews: state.user.reviews,
  idReviewToDelete: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setIdReviewToDelete: (name) => dispatch(setIdReviewToDelete(name)),
  sendDeleteReview: () => dispatch(sendDeleteReview()),
  getReviews: () => dispatch(getReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Moderator);
