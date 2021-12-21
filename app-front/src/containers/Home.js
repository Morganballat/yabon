import { connect } from "react-redux";
import { withRouter } from "react-router";
import Home from "src/components/Home";

import { getReviews } from "src/actions/user";
import { getBestBet, getBets } from 'src/actions/bet';
// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  reviews: state.user.reviews,
  bets: state.bet.bets,
  bestWin: state.bet.bestWin,
});
// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({
  getReviews: () => dispatch(getReviews()),
  getBestBet: () => dispatch(getBestBet()),
  getBets: () => dispatch(getBets()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
