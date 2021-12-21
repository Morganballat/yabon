import {
  GET_BETS,
  SET_BETS,
  SET_ODDS_BET,
  GET_ODDS_BET,
  GET_BEST_BET,
  SET_BEST_BET,
} from "src/actions/bet";

export const initialState = {
  ratio: "80",
  bestWin: null,
  bets: [
    {
      type: "",
      cote: "",
      mise: "",
      beting_team: "",
      comment: "",
      gain: "",
    },
  ],
  bet: [
    {
      id: null,
      type: "",
      bet_odds: null,
      mise: null,
      trust: null,
      host_team: "",
      visitor: "",
      beting_team: "",
      comment: "",
    },
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BETS: {
      // console.log("ici on est dans getbet");
      return {
        ...state,
      };
    }
    case SET_BETS: {
      // console.log("ici on est dans setbet");
      return {
        ...state,
        bets: action.betData,
      };
    }
    case GET_ODDS_BET: {
      return {
        ...state,
      };
    }
    case SET_ODDS_BET: {
      return {
        ...state,
        bet: action.data,
      };
    }
    case GET_BEST_BET: {
      return {
        ...state,
      };
    }
    case SET_BEST_BET: {
      return {
        ...state,
        bestWin: action.data[0].gain,
      };
    }
    default:
      return state;
  }
};
