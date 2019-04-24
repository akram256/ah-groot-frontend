
import axios from 'axios';

import { UPDATE_PROFILE_SUCCESS} from '../types';
import endPoints, { authHeader }  from '../../containers/urls';


const updateProfileAction = (data) => {
    return dispatch => {
        return axios
        .put(endPoints.profile,data, authHeader)
        .then(function(response){
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: response.data
            });
        })
        // .catch(function(error) {
        //     return;
        //   });
    }
}

export default updateProfileAction;