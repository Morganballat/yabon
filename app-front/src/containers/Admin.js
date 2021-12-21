// Si le store est le grossiste, le container est le dealer, il distribut en détail les datas dont va avoir besoin le composant pour sa mise à jour perpetuelle (avec les actions)
// Connect() est utilisé à la derniere ligne de cette page,
// Cette fonction de react-redux connecte le composant Admin au store de redux (là où sont les datas)
import { connect } from "react-redux";
// On importe le composant en question
import Admin from "src/components/Admin";
// With router est une fonction qui nous permet de gérer les redirect dans le composant
import { withRouter } from "react-router";

// On importe les actions
import {
  getApiBets,
  setApiBets,
  setAdminFieldValue,
  setMatchId,
  setSelectedMatchOdd,
  setSelectedBetingTeam,
  sendBet,
  setSelectedWinner,
  redirectFalse,
} from "src/actions/admin";

// Ici on récupere les propriétés du state à un moment T (maintenant). Elles sont rendu disponible au composant à la dernière ligne de cette page
const mapStateToProps = (state) => ({
  admin: state.admin.admin,
  match: state.admin.match,
  apiMatches: state.admin.apiMatches,
});

// Ici les actions sont définies en propriétés. Ces propriétés ont maintenant utilisable dans le composant rélié
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setAdminFieldValue(value, name)),
  getApiBets: () => dispatch(getApiBets()),
  setApiBets: (apiBetData) => dispatch(setApiBets(apiBetData)),
  setMatchId: (data) => dispatch(setMatchId(data)),
  setSelectedMatchOdd: (data) => dispatch(setSelectedMatchOdd(data)),
  setSelectedBetingTeam: (value) => dispatch(setSelectedBetingTeam(value)),
  submitBet: () => dispatch(sendBet()),
  setSelectedWinner: (data) => dispatch(setSelectedWinner(data)),
  redirectFalse: () => dispatch(redirectFalse()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
