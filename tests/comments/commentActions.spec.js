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
        { type: types.GET_COMMENTS },
      ];

      const store = mockStore({ comments: []});
      return store.dispatch(actions.getComments()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it('should not create an action to get comments', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: data
        });
      });
      const store = mockStore({ comments: []});
      return store.dispatch(actions.getComments()).then(() => {
        expect(store.getActions()).toEqual([]);
      })
    });

    it('should create an action to post a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 201,
            response: data
          });
        });

        const expectedActions = [
          { type: types.POST_COMMENT, payload: true },
        ];

        const store = mockStore({ commentPosted: false });
        return store.dispatch(actions.postComment()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
      });

      it('should not create an action to post a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 404,
            response: data
          });
        });

        const store = mockStore({ commentPosted: false });
        return store.dispatch(actions.postComment()).then(() => {
          expect(store.getActions()).toEqual([]);
        })
      });

      it('should create an action to update a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: data
          });
        });

        const expectedActions = [
          { type: types.UPDATE_COMMENT, payload: true },
        ];

        const store = mockStore({ commentUpdated: false });
        return store.dispatch(actions.updateComment()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
      });

      it('should not create an action to update a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 404,
            response: data
          });
        });

        const store = mockStore({ commentUpdated: false });
        return store.dispatch(actions.updateComment()).then(() => {
          expect(store.getActions()).toEqual([]);
        })
      });

      it('should create an action to delete a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 204,
            response: data
          });
        });

        const expectedActions = [
          { type: types.DELETE_COMMENT, payload: true },
        ];

        const store = mockStore({ commentDeleted: false });
        return store.dispatch(actions.deleteComment()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
      });

      it('should not create an action to delete a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 404,
            response: data
          });
        });

        const store = mockStore({ commentDeleted: false });
        return store.dispatch(actions.deleteComment()).then(() => {
          expect(store.getActions()).toEqual([]);
        })
      });

      it('should create an action to like a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 204,
            response: data
          });
        });

        const expectedActions = [
          { type: types.LIKE_COMMENT, payload: true },
        ];

        const store = mockStore({ commentLiked: false });
        return store.dispatch(actions.likeComment()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
      });

      it('should not create an action to like a comment', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 404,
            response: data
          });
        });

        const store = mockStore({ commentLiked: false });
        return store.dispatch(actions.likeComment()).then(() => {
          expect(store.getActions()).toEqual([]);
        })
      });

  });

});

