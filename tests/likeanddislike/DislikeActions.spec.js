import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import dislikearticle from '../../src/actions/DislikeAction';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when dislike an article fails', () => {
    const slug = 'anything'
    fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/articles/${slug}/dislike/`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(dislikearticle(slug));
    expect(store.getActions()).toEqual([]);
});

});

it('dispatch actions for dislike  of an article', () => {
    const slug = 'anything'
 fetchMock.post(`https://ah-backend-groot.herokuapp.com/api/articles/${slug}/dislike/`, 
      { body:{ user:{}} },
);
const store = mockStore({});
store.dispatch(dislikearticle(slug)).then(()=>{
expect(store.
         getActions()).toEqual([ { type: 'DISLIKE_ARTICLE_SUCCESS', payload: { user: {} } }]);
     


});
});