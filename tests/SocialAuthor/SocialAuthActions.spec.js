import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import googlelogin from '../../src/actions/SocialAuth/GoogleActions';
import facebooklogin from '../../src/actions/SocialAuth/FacebookActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

   it('dispatch actions for google login', () => {
    fetchMock.post('https://ah-backend-groot.herokuapp.com/api/social/auth/google/', 
         { body:{ user:{}} },
    );
    const store = mockStore({});
    store.dispatch(googlelogin({ user:{ auth_token: 'token' }})).then(()=>{
        expect(store.
            getActions()).toEqual([ { type: 'GOOGLE_LOGIN', payload: { user: {} } }]);
        
    });
    
    });

    it('dispatch actions for google login failure', () => {
        fetchMock.post('https://ah-backend-groot.herokuapp.com/api/social/auth/google/', 
            { body:{ errors:{}} },
        );
        const store = mockStore({});
        store.dispatch(googlelogin({errors: 'invalid request'} ));
        expect(store.getActions()).toEqual([]);
    });

    it('dispatch actions for facebook login failure', () => {
    fetchMock.post('https://ah-backend-groot.herokuapp.com/api/social/auth/facebook/', 
        { body:{errors:{}} },
    );
    const store = mockStore({});
    store.dispatch(facebooklogin({ errors: 'invalid request' }));
    expect(store.getActions()).toEqual([]);
    });

   it('dispatch actions for facebook login', () => {
        fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/social/auth/facebook/`, { auth_token: 'token' });
        const store = mockStore({});
        store.dispatch(facebooklogin({ auth_token: 'token' }));
        expect(store.getActions()).toEqual([]);
    });
});