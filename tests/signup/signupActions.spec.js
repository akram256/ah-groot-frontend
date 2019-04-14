import * as actions from '../../src/actions/signup/signupActions';
import React from 'react';

describe('actions', () => {

  it('should create an action to register a user successfully', () => {
    const data = {
      user: {
        username: 'luntsa',
        email: 'luntsa@gmail.com',
        password: 'Luntsa0778',
      },
    };
    const expectedAction = {
      type: 'SUCCESSFUL',
      data,
    };
    expect(actions.successRegistration(data)).toEqual(expectedAction);
  });

  it('should create an action of FAILED to register a user successfully', () => {
    const err = {
      errors: {
        'input fields': 'All fields are required',
      },
    };
    const expectedAction = {
      type: 'FAILED',
      err,
    };
    expect(actions.failedRegistration(err)).toEqual(expectedAction);
  });

  it('should create an action of startAction to during user registration', () => {
    const expectedAction = {
      type: 'STARTED',
    };
    expect(actions.startAction()).toEqual(expectedAction);
  });

});
