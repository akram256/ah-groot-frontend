// import { FOLLOWING_SUCESS,FOLLOWING_FAILURE} from '../types'
 
//  const followinglist = user =>(dispatch) => {
//      console.log(user)

//       return fetch(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/following/`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization':`Bearer ${sessionStorage.getItem('token')}`
//         },
//       }).then(
//         res => res.json(),
//       ).then(
//         (data) => {
//           console.log(data);
          
//           if (data.errors) {
          
//             dispatch({
//               type: FOLLOWING_FAILURE,
//               payload: data.errors,
//             });
//           } else {
//             dispatch({
//               type: FOLLOWING_SUCESS,
//               payload: data.results,
//             });
//           }
        
     
//         }

      
//       )
//     };
    
//     export default followinglist;
   
