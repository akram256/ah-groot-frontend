import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

export const successRegistration = data => ({
  type: 'SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'STARTED',
});

export const failedRegistration = err => ({
  type: 'FAILED',
  err,
});

export const userSignupRequest = userData => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      'https://ah-backend-groot-pr-57.herokuapp.com/api/users/',
      userData,
    );
    dispatch(successRegistration(response.data));
    M.toast({ html: response.data.user.Message, classes: 'green' });
    setTimeout(() => window.location.reload(), 3000);
  } catch (error) {
    dispatch(failedRegistration(error.response.data));
    M.toast({ html: Object.values(error.response.data.errors)[0], classes: 'red' });
  }
};
