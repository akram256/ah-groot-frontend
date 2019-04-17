import { UPDATE_PROFILE_SUCCESS } from '../../actions/types';

const initialState = {
  profile: sessionStorage.getItem('profile'),
  loading: false
  };


const updateProfile = (state=initialState,action) => {
  switch(action.type){
    case UPDATE_PROFILE_SUCCESS:
        return {
            ...state,
            profile:action.payload,
            loading:true
        };
    // case UPDATE_PROFILE_FAIL:
    //     return {
    //         ...state,
    //         errors:action.payload
    //     };
    default:
        return state;
  }
}

export default updateProfile;