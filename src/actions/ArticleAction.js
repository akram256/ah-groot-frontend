import axios from 'axios';
import endPoints from '../containers/urls';

export const getArticles = () => {
  return dispatch => {
    return axios.get(endPoints.articles)
    .then(function (response) {
      const data  = response.data.articles.results;
      dispatch(setArticles(data));
    })
    .catch(function (error) {
      return;
    });
  };
};

export const setArticles = (data) => {
  return {
    type: 'ARTICLES',
    articles: data
  };
}
