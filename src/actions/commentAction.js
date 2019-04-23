import axios from 'axios';
import {
  GET_COMMENTS,
  POST_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  LIKE_COMMENT
} from './types';
import M from 'materialize-css/dist/js/materialize.js';
import endPoints, { authHeader } from '../containers/urls';

export const getComments = (slug) => dispatch => {
  return axios
    .get(`${endPoints.postArticle}${slug}/comments/`, authHeader)
    .then(function(response) {
      dispatch({
        type: GET_COMMENTS,
        payload: response.data.Comments,
      });
    })
    .catch(function(error) {
    });
};

export const postComment = (commentText, slug) => dispatch => {
  const requestBody = {
    comment: {
      body: commentText,
    },
  };
  return axios
    .post(`${endPoints.postArticle}${slug}/comments/`, requestBody, authHeader)
    .then(function(response) {
      dispatch({
        type: POST_COMMENT,
        payload: true,
      });
      M.toast({ html: 'Comment created', classes: 'green' });
      document.location.reload(true);
    })
    .catch(function(error) {
      M.toast({ html: 'Could not create comment', classes: 'red' });
    });
};

export const updateComment = (commentText, commentId, slug) => dispatch => {
  const requestBody = {
    comment: {
      body: commentText,
    },
  };
  return axios
    .put(`${endPoints.postArticle}${slug}/comments/${commentId}/`, requestBody, authHeader)
    .then(function(response) {
      dispatch({
        type: UPDATE_COMMENT,
        payload: true,
      });
      M.toast({ html: 'Comment updated', classes: 'green' });
      document.location.reload(true);
    })
    .catch(function(error) {
      M.toast({ html: 'Could not update this comment', classes: 'red' });
    });
};

export const deleteComment = (commentId, slug) => dispatch => {
  return axios
    .delete(`${endPoints.postArticle}${slug}/comments/${commentId}/`, authHeader)
    .then(function(response) {
      dispatch({
        type: DELETE_COMMENT,
        payload: true,
      });
      M.toast({ html: 'Comment deleted', classes: 'green' });
      document.location.reload(true);
    })
    .catch(function(error) {
      M.toast({ html: 'Could not delete this comment', classes: 'red' });
    });
};

export const likeComment = (commentId, slug) => dispatch => {
  return axios
    .post(`${endPoints.postArticle}${slug}/comments/${commentId}/like/`, {}, authHeader)
    .then(function(response) {
      dispatch({
        type: LIKE_COMMENT,
        payload: true,
      });
      M.toast({ html: 'Liked', classes: 'green' });
      document.location.reload(true);
    })
    .catch(function(error) {
      M.toast({ html: 'Error liking this comment', classes: 'red' });
    });
};
