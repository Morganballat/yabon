import axios from 'axios';
import { 
  GET_API_BETS,
  setApiBets,
  SEND_BET,
  sendBetRedirect,
  SEND_WINNER,
  sendWinnerRedirect,
} from 'src/actions/admin';

const adminMiddlewares = (store) => (next) => (action) => {
  const {
    admin: {beting_team, bet_odds, mise, bookmaker_id, user_id, trust, comment, match_id, score_host, score_visitor, winner},
  } = store.getState().admin;

  switch (action.type) {
    case GET_API_BETS: {
      // console.log('ici le middleware apibets');
      // requete axios concernant les bets
      // axios.get('https://api.the-odds-api.com/v3/odds/?apiKey=0ed042d4a8306e9e78e0ae78c7a290df&sport=soccer&region=eu&region=uk&mkt=h2h&dateFormat=iso', {
      //   params: {
      //     api_key: '0ed042d4a8306e9e78e0ae78c7a290df',
      //   },
      // }).then((response) => {
      //   let cleanedItems = [];
      //   response.data.data.map((item) => {
      //     cleanedItems.push({
      //       teams: item.teams,
      //       host_team: item.home_team,
      //       commence_time: item.commence_time,
      //       filter: item.sites.filter(function (site) {
      //         if (site.site_key === 'unibet') {
      //           return site
      //       }})})

      //   });
      //   store.dispatch(setApiBets(cleanedItems));
      // ------- Envoi au back après nettoyage
      axios.get('https://yabon-api-back.herokuapp.com/v1/matchsIncoming/')
        .then((response) => {
          // store.dispatch(setApiBets(cleanedItems))
          // console.log('match de la bdd', response.data);
          store.dispatch(setApiBets(response.data));
        }).catch((error) => {
          console.log('erreur axios envois de cleanedItems à la BDD', error);
        });
      // ------
      break;
    }
// {/*matchid bookmaker=a1 userId=a1*/}
    case SEND_BET: {
      axios.post('https://yabon-api-back.herokuapp.com/v1/bets/', { beting_team, mise, bet_odds, bookmaker_id, user_id, trust, comment, match_id })
        .then((response) => {
          console.log('axios SEND_BET', response.data);
          store.dispatch(sendBetRedirect());
        }).catch((error) => {
          console.log('erreur axios envoi de sendBet', error);
        });
      break;
    }
    case SEND_WINNER: {
      axios.patch(`https://yabon-api-back.herokuapp.com/v1/resolve/${match_id}`, { score_host, score_visitor, winner })
        .then((response) => {
          console.log('ici on log le winner axios', response.data);
          store.dispatch(sendWinnerRedirect())
        }).catch((error) => {
          console.log('erreur axios envoi de winner', error);
        });
      break;
    }
    default:
      next(action);
  }
};
export default adminMiddlewares;
