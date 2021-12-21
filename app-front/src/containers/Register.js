import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Register from "src/components/Register";

// import des différentes actions nécessaires
import {
  setSigninFieldValue,
  sendSignin,
} from "src/actions/user";

// MapStateToProps permet de parcourir le state
const mapStateToProps = (state) => ({
  user: state.user.user,
  newUser: state.user.newUser,
});

// MapDispatch permet de... ben de dispatch les actions -_- voyons jamy
const mapDispatchToProps = (dispatch) => ({

  changeFieldSignup: (value, name) =>
    dispatch(setSigninFieldValue(value, name)),
  handleSignin: () => dispatch(sendSignin()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
