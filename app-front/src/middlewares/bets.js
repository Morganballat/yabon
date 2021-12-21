import axios from 'axios';
import { GET_BETS, setBets, GET_ODDS_BET, setOddsBet, GET_RATIO, setRatio, GET_BEST_BET, setBestBet } from 'src/actions/bet';

const betsMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BETS: {
      // console.log('ici le middleware bets');
      // requete axios concernant le login
      axios.get('https://yabon-api-back.herokuapp.com/v1/allLastPlayedBets')
        .then((response) => {
          store.dispatch(setBets(response.data));
          // console.log('requete axios', response.data);
        }).catch((error) => {
          console.log('erreur axios', error);
        });
      break;
    }
    case GET_ODDS_BET: {
      axios.get('https://yabon-api-back.herokuapp.com/v1/threeLastBetIncoming')
        .then((response) => {
          // console.log('ici set odds bet', response.data);
          store.dispatch(setOddsBet(response.data));
        }).catch((error) => {
          console.log('erreur axios', error);
        });
      break;
    }
    case GET_RATIO: {
      axios.get('')
        .then((response) => {
          // console.log('ici ratio', response.data);
          store.dispatch(setRatio(response.data));
        }).catch((error) => {
          console.log('erreur axios', error);
        });
      break;
    }
    case GET_BEST_BET: {
      axios.get('https://yabon-api-back.herokuapp.com/v1/bestbet')
        .then((response) => {
          // console.log('ici le best bet', response.data);
          store.dispatch(setBestBet(response.data));
        }).catch((error) => {
          console.log('erreur axios', error);
        });
      break;
    }
    default:
      next(action);
  }
};
export default betsMiddlewares;
