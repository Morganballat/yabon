import axios from 'axios';
import {
  SEND_LOGIN,
  SEND_LOGOUT,
  logout,
  loginSuccess,
  loginError,
  signinSuccess,
  SEND_SIGNIN,
  GET_REVIEWS,
  setReviews,
  SEND_NEWREVIEW,
  sendNewReviews,
  sendNewReviewSuccess,
  SEND_DELETE_ACCOUNT,
  deleteAccount,
  SEND_DELETE_REVIEW,
  deleteReview,
} from 'src/actions/user';

const userMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_LOGIN: {
      const {
        user: { mail, password },
      } = store.getState().user;

      // console.log('ici le middleware user', { mail, password });
      // requete axios concernant le login
      axios
        .post('https://yabon-api-back.herokuapp.com/v1/user/login/', {
          mail,
          password,
        })
        .then((response) => {
          // gestion du redirect si reponse 200 du data.status
          // if (response.data.status === 200) {
          // console.log('requete axios de connexion', response.data);
          // ici on va stocker le token en localStorage
          // headers: {
          //   Authorization: `bearer ${state.use.info.token}`
          // }
          // ici on va stocker les infos que nous retourne la requête dans le state
          // => modification de state => dispatch d'action
          localStorage.setItem('token', response.data.token);
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          store.dispatch(loginSuccess(response.data));
          // }
          // else {
          //   console.log('La connexion n\'a pas aboutie');
          // }
        })
        .catch((error) => {
          alert("Cet utilisateur n'existe pas, adresse mail ou mot de passe incorect");
        });
      break;
    }
    case SEND_LOGOUT: {
      axios.get('https://yabon-api-back.herokuapp.com/v1/user/logout/').then((response) => {
        axios.defaults.headers.common.Authorization = '';
        localStorage.clear();
        store.dispatch(logout());
      })
        .catch((error) => {
          console.log('erreur axios connexion', error);
          const actionToDispatch = loginError();
          store.dispatch(actionToDispatch);
        });
      break;
    }
    case SEND_SIGNIN: {
      const {
        newUser: { mail, password, lastname, firstname, confirmPassword },
      } = store.getState().user;
      console.log('ici le middleware user, case SEND_SIGNIN');
      // logique pasword identiques
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/gm;
      const validPassword = passwordRegex.test(password);
      // console.log('ici le password', validPassword);
      if (validPassword && password === confirmPassword) {
        // requete axios concernant le login
        axios
          .post('https://yabon-api-back.herokuapp.com/v1/user/register', {
            mail,
            password,
            lastname,
            firstname,
          })
          .then((response) => {
            // console.log("requete axios inscription", response.data);
            // ici on va stocker les infos que nous retourne la requête dans le state
            // => modification de state => dispatch d'action

            store.dispatch(signinSuccess(response.data));
            console.log('la regex fonctionne');
          })
          .catch((error) => {
            console.log('erreur axios inscription', error);
          });
      } else if (!validPassword) {
        alert('Votre mot de passe doit comporter au minimum une majuscule, une minuscule, un chiffre et un caractère spécial');
      } else {
        alert('Vos mots de passes sont différents');
      }
      break;
    }
    case GET_REVIEWS: {
      axios
        .get('https://yabon-api-back.herokuapp.com/v1/comments')
        .then((response) => {
          // console.log(
          //   "ici je get reviews avant de les redistribuer aux composants",
          //   response.data
          // );
          store.dispatch(setReviews(response.data));
          // console.log("requete axios getreviews", response.data);
        })
        .catch((error) => {
          console.log('erreur get reviews', error);
        });
      break;
    }
    case SEND_NEWREVIEW: {
      const {
        newReview: { content, rate, user_id },
      } = store.getState().user;
      axios
        .post('https://yabon-api-back.herokuapp.com/v1/comments', {
          content,
          rate,
          user_id,
        })
        .then((response) => {
          // console.log("post sendNewreview", response.data);
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          store.dispatch(sendNewReviewSuccess(response.data));
        })
        .catch((error) => {
          console.log('erreur send reviews', error);
        });
      break;
    }
    case SEND_DELETE_ACCOUNT: {
      const {
        user: { id },
      } = store.getState().user;
      axios.delete(`https://yabon-api-back.herokuapp.com/v1/user/${id}`)
        .then((response) => {
          store.dispatch(deleteAccount());
          alert('Vous avez bien supprimé votre compte');
        })
        .catch((error) => {
          console.log('delete user error', error);
        });
      break;
    }
    case SEND_DELETE_REVIEW: {
      const { idReviewToDelete } = store.getState().user;

      axios.delete(`https://yabon-api-back.herokuapp.com/v1/comments/${idReviewToDelete}`)
        .then((response) => {
          store.dispatch(deleteReview());
          console.log('commentaire bel et bien supprimé');
        })
        .catch((error) => {
          console.log('delete review error', error);
        });
      break;
    }
    default:
      next(action);
  }
};
export default userMiddlewares;
