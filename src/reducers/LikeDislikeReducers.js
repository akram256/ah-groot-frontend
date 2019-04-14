import {
  LIKE_ARTICLE_SUCCESS,DISLIKE_ARTICLE_SUCCESS
  } from '../actions/types';
  
   const initialState = {
    likes:0 ,
    dislikes:0
  };
  
   const dislikeReducer = (state = initialState, action) => {
    switch (action.type) {
      case LIKE_ARTICLE_SUCCESS:
        return {
          ...state,
          likes: action.payload
          
        };
        case DISLIKE_ARTICLE_SUCCESS:
        return {
          ...state,
          dislikes:action.payload
        };
      default:
        return state;
    }
  };
  
   export default dislikeReducer;