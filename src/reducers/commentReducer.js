import {
  GET_COMMENTS,
  POST_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  LIKE_COMMENT
} from '../actions/types';

const initialState = {
  commentPosted: false,
  commentUpdated: false,
  commentDeleted: false,
  commentLiked: false,
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        commentPosted: action.payload,
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        commentUpdated: action.payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        commentDeleted: action.payload,
      };
    case LIKE_COMMENT:
      return {
        ...state,
        commentLiked: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
