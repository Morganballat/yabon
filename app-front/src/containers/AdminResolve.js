import { connect } from 'react-redux';
import AdminResolve from 'src/components/AdminResolve';
import { withRouter } from 'react-router';
import {
  getApiBets,
  setApiBets,
  setAdminFieldValue,
  setMatchId,
  sendWinner,
  setSelectedWinner,
  redirectFalse,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
  admin: state.admin.admin,
  match: state.admin.match,
  apiMatches: state.admin.apiMatches,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setAdminFieldValue(value, name)),
  getApiBets: () => dispatch(getApiBets()),
  setApiBets: (apiBetData) => dispatch(setApiBets(apiBetData)),
  setMatchId: (data) => dispatch(setMatchId(data)),
  submitWinner: () => dispatch(sendWinner()),
  setSelectedWinner: (data) => dispatch(setSelectedWinner(data)),
  redirectFalse: () => dispatch(redirectFalse()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminResolve));
