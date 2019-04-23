import { RETRIEVE_PROFILE_SUCCESS } from '../../actions/types';

const initialState = {
  profile: {},
  loading: false,
  };


const retrieveProfile = (state=initialState,action) => {
  switch(action.type){
    case RETRIEVE_PROFILE_SUCCESS:
        return {
            ...state,
            profile:action.payload,
            loading:true
        };
    case "RETRIEVE_PROFILE_FAIL":
        return {
            ...state,
            errors:action.payload
        };
    default:
        return state;
  }
}

export default retrieveProfile;
