import { combineReducers } from 'redux';
import userReducer from './userReducer';
import betReducer from './betReducer';
import adminReducer from './adminReducer';

// combineReducers va nous permettre d'agréger les sous-reducers
// qu'on va utiliser dans notre application
// ça permet de séparer les responsabilités de chaque reducer

export default combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  user: userReducer,
  bet: betReducer,
  admin: adminReducer,
});
