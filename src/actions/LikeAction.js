import {LIKE_ARTICLE_SUCCESS,LIKE_ARTICLE_FAILED} from './types'

 const likearticle = slug =>(dispatch) => {
      return fetch(`https://ah-backend-groot.herokuapp.com/api/articles/${slug}/like/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
      }).then(
        res => res.json(),
      ).then(
        (data) => {
          if (data.errors) {
            dispatch({
              type: LIKE_ARTICLE_FAILED,
              payload: data.errors,
            });
          } else {
            dispatch({
              type: LIKE_ARTICLE_SUCCESS,
              payload: data,
            });

            window.location.reload()
          }
        },
      )
    };
    
    export default likearticle;