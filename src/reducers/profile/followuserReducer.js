import {
    FOLLOW_SUCESS,FOLLOWERLIST_SUCESS
    } from '../../actions/types';
    
     const initialState = {
      follow:false,
      follower:0 ,
      following:0,
      followers:[]
    };
    
     const followReducer = (state = initialState, action) => {
      switch (action.type) {
        case FOLLOW_SUCESS:
          return {
            ...state,
            follow:true,
            following: action.payload
          };
        
        case FOLLOWERLIST_SUCESS:
          return {
            ...state,
            follow:true,
            following: action.payload
            
          };
        default:
          return state;
      }
    };
    
     export default followReducer;