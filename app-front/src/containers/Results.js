import { connect } from 'react-redux';
import Results from 'src/components/Results';
import { withRouter } from 'react-router-dom';

// import des différentes actions nécessaires
import {
  getBets,
  setBets,
  getBestBet,
  getRatio,
} from 'src/actions/bet';

// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  bets: state.bet.bets,
  ratio: state.bet.ratio,
  bestWin: state.bet.bestWin,
});

// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({
  setBets: (betData) => dispatch(setBets(betData)),
  getBestBet: () => dispatch(getBestBet()),
  getRatio: () => dispatch(getRatio()),
  getBets: () => dispatch(getBets()),
});

export default
connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
