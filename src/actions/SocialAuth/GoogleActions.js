import {GOOGLE_LOGIN,GOOGLE_FAILURE} from './ActionTypes';
import endPoints from '../../containers/urls';

 const googlelogin = auth_token => (dispatch) => {
      return fetch(endPoints.googlelogin,{
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
              type: GOOGLE_FAILURE,
              payload: data.errors,
            });
          } else {
            dispatch({
              
              type: GOOGLE_LOGIN,
              payload: data,
            });
          }
        },
      )
    };
    
    export default googlelogin;