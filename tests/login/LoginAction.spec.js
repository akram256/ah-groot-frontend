import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from '../landing_page/maxios_mock';
import loginAction from '../../src/actions/loginAction';

import { LOGIN_FAIL, LOGIN_SUCCESS } from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('log in process', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('logs in successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.login.success,
      });
    });
    const expectedActions = [
      {
        type: LOGIN_SUCCESS,
        "payload": 
          
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJqZXJyeUBnbWFpbC5jb20iLCJleHAiOjE1NTY3Nzc4NjN9.ZuV7IjxVVfVU8PoQ8elR4FS-KWdXTyrt6v6jtKAOxr4'
          
      },
    ];
    const valiData = {
      user: {
        email: 'jerry@gmail.com',
        password: 'Roselyn123',
      },
    };
    return store.dispatch(loginAction(valiData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('retrieves a error message', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 404,
        response: data.login.failure,
      });
    });
    const expectedActions = [
      { type: LOGIN_FAIL, payload: data.login.failure.errors.error },
    ];
    const invalidData = {
      user: {
        email: '',
        password: '',
      },
    };
    return store.dispatch(loginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
