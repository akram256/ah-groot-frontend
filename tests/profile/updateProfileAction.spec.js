import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from '../landing_page/maxios_mock';
import updateProfileAction from '../../src/actions/profile/updateProfileAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('update process', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('updates successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          profile: {
            full_name: 'Mikey',
            bio: '',
            image: '',
            follower_count: 0,
            following_count: 0,
            timestamp: '2019-04-22T08:29:22.208140+03:00',
            favorite_articles: [],
            user: 'walimike',
          },
        },
      });
    });
    const expectedActions = [
      {
        type: "UPDATE_PROFILE_SUCCESS",
        payload: {
          profile: {
            full_name: 'Mikey',
            bio: '',
            image: '',
            follower_count: 0,
            following_count: 0,
            timestamp: '2019-04-22T08:29:22.208140+03:00',
            favorite_articles: [],
            user: 'walimike',
          },
        },
      },
    ];
    const valiData = { profile: { full_name: 'Mikey' } };
    return store.dispatch(updateProfileAction(valiData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // it('retrieves a error message', () => {
  //   const store = mockStore({});
  //   moxios.wait(() => {
  //     const requests = moxios.requests.mostRecent();
  //     requests.respondWith({
  //       status: 404,
  //       response: data.login.failure,
  //     });
  //   });
  //   const expectedActions = [
  //     { type: "UPDATE_PROFILE_FAIL", payload: data.login.failure.errors.error },
  //   ];
  //   const invalidData = {
  //     user: {
  //       email: '',
  //       password: '',
  //     },
  //   };
  //   return store.dispatch(loginAction(invalidData)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
