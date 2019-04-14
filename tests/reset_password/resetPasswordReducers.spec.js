import resetPasswordReducer from '../../src/reducers/resetPasswordReducer';
import * as types from '../../src/actions/types';

describe('reducers', () => {
  it('should return initial state', () => {
    let state = resetPasswordReducer(undefined, {});
    expect(state).toEqual({});
  });

  it('should update state with reset password email', () => {
    expect(
      resetPasswordReducer([], {
        type: types.PROVIDE_RESET_EMAIL,
        payload: 'lnsanyu@yahoo.com',
      })
    ).toEqual({
      email: 'lnsanyu@yahoo.com',
    });
  });
});
