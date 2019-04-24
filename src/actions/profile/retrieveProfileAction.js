import axios from 'axios';

import { RETRIEVE_PROFILE_SUCCESS} from '../types';
import endPoints, { authHeader }  from '../../containers/urls';


const retrieveProfileAction = () => {
  return dispatch => {
    return axios
      .get(endPoints.profile, authHeader)
      .then(function(response) {
        const data = response.data.profile;
        dispatch({
          type: RETRIEVE_PROFILE_SUCCESS,
          payload: data,
        });
      })
      // .catch(function(error) {
      //   return;
      // });
  };
};

export default retrieveProfileAction;
