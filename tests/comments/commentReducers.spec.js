import commentReducer from '../../src/reducers/commentReducer';
import * as types from '../../src/actions/types';

describe('comment reducers', () => {
  it('should return initial state', () => {
    let state = commentReducer(undefined, {});
    expect(state).toEqual({
      commentPosted: false,
      commentUpdated: false,
      commentDeleted: false,
      comments: [],
    });
  });

  it('should get comments', () => {
    expect(
      commentReducer([], {
        type: types.GET_COMMENTS,
        payload: [{}, {}, {}],
      })
    ).toEqual({
      comments: [{}, {}, {}],
    });
  });

  it('should post a comment', () => {
    expect(
      commentReducer([], {
        type: types.POST_COMMENT,
        payload: true,
      })
    ).toEqual({
      commentPosted: true,
    });
  });

  it('should update a comment', () => {
    expect(
      commentReducer([], {
        type: types.UPDATE_COMMENT,
        payload: true,
      })
    ).toEqual({
      commentUpdated: true,
    });
  });

  it('should delete a comment', () => {
    expect(
      commentReducer([], {
        type: types.DELETE_COMMENT,
        payload: true,
      })
    ).toEqual({
      commentDeleted: true,
    });
  });

});
