import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Login from "src/components/Login";

// import des différentes actions nécessaires
import {
  setFieldValue,
  loginSuccess,
  sendLogin,
  redirectFalse,
} from "src/actions/user";

// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  user: state.user.user,
  newUser: state.user.newUser,
});

// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleLogin: () => dispatch(sendLogin()),
  redirectFalse: () => dispatch(redirectFalse()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
