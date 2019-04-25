import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';
import { authHeader } from '../../containers/urls'

export const successReporting= data => ({
  type: 'SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'STARTED',
});

export const failedReporting = err => ({
  type: 'FAILED',
  err,
});

export const articleReporting = (reportData, slug) => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      `https://ah-backend-groot.herokuapp.com/api/article/${slug}/report/`,
      reportData, authHeader,
    );
    dispatch(successReporting(response.data));
    M.toast({ html: 'Thank you for reporting this article, our team will review this case', classes: 'green' });
  } catch (error) {
    dispatch(failedReporting(error.response.data));
  }
};
