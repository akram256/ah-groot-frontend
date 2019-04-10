import axios from 'axios';
import endPoints from '../containers/urls';

export const storeCategories = () => {
  return dispatch => {
    return axios.get(endPoints.getCategories)
    .then(function (response) {
      const categories  = response.data.categorys.results;
      dispatch(setCategories(categories));
    })
    .catch(function (error) {
      return;
    });
  };
};

export const setCategories = (data) => {
  return {
    type: 'CATEGORIES',
    categories: data
  };
}
