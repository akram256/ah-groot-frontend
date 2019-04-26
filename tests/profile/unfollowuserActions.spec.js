import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import unfollowuser from '../../src/actions/profile/unfollowActions'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when unfollowin of a  user is  successfully', () => {
    const user = 'akram'
    fetchMock.delete(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/follow/`, 
    { body:{user:{}} },

    );
    const store = mockStore({});
    store.dispatch(unfollowuser(user)).then(()=>{
        expect(store.
            getActions()).toEqual([ { type: 'UNFOLLOW_SUCESS', payload: { user: {} } }]);
        
});

});
it('dispatch actions when unfollow of a user fails', () => {
    const user = 'akram'
    fetchMock.delete(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/follow/`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(unfollowuser(user));
    expect(store.getActions()).toEqual([]);
});
});