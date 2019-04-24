import endPoints, { authHeader }  from '../../containers/urls';


const paginationAction = () => {
  return dispatch => {
    return axios
      .get(endPoints.pagination, authHeader)
      .then(function(response) {
        const data = response.data.profile;
        dispatch({
          type: RETRIEVE_PROFILE_SUCCESS,
          payload: data,
        });
      })
      // .catch(function(error) {
      //   return;
      // });
  };
};

export default paginationAction;