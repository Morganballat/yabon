// Import des actions

import {
  GET_API_BETS,
  SET_API_BETS,
  SET_ADMIN_FIELD_VALUE,
  SET_MATCH_ID,
  SET_SELECTED_MATCH_ODD,
  SET_SELECTED_BETING_TEAM,
  SEND_BET,
  SEND_BET_REDIRECT,
  SET_SELECTED_WINNER,
  SEND_WINNER,
  SEND_WINNER_REDIRECT,
<<<<<<< HEAD
} from "src/actions/admin";
=======
  REDIRECT_FALSE,
} from 'src/actions/admin';

>>>>>>> dev

// State initiale. Les données par défaut coté front avant quelconque action
export const initialState = {
  admin: {
    beting_team: "",
    date: "",
    mise: null,
    bet_odds: null,
    comment: "",
    trust: null,
    bookmaker_id: 1,
    user_id: 1,
    match_id: null,
<<<<<<< HEAD
    score_host: "",
    score_visitor: "",
    winner: "",
    redirectToResults: false,
    redirectToOdds: false,
=======
    score_host: '',
    score_visitor: '',
    winner: '',
    redirectTo: false,
    redirectTo2: false,
>>>>>>> dev
  },
  match: {
    match_id: 1,
    host_team: "",
    visitor: "",
    odds_1: null,
    odds_2: null,
    odds_draw: null,
  },
  apiMatches: {
    host_team: "Paris",
    visitor: "chartres",
    commence_times: null,
    odds_1: 10,
    odds_2: 1.6,
    odds_draw: 2.5,
  },
};

// un reducer est cette forme de fonction

//
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // chaque case représente une action
    case SET_ADMIN_FIELD_VALUE: {
      return {
        // Le state actuel est récupéré et stocké ici
        ...state,
        // lorsque cette action est déclenché par un utilisateur on ne modifie que la donnée admin dans le state
        admin: {
          // On récupère l'entiereté de ce qu'il y a dans le state à admin
          ...state.admin,
          // Mais lorsque l'action est déclenché on ne modifie que ce qui suit
          [action.name]: action.value,
          // Action.name = name dans la balise JSX (
          // exemple
          // --------------------------------------------------------------------------------------- EXTRAIT DU COMPOSANT ADMIN
          //  <input
          //     className="admin_input"
          //     type="number"
          //     name="gain" <========================== [action.name]
          //     placeholder="gain"
          //     value={admin.mise * admin.bet_odds} <======= action.value
          //     onChange={handleChange}
          //     readOnly
          //   />
          // ---------------------------------------------------------------------------------------
          // )
        },
      };
    }
    case SET_API_BETS: {
      // console.log('ici dans le setApiBets');
      return {
        ...state,

        apiMatches: action.apiBetData,
      };
    }
    case SET_MATCH_ID: {
      return {
        // On récupère l'entiereté du state
        ...state,
        // dans ce state on trouve admin
        admin: {
          // On récupère l'entiereté de admin
          ...state.admin,
          // dans celà On ne modifie que la donnée qui suit
          match_id: action.data.id,
        },
        // Même chose qu'avec le [action.name]: action.value du case SET_ADMIN_FIELD_VALUE
        match: action.data,
      };
    }
    case SET_SELECTED_MATCH_ODD: {
      return {
        ...state,
        admin: {
          ...state.admin,
          bet_odds: action.data,
        },
      };
    }
    case SET_SELECTED_BETING_TEAM: {
      return {
        ...state,
        admin: {
          ...state.admin,
          beting_team: action.data1,
        },
      };
    }
    case SEND_BET: {
      return {
        ...state,
      };
    }
    case SEND_BET_REDIRECT: {
      return {
        ...state,
        admin: {
          ...state.admin,
          redirectTo: true,
        }
      };
    }
    case SET_SELECTED_WINNER: {
      return {
        ...state,
        admin: {
          ...state.admin,
          winner: action.data2,
        },
      };
    }
    case SEND_WINNER: {
      return {
        ...state,
      };
    }
    case SEND_WINNER_REDIRECT: {
      return {
        ...state,
        admin: {
          ...state.admin,
          redirectTo2: true,
        }
      };
    }
    case REDIRECT_FALSE: {
      return {
        ...state,
        admin: {
          ...state.admin,
          redirectTo: false,
          redirectTo2: false
        }
      }
    }
    default:
      return state;
  }
};
