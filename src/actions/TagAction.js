import axios from 'axios';
import endPoints, {authHeader} from '../containers/urls';


export const getTags = () => {
  return dispatch => {
    return axios.get(endPoints.tags, authHeader)
    .then(function (response) {
      const data  = response.data.tags.results;
      dispatch(setTags(data));
    })
    .catch(function (error) {
      return;
    });
  };
};

export const setTags = (data) => {
  return {
    type: 'TAGS',
    tags: data
  };
}
