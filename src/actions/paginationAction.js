import axios from 'axios';

import endPoints, { authHeader }  from "../containers/urls";


export const fetchOriginal = () => {
  return dispatch =>{
    return axios
      .get("https://ah-backend-groot.herokuapp.com/api/articles/?limit=5", authHeader)
      .then(function(response) {
        const data = response.data.articles;
        localStorage.setItem('count', data.count);
        localStorage.setItem('next', data.next);
        localStorage.setItem('previous', data.previous);
        dispatch({
          type:"ORIGINAL",
          articles: data.results
        });
      })
  };
};

export const getNext = (url) => {
  return dispatch =>{
    return axios
      .get(url, authHeader)
      .then(function(response) {
        const data = response.data.articles;
        localStorage.setItem('count', data.count);
        localStorage.setItem('next', data.next);
        localStorage.setItem('previous', data.previous);
        dispatch({
          type:"GET_NEXT",
          articles: data.results
        });
      })
  };
};


