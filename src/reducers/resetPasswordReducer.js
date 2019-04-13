import { PROVIDE_RESET_EMAIL } from '../actions/types';

const initialState = {};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROVIDE_RESET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
