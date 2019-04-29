import axios from 'axios';
import endPoints, { authHeader } from '../../containers/urls';

export const bookmarkArticle = (slug) => {
    return dispatch => {
      return axios
        .post(`${endPoints.postArticle}${slug}/bookmark/`, {}, authHeader)
        .then(function(response) {
            dispatch({
              type: 'BOOKMARK',
              payload: "bookmarked",
            });
        })
        .catch(function(error) {
          return;
        });
    };
  };

export const unBookmarkArticle = slug => {
  return dispatch => {
    return axios
      .delete(`${endPoints.postArticle}${slug}/unbookmark/`, {...authHeader, timeout: 5000,} )
      .then(function(response) {
            dispatch({
                type: 'UN_BOOKMARK',
                payload: "unbookmarked",
              });
      })
      .catch(function(error) {
        return;
      });
  };
};

export const getAllbookmarkedArticles = () => {
    return dispatch => {
      return axios
        .get(`${endPoints.postArticle}me/bookmarks/`, authHeader )
        .then(function(response) {
          const data = response.data.bookmarks;
          dispatch({
            type: 'BOOKMARKS',
            payload: data,
          });
        })
        .catch(function(error) {
          return;
        });
    };
  };
