import { UNFOLLOW_SUCESS,UNFOLLOW_FAILURE} from '../types'
 
 const unfollowuser = user =>(dispatch) => {
     console.log (user)
      return fetch(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/follow/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        },
      }).then(
        res => res.json()
      ).then(
        (data) => {
          if (data.errors) {
            dispatch({
              type: UNFOLLOW_FAILURE,
              payload: data.errors,
            });
          } else {
            dispatch({
              type: UNFOLLOW_SUCESS,
              payload: data,
            });
          }
       
        },
      )
   
    };
    
    export default unfollowuser;
   
