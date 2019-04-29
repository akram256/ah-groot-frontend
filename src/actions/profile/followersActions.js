import { FOLLOWERLIST_SUCESS,FOLLOWERLIST_FAILURE} from '../types'
 
 const followerlist = user =>(dispatch) => {
     console.log(user)

      return fetch(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/followers/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        },
      }).then(
        res => res.json(),
      ).then(
        (data) => {
          console.log(data);
          
          if (data.errors) {
          
            dispatch({
              type: FOLLOWERLIST_FAILURE,
              payload: data.errors,
            });
          } else {
            dispatch({
              type: FOLLOWERLIST_SUCESS,
              payload: data.results,
            });
          }
        
     
        }

      
      )
    };
    
    export default followerlist;
   
