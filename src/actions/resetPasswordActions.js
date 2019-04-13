import axios from 'axios';
import { PROVIDE_RESET_EMAIL, RESET_PASSWORD } from './types';
import 'react-toastify/dist/ReactToastify.min.css';
import M from 'materialize-css/dist/js/materialize.js';
import endPoints from '../containers/urls';

export const provideResetEmail = email => dispatch => {
  const requestBody = { user: { email: email } };

  return axios
    .post(endPoints.provideResetEmail, requestBody)
    .then(function(response) {
      dispatch({
        type: PROVIDE_RESET_EMAIL,
        payload: email,
      });
      M.toast({html: response.data.user.Message, classes:'green'});
    })
    .catch(function(error) {
      M.toast({html: 'User email not registered', classes:'red'});
    });
};

export const resetPassword = (password, token) => dispatch => {
  const requestBody = {
    user: { password: password, confirm_password: password },
  };
  const auth = { headers: { Authorization: 'Bearer ' + token } };

  return axios
    .put(endPoints.resetPassword, requestBody, auth)
    .then(function(response) {
      dispatch({
        type: RESET_PASSWORD,
      });
      M.toast({html: response.data.user.Message, classes:'green'});
    })
    .catch(function(error) {
      M.toast({html: 'Invalid password', classes:'red'})
      return;
    });
};
