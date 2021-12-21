import { connect } from "react-redux";
import { withRouter } from "react-router";
import Profile from "src/components/Profile";

import { setNewReviewFieldValue, sendNewReview, sendDeleteAccount } from "src/actions/user";

// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  userName: state.user.user.firstname,
  newReview: state.user.newReview,
});

// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({
  changeFieldComment: (value, name) => dispatch(setNewReviewFieldValue(value, name)),
  handleNewReview: () => dispatch(sendNewReview()),
  sendDeleteAccount: () => dispatch(sendDeleteAccount()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
