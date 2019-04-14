import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import likearticle from '../../src/actions/LikeAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

   it('dispatch actions for like  of an article', () => {
       const slug = 'anything'
    fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/articles/${slug}/like/`, 
         { body:{ user:{}} },
    );
    const store = mockStore({});
    store.dispatch(likearticle(slug)).then(()=>{
        expect(store.
            getActions()).toEqual([ { type: 'LIKE_ARTICLE_SUCCESS', payload: { user: {} } }]);
        
    });
    
    });

//     it('dispatch actions for google login failure', () => {
//         fetchMock.post('https://ah-backend-groot.herokuapp.com/api/social/auth/google/', 
//             { body:{ errors:{}} },
//         );
//         const store = mockStore({});
//         store.dispatch(googlelogin({errors: 'invalid request'} ));
//         expect(store.getActions()).toEqual([]);
//     });

//     it('dispatch actions for facebook login failure', () => {
//     fetchMock.post('https://ah-backend-groot.herokuapp.com/api/social/auth/facebook/', 
//         { body:{errors:{}} },
//     );
//     const store = mockStore({});
//     store.dispatch(facebooklogin({ errors: 'invalid request' }));
//     expect(store.getActions()).toEqual([]);
//     });

//    it('dispatch actions for facebook login', () => {
//         fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/social/auth/facebook/`, { auth_token: 'token' });
//         const store = mockStore({});
//         store.dispatch(facebooklogin({ auth_token: 'token' }));
//         expect(store.getActions()).toEqual([]);
//     });
});