// Pensez séparation
// Ici on est dans le adminAction. nous auront alors les actions concernants notre Admin

// String recommandés. Le block du dessous n'est pas nécessaire mais permet de nous prémunir contre des fautes de frappes par exemple. Nous aurions pu écrire directement en sting dans les actions
export const GET_API_BETS = "GET_API_BETS";
export const SET_API_BETS = "SET_API_BETS";
export const SET_ADMIN_FIELD_VALUE = "SET_ADMIN_FIELD_VALUE";
export const SET_MATCH_ID = "SET_MATCH_ID";
export const SET_SELECTED_MATCH_ODD = "SET_SELECTED_MATCH_ODD";
export const SET_SELECTED_BETING_TEAM = "SET_SELECTED_BETING_TEAM";
export const SEND_BET = "SEND_BET";
export const SEND_BET_REDIRECT = "SEND_BET_REDIRECT";
export const SET_SELECTED_WINNER = "SET_SELECTED_WINNER";
export const SEND_WINNER = "SEND_SELECTED_WINNER";
export const SEND_WINNER_REDIRECT = "SEND_WINNER_REDIRECT";

// Les actions sont des objets décrivant ce qui se passe dans l'app. la seule façon de modifier les datas dans le state est de les utiliser. Utile qu'ils soient explicites
export const getApiBets = () => ({
  // Par convention les actions ont un type qui aide les réducers à les identifer.
  type: GET_API_BETS,
});

export const setApiBets = (apiBetData) => ({
  type: SET_API_BETS,
  apiBetData,
});

export const setAdminFieldValue = (value, name) => ({
  type: SET_ADMIN_FIELD_VALUE,
  value,
  name,
});

export const setMatchId = (data) => ({
  type: SET_MATCH_ID,
  data,
});

export const setSelectedMatchOdd = (data) => ({
  type: SET_SELECTED_MATCH_ODD,
  data,
});

export const setSelectedBetingTeam = (data1) => ({
  type: SET_SELECTED_BETING_TEAM,
  data1,
});

export const sendBet = () => ({
  type: SEND_BET,
});

export const sendBetRedirect = () => ({
  type: SEND_BET_REDIRECT,
});

export const setSelectedWinner = (data2) => ({
  type: SET_SELECTED_WINNER,
  data2,
});

export const sendWinner = () => ({
  type: SEND_WINNER,
});

export const sendWinnerRedirect = () => ({
  type: SEND_WINNER_REDIRECT,
});

// Ces exports sont importés dans les containers qui en ont besoin
export const redirectFalse = () => ({
  type: REDIRECT_FALSE,
});
