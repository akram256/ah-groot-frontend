import axios from 'axios';
import {
  GET_COMMENTS,
  POST_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
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
      M.toast({ html: 'No comments found', classes: 'red' });
    });
};

export const postComment = (comment, slug) => dispatch => {
  const requestBody = {
    comment: {
      body: comment,
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
    })
    .catch(function(error) {
      M.toast({ html: 'Comment not created', classes: 'red' });
    });
};

export const updateComment = (comment, slug) => dispatch => {
  const requestBody = {
    comment: {
      body: comment,
    },
  };
  return axios
    .put(`${endPoints.singleArticle}${slug}/comments/${comment}/`, requestBody, authHeader)
    .then(function(response) {
      dispatch({
        type: UPDATE_COMMENT,
        payload: true,
      });
      M.toast({ html: 'Comment updated', classes: 'green' });
    })
    .catch(function(error) {
      M.toast({ html: 'Could not update this comment', classes: 'red' });
    });
};

export const deleteComment = (comment, slug) => dispatch => {
  return axios
    .delete(`${endPoints.singleArticle}${slug}/comments/${comment}/`, authHeader)
    .then(function(response) {
      dispatch({
        type: DELETE_COMMENT,
        payload: true,
      });
      M.toast({ html: 'Comment deleted', classes: 'green' });
    })
    .catch(function(error) {
      M.toast({ html: 'Could not delete this comment', classes: 'red' });
    });
};
