export const GET_BETS = 'GET_BETS';
export const SET_BETS = 'SET_BETS';
export const SET_ODDS_BET = 'SET_ODDS_BET';
export const GET_ODDS_BET = 'GET_ODDS_BET';
export const GET_RATIO = 'GET_RATIO';
export const SET_RATIO = 'SET_RATIO';
export const GET_BEST_BET = 'GET_BEST_BET';
export const SET_BEST_BET = 'SET_BEST_GET';

export const getBets = () => ({
  type: GET_BETS,
});

export const setBets = (betData) => ({
  type: SET_BETS,
  betData,
});

export const getOddsBet = () => ({
  type: GET_ODDS_BET,
});

export const setOddsBet = (data) => ({
  type: SET_ODDS_BET,
  data,
});

export const getRatio = () => ({
  type: GET_RATIO,
});

export const setRatio = (data) => ({
  type: SET_RATIO,
  data,
});

export const getBestBet = () => ({
  type: GET_BEST_BET,
});

export const setBestBet = (data) => ({
  type: SET_BEST_BET,
  data,
});
