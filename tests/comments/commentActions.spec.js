import thunk from 'redux-thunk';
import * as actions from '../../src/actions/commentAction';
import * as types from '../../src/actions/types';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import data from './moxios_mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Comments', () => {

  describe('actions', () => {
    beforeEach(() => {
      moxios.install();
    })

    afterEach(() => {
      moxios.uninstall();
    })

    it('should create an action to get comments', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data
        });
      });
      const expectedActions = [
        { type: types.GET_COMMENTS, payload: [{}, {}] },
      ];

      const store = mockStore({ comments: data.comments });
      return store.dispatch(actions.getComments()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it('should create an action to post a comment', () => {
        moxios.wait(() => {
          const request2 = moxios.requests.mostRecent();
          request2.respondWith({
            status: 201,
            response: data
          });
        });

        const expectedActions = [
          { type: types.POST_COMMENT, payload: true },
        ];

        const store = mockStore({ commentPosted: false });
        return store.dispatch(actions.getComments()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
      });

    // it('should not create an action to provide an email to send a link to for wrong email', () => {
    //   moxios.wait(() => {
    //     const request = moxios.requests.mostRecent();
    //     request.respondWith({
    //       status: 404,
    //       response: data,
    //     });
    //   });

    //   const store = mockStore({ email: '' });
    //   return store.dispatch(actions.provideResetEmail(wrong_email)).then(() => {
    //     expect(store.getActions()).toEqual([]);
    //   })
    // });

    // it('should create an action to reset password', () => {
    //   moxios.wait(() => {
    //     const requeste = moxios.requests.mostRecent();
    //     requeste.respondWith({
    //       status: 200,
    //       response: data,
    //     });
    //   });

    //   const expectedActions = [
    //     { type: types.RESET_PASSWORD },
    //   ];

    //   const store = mockStore({ });
    //   return store.dispatch(actions.resetPassword(password)).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //   })
    // });

    // it('should not create an action to reset password', () => {
    //   moxios.wait(() => {
    //     const request = moxios.requests.mostRecent();
    //     request.respondWith({
    //       status: 404,
    //       response: data,
    //     });
    //   });

    //   const store = mockStore({ });
    //   return store.dispatch(actions.resetPassword(password)).catch(() => {
    //     expect(store.getActions()).toEqual([]);
    //   })
    // });

  });

});

