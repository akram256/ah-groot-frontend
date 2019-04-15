import {
    FACEBOOK_FAILURE,
    FACEBOOK_LOGIN,
    GOOGLE_LOGIN,
    GOOGLE_FAILURE
  } from '../../actions/SocialAuth/ActionTypes';
  
   const initialState = {
    isAuthenticated: false,
    facebook_login: false,
    google_login:false,
    payload: '',
    token: '',
  };
  
   const socialauthReducer = (state = initialState, action) => {
    switch (action.type) {
      case FACEBOOK_LOGIN:
        return {
          ...state,
          isAuthenticated: true,
          facebook_login: true,
          token: action.payload.user.token,
          payload: action.payload,
        };
        case FACEBOOK_FAILURE:
        return {
          ...state,
          payload: action.payload,
        };
        case GOOGLE_LOGIN:
        return {
          ...state,
          isAuthenticated: true,
          google_login: true,
          token: action.token,
          payload: action.payload,
  
         };
         case GOOGLE_FAILURE:
         return {
           ...state,
           payload: action.payload,
         };
      default:
        return state;
    }
  };
  
export default socialauthReducer;