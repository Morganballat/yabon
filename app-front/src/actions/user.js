// GESTION DE LA CONNEXION
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGOUT = 'LOGOUT';
export const SEND_LOGOUT = 'SEND_LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

// Gestion de l'inscription
export const SEND_SIGNIN = 'SEND_SIGNIN';
export const SET_SIGNIN_FIELD_VALUE = 'SET_SIGNIN_FIELD_VALUE';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_REDIRECT = 'SIGNIN_REDIRECT';

// GESTION DE LA SOUMISSION D'UN COMMENTAIRE
export const SET_NEWREVIEW_FIELD_VALUE = 'SET_NEWREVIEW_FIELD_VALUE,';
export const SEND_NEWREVIEW = 'SEND_NEWREVIEW';
export const GET_REVIEWS = 'GET_REVIEWS';
export const SET_REVIEWS = 'SET_REVIEWS';
export const SEND_NEWREVIEW_SUCCESS = 'SEND_NEWREVIEW_SUCCESS';

//SUPPRIMER UN USER
export const SEND_DELETE_ACCOUNT = 'SEND_DELETE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

//SUPPRIMER UN COMMENTAIRE
export const SET_ID_REVIEW_TO_DELETE = 'SET_ID_REVIEW_TO_DELETE';
export const SEND_DELETE_REVIEW = 'SEND_DELETE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const REDIRECT_FALSE = 'REDIRECT_FALSE';

export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  value,
  name,
});

/**
 * Action permettant de faire une requete à l'api afin de s'authentifier
 */
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});
export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});

export const sendLogout = () => ({
  type: SEND_LOGOUT,
});
// Gestion de l'inscription

export const setSigninFieldValue = (value, name) => ({
  type: SET_SIGNIN_FIELD_VALUE,
  value,
  name,
});

export const sendSignin = () => ({
  type: SEND_SIGNIN,
});

export const signinSuccess = (data) => ({
  type: SIGNIN_SUCCESS,
  data,
});

// GESTION DE LA SOUMISSION D'UN COMMENTAIRE
export const setNewReviewFieldValue = (value, name) => ({
  type: SET_NEWREVIEW_FIELD_VALUE,
  value,
  name,
});

export const sendNewReview = () => ({
  type: SEND_NEWREVIEW,
});

export const getReviews = () => ({
  type: GET_REVIEWS,
});

export const setReviews = (data) => ({
  type: SET_REVIEWS,
  data,
});

export const sendNewReviewSuccess = () => ({
  type: SEND_NEWREVIEW_SUCCESS,
});

export const signinRedirect = (data) => ({
  type: SIGNIN_REDIRECT,
  data,
});

// Gestion d'une suppression de compte user

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const sendDeleteAccount = () => ({
  type: SEND_DELETE_ACCOUNT,
});

// SUPPRESSION D'UN COMMENTAIRE 

export const sendDeleteReview = () => ({
  type: SEND_DELETE_REVIEW,
});

export const deleteReview = () => ({
  type: DELETE_REVIEW,
});

export const setIdReviewToDelete = (name) => ({
  type: SET_ID_REVIEW_TO_DELETE,
  name,
});

export const redirectFalse = () => ({
  type: REDIRECT_FALSE,
});
