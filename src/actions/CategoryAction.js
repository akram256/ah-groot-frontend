import axios from 'axios';
import endPoints from '../containers/urls';

export const getAllCategories = () => {
  return dispatch => {
    return axios.get(endPoints.getCategories)
    .then(function (response) {
      const categories  = response.data.categorys.results;
      dispatch(storeCategories(categories));
    })
    .catch(function (error) {
      return;
    });
  };
};

export const storeCategories = (data) => {
  return {
    type: 'ALLCATEGORIES',
    allCategories: data
  };
}
