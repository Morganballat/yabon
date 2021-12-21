import { connect } from 'react-redux';
import App from 'src/components/App';
import { getBets, getBestBet } from 'src/actions/bet';

const mapStateToProps = (state) => ({
  isLogged: state.user.user.isLogged,
  admin: state.user.user.admin,
});

const mapDispatchToProps = (dispatch) => ({
  getBets: () => dispatch(getBets()),
  getBestBet: () => dispatch(getBestBet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
