import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';
import { authHeader } from '../containers/urls'

export const successRating= data => ({
  type: 'SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'STARTED',
});

export const failedRating = err => ({
  type: 'FAILED',
  err,
});

export const userRating = (ratingData, slug) => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      `https://ah-backend-groot.herokuapp.com/api/article/${slug}/rate/`,
      ratingData, authHeader,
    );
    dispatch(successRating(response.data));
    M.toast({ html: 'Thank you for you rating', classes: 'green' });
  } catch (error) {
    dispatch(failedRating(error.response.data));
  }
};
