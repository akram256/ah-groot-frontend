import {FACEBOOK_LOGIN} from './ActionTypes';
import endPoints from '../../containers/urls';

const facebooklogin = auth_token => (dispatch) => {
     return fetch(endPoints.facebooklogin, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({user:auth_token}),
     }).then(
       res => res.json(),
     ).then(
       (data) => {
         if (data.errors) {
           dispatch({
             type: FACEBOOK_FAILURE,
             payload: data.errors,
           });
         } else {
           dispatch({
             type: FACEBOOK_LOGIN,
             payload: data,
           });
         }
       },
     );
   };
   
   export default facebooklogin;