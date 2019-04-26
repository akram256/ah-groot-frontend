import { FOLLOW_SUCESS,FOLLOW_FAILURE} from '../types'
 
 const followuser = user =>(dispatch) => {
     console.log (user)
      return fetch(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/follow/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        },
      }).then(
        res => res.json(),
      ).then(
        (data) => {
          if (data.errors) {
            dispatch({
              type: FOLLOW_FAILURE,
              payload: data.errors,
            });
          } else {
            dispatch({
              type: FOLLOW_SUCESS,
              payload: data,
            });
          }
          window.location.reload()
        },
      )
    };
    
    export default followuser;
   
