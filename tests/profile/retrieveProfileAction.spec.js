import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import retrieveProfileAction from '../../src/actions/profile/retrieveProfileAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('update process', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('retrieves successfully', () => {
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
        type: "RETRIEVE_PROFILE_SUCCESS",
        payload: {
          
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
    ];
    return store.dispatch(retrieveProfileAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
