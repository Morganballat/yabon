import {
  SET_FIELD_VALUE,
  SET_SIGNIN_FIELD_VALUE,
  LOGIN_SUCCESS,
  SIGNIN_SUCCESS,
  LOGOUT,
  LOGIN_ERROR,
  SET_NEWREVIEW_FIELD_VALUE,
  SEND_NEWREVIEW,
  GET_REVIEWS,
  SET_REVIEWS,
  SEND_NEWREVIEW_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_REVIEW,
  SET_ID_REVIEW_TO_DELETE,
  SEND_DELETE_REVIEW,
  REDIRECT_FALSE,
} from 'src/actions/user';

// state créé dédié aux propriétés des users
export const initialState = {
  idReviewToDelete: '',
  user: {
    id: '',
    firstname: '',
    mail: '',
    password: '',
    isLogged: false,
    admin: false,
  },
  newUser: {
    mail: '',
    password: '',
    lastname: '',
    firstname: '',
    redirect: false,
  },
  reviews: [
    {
      id: '',
      content: '',
      rate: '',
      firstName: '',
    },
  ],
  newReview: {
    user_id: '',
    rate: '',
    content: '',
    redirectToHome: false,
  },
};

// modification du state suivant les différentes fonctionnalités
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE: {
      // console.log('ici on est dans set field value');
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    }
    case SET_SIGNIN_FIELD_VALUE: {
      // console.log('ici on est dans set field value');
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [action.name]: action.value,
        },
      };
    }
    case SET_NEWREVIEW_FIELD_VALUE: {
      // console.log('ici on est dans set field value');
      return {
        ...state,
        newReview: {
          ...state.newReview,
          [action.name]: action.value,
        },
      };
    }
    case LOGIN_SUCCESS: {
      // console.log('ici on est dans login token', action.data.token);
      return {
        ...state,
        user: {
          id: action.data.id,
          mail: action.data.mail,
          password: action.data.password,
          isLogged: true,
          admin: action.data.admin,
          firstname: action.data.firstname,
        },
        newReview: {
          ...state.newReview,
          user_id: action.data.id,
        },
      };
    }
    case LOGOUT: {
      // console.log('ici on est dans logout');
      return {
        ...state,
        user: {
          ...state.user,
          firstname: '',
          id: '',
          isLogged: false,
          infos: {},
        },
      };
    }
    case DELETE_ACCOUNT: {
      return {
        ...state,
        user: {
          id: '',
          firstname: '',
          mail: '',
          password: '',
          isLogged: false,
          admin: false,
        },
        newReview: {
          user_id: '',
          rate: '',
          content: '',
        },
      };
    }
    case SIGNIN_SUCCESS: {
      // console.log('ici on est dans signin', action.data);
      return {
        ...state,
        newUser: {
          mail: action.data.mail,
          password: action.data.password,
          lastname: action.data.lastname,
          firstname: action.data.firstname,
          redirect: true,
        },
      };
    }
    case LOGIN_ERROR: {
      // console.log('ici on est dans dans login error');
      return {
        ...state,
        isLogged: false,
        loggedMessage: '',
        infos: {},
      };
    }
    case SEND_NEWREVIEW: {
      // console.log('icci on est dns SEND_NEW_REVIEW');
      return {
        ...state,
        newReview: {
          ...state.newReview,
          user_id: action.data.user_id,
          rate: action.data.rate,
          content: action.data.rewiew,
        },
      };
    }
    case SEND_NEWREVIEW_SUCCESS: {
      // console.log('ici on est dans signin', action.data);
      return {
        ...state,
        newReview: {
          ...state.newReview,
          redirectToHome: true,
        },
      };
    }
    // case GET_REVIEWS: {
    //   console.log("ici on est dans get reviews");
    //   return {
    //     ...state,
    //   };
    // }
    case SET_REVIEWS: {
      // console.log('ici on est dans set reviews');
      return {
        ...state,
        reviews: action.data,
        newReview: {
          ...state.newReview,
          redirectToHome: false,
        },
      };
    }
    case SET_ID_REVIEW_TO_DELETE: {
      return {
        ...state,
        idReviewToDelete: action.name,
      };
    }
    case SEND_DELETE_REVIEW: {
      return {
        ...state,
      };
    }
    case DELETE_REVIEW: {
      return {
        ...state,
        idReviewToDelete: '',
        reviews: [
          {
            id: '',
            content: '',
            rate: '',
            firstName: '',
          },
        ],
      };
    }
    case REDIRECT_FALSE: {
      return {
        ...state,
        newUser: {
          mail: '',
          password: '',
          lastname: '',
          firstname: '',
          redirect: false,
        }
      }
    }
    default:
      // console.log('voir le state user initial');
      // console.log('le mail du state initial', state.mail);
      return state;
  }
};
