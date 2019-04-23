
import axios from 'axios';

import { UPDATE_PROFILE_SUCCESS} from '../types';
import endPoints, { authHeader }  from '../../containers/urls';


const updateProfileAction = (data) => {
    console.log(data);
    return dispatch => {
        return axios
        .put(endPoints.profile,data, authHeader)
        .then(function(response){
            console.log(endPoints.profile);
            
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: response.data
            });
        })
        .catch(function(error){
            dispatch({
                type: "UPDATE_PROFILE_FAIL",
                payload: error 
            });
        })
    }
}

export default updateProfileAction;