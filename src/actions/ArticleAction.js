import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';
import endPoints, { authHeader } from '../containers/urls';

export const getArticles = () => {
  return dispatch => {
    return axios
      .get(endPoints.articles)
      .then(function(response) {
        const data = response.data.articles.results;
        dispatch(setArticles(data));
      })
      .catch(function(error) {
        return;
      });
  };
};

export const setArticles = data => {
  return {
    type: 'ARTICLES',
    articles: data,
  };
};

export const postArticle = data => {
  return dispatch => {
    return axios
      .post(endPoints.postArticle, { article: data }, authHeader )
      .then(function(response) {
        const data = response.data.article;
        if (response.status === 201) {
          M.toast({ html: 'SAVED', classes: 'green' });
        }
        dispatch({
          type: 'POST_ARTICLE',
          article: data,
        });
      })
      .catch(function(error) {
        return;
      });
  };
};

export const getUserArticle = () => {
  const email = JSON.parse(atob(sessionStorage.token.split('.')[1]))['email'];
  return dispatch => {
    return axios
      .get(`${endPoints.postArticle}?email=${email}`)
      .then(function(response) {
        const data = response.data.articles.results;
        dispatch({
          type: 'USER_ARTICLES',
          articles: data,
        });
      })
      .catch(function(error) {
        return;
      });
  };
};

export const getUserPublishedArticles = () => {
  const email = JSON.parse(atob(sessionStorage.token.split('.')[1]))['email'];
  return dispatch => {
    return axios
      .get(`${endPoints.postArticle}?email=${email}&is_published=True`)
      .then(function(response) {
        const data = response.data.articles.results;
        dispatch({
          type: 'PUBLISHED_ARTICLES',
          articles: data,
        });
      })
      .catch(function(error) {
        return;
      });
  };
};



export const getAllArticles = () => {
  return dispatch => {
    return axios
      .get(`${endPoints.postArticle}?is_published=True`)
      .then(function(response) {
        const data = response.data.articles.results;
        dispatch({
          type: 'ALL_ARTICLES',
          articles: data,
        });
      })
      .catch(function(error) {
        return;
      });
  };
};


export const getSingleleUserArticle = (slug) => {
  return dispatch => {
    return axios
      .get(`${endPoints.singleArticle}${slug}/`, authHeader)
      .then(function(response) {
        const data = response.data;
        dispatch({
          type: 'EDIT_ARTICLE',
          article: data,
        });
      })
      .catch(function(error) {
        return;
      });
  };
};

export const updateUserArticle = (slug, data) => {
  return dispatch => {
    return axios
      .put(`${endPoints.singleArticle}${slug}/`, { article: data }, authHeader)
      .then(function(response) {
        const data = response.data.article;
        if (response.status === 200) {
          M.toast({ html: 'SAVED', classes: 'green' });
        }
        dispatch({
          type: 'POST_ARTICLE',
          article: data,
        });
      })
      .catch(function(error) {
        return;
      });
  };
};
