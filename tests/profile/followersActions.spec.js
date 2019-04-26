import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import followerlist from '../../src/actions/profile/followersActions'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when a list of followers is returned a successfully', () => {
    const user = 'akram'
    fetchMock.get(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/followers/`, 
    { body:{user:{}} },

    );
    const store = mockStore({});
    store.dispatch(followerlist(user)).then(()=>{
        expect(store.
            getActions()).toEqual([ { type: 'FOLLOWERLIST_SUCESS', payload: { user: {} } }]);
        
});

});
it('dispatch actions when returning a follower list of a user fails', () => {
    const user = 'akram'
    fetchMock.get(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/followers/`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(followerlist(user));
    expect(store.getActions()).toEqual([]);
});
});