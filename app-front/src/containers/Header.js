import { connect } from 'react-redux';
import Header from 'src/components/Header';

import {
  sendLogout,
} from 'src/actions/user';

// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  user: state.user.user,
});
// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(sendLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
