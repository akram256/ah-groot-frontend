import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import likearticle from '../../src/actions/LikeAction';
import dislikearticle from '../../src/actions/DislikeAction';
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

    it('dispatch actions when like an article fails', () => {
        const slug = 'anything'
        fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/articles/${slug}/like/`, 
        { body:{errors:{}} },

        );
        const store = mockStore({});
        store.dispatch(likearticle(slug));
        expect(store.getActions()).toEqual([]);
    });
});

    


