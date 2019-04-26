import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import followuser from '../../src/actions/profile/followActions'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when follow a user is a success', () => {
    const user = 'akram'
    fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/follow/`, 
    { body:{user:{}} },

    );
    const store = mockStore({});
    store.dispatch(followuser(user)).then(()=>{
        expect(store.
            getActions()).toEqual([ { type: 'FOLLOW_SUCCESS', payload: { user: {} } }]);
        
});

});
it('dispatch actions when follow a user fails', () => {
    const user = 'akram'
    fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/profiles/${user}/follow/`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(followuser(user));
    expect(store.getActions()).toEqual([]);
});
});