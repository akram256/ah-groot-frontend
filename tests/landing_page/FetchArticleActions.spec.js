import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from './maxios_mock';

import { getArticles } from '../../src/actions/ArticleAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Get articles actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('retrieves a given number of articles and dispatches them', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.article,
      });
    });
    const expectedActions = [
      { type: 'ARTICLES', articles: data.article.articles.results },
    ];
    const store = mockStore({ articles: [] });

    return store.dispatch(getArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('returns nothing when an error is encountered', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: [],
      });
    });
    const store = mockStore({ articles: [] });

    return store.dispatch(getArticles()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
