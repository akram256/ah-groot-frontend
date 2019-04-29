import { DISLIKE_ARTICLE_SUCCESS, DISLIKE_ARTICLE_FAILED } from './types'

 const dislikearticle = slug =>(dispatch) => {
      return fetch(`https://ah-backend-groot.herokuapp.com/api/articles/${slug}/dislike/`, {
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
              type: DISLIKE_ARTICLE_FAILED,
              payload: data.errors,
            });
          } else {
            dispatch({
              type: DISLIKE_ARTICLE_SUCCESS,
              payload: data,
            });
            window.location.reload()
          }
        },
      )
    };

    export default dislikearticle;

