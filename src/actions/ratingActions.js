import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

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

export const userRating= (ratingData, slug)  => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      `https://ah-backend-groot.herokuapp.com/api/article/${slug}/rate`,
      ratingData,
    );
    dispatch(successRating(response.data));
    // M.toast({ html: response.data.user.Message, classes: 'green' });
    setTimeout(() => window.location.reload(), 3000);
  } catch (error) {
      console.log(error.response.data);
    dispatch(failedRating(error.response.data));
    // M.toast({ html: Object.values(error.response.data.errors)[0], classes: 'red' });
  }
};
