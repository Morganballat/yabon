import { connect } from 'react-redux';
import Odds from 'src/components/Odds';

// import des différentes actions nécessaires
import {
  setBets,
  getOddsBet,
} from 'src/actions/bet';

// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  bets: state.bet.bets,
  bet: state.bet.bet,
});

// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({
  setBets: (betData) => dispatch(setBets(betData)),
  getOddsBet: () => dispatch(getOddsBet()),
});

export default
connect(
  mapStateToProps,
  mapDispatchToProps,
)(Odds);
