const intialState = {
    error: null,
    successMsg: null,
    loading: false,
  };
  
  const ratingReducer = (state = intialState, action) => {
    switch (action.type) {
      case 'STARTED':
        return {
          ...state,
          loading: true,
          successMsg: null,
          error: null,
        };
      case 'SUCCESSFUL':
        return {
          ...state,
          loading: false,
          successMsg: action.data.user,
        };
      case 'FAILED':
        return {
          ...state,
          loading: false,
          error: action.err,
        };
  
      default:
        return state;
    }
  };
  
  export default ratingReducer;
  