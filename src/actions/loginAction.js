import axios from 'axios';

import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import endPoints from '../containers/urls';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css/dist/js/materialize.js';


const loginAction = loginData => {
  const body = {
    user: loginData,
  };
  return dispatch => {
    return axios
      .post(endPoints.loginUser, body)
      .then(function(response) {
        M.toast({html:`Successfully logged in as ${response.data.user.username}`, classes:'green'
      });
      localStorage.setItem("token",response.data.user.token)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data.user.token,
        });
      })
      .catch(function(err) {
        const error = Object.values(err.response.data.errors)[0];
        M.toast({html:error, classes:'red'})
        dispatch({
          type: LOGIN_FAIL,
          payload: error,
        });
      });
  };
};

export default loginAction;
