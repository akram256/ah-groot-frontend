import thunk from 'redux-thunk';
import * as actions from '../../src/actions/resetPasswordActions';
import * as types from '../../src/actions/types';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import data from './moxios_mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Reset password', () => {

  describe('actions', () => {
    const email = 'lydiansanyu@gmail.com';
    const wrong_email = 'lnsanyu@yahoo.com';
    const password = 'Lydia@2019';

    beforeEach(() => {
      moxios.install();
    })

    afterEach(() => {
      moxios.uninstall();
    })

    it('should create an action to provide an email to send a link to', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data,
        });
      });
      const expectedActions = [
        { type: types.PROVIDE_RESET_EMAIL, payload: email },
      ];

      const store = mockStore({ email: '' });
      return store.dispatch(actions.provideResetEmail(email)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it('should not create an action to provide an email to send a link to for wrong email', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: data,
        });
      });

      const store = mockStore({ email: '' });
      return store.dispatch(actions.provideResetEmail(wrong_email)).then(() => {
        expect(store.getActions()).toEqual([]);
      })
    });

    it('should create an action to reset password', () => {
      moxios.wait(() => {
        const requeste = moxios.requests.mostRecent();
        requeste.respondWith({
          status: 200,
          response: data,
        });
      });

      const expectedActions = [
        { type: types.RESET_PASSWORD },
      ];

      const store = mockStore({ });
      return store.dispatch(actions.resetPassword(password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it('should not create an action to reset password', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: data,
        });
      });

      const store = mockStore({ });
      return store.dispatch(actions.resetPassword(password)).catch(() => {
        expect(store.getActions()).toEqual([]);
      })
    });

    it('should not create an action to reset password for non-matching passwords', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: data,
        });
      });

      const store = mockStore({ });
      return store.dispatch(actions.resetPassword(password)).catch(() => {
        expect(store.getActions()).toEqual([]);
      })
    });

    it('should not create an action to reset password for invalid passwords', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: {
            "user": {
                "Message": "Please check your email a link has been sent to you",
                "detail": "Not found",
            }
          }
        ,
        });
      });

      const store = mockStore({ });
      return store.dispatch(actions.resetPassword(password)).catch(() => {
        expect(store.getActions()).toEqual([]);
      })
    });


  });

});

