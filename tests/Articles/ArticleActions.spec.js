import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from '../landing_page/maxios_mock';

import { postArticle, getUserArticle, getUserPublishedArticles, getAllArticles , getSingleleUserArticle, updateUserArticle} from '../../src/actions/ArticleAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Article actions', () => {
  beforeEach(function() {
    sessionStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJzdGFubGV5QGdtYWlsLmNvbSIsImV4cCI6MTU1NzYyNzk4NH0.D__dkNT93HX8Rk5RJ2f_g0uHE5y8SWq_QBkeAWMIrNs');
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  const articleData = {
      title: "title",
      body: "body",
      description: "description",
      category:"dance",
      tags:["usher"]
  }

  it('can post an article', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: data.article.articles.results[0],
      });
    });
    const store = mockStore({ article: [] });
    return store.dispatch(postArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual([ { type: 'POST_ARTICLE', article: undefined } ]);
    });
  });

  it('can post an article with an error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: data.article.articles.results[0],
      });
    });
    const store = mockStore({ article: [] });
    return store.dispatch(postArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it('get an articles for a single user with erroe', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 400,
        response: data.article.articles.results[0],
      });
    });
    const store = mockStore({ articles: [] });
    return store.dispatch(getUserArticle()).then(() => {
      expect(store.getActions()).toEqual([ ]);
    });
  });

  it('get an articles for a single user', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.article,
      });
    });
    const expectedActions = [{ type: 'USER_ARTICLES', articles: data.article.articles.results }];
    const store = mockStore({ articles: [] });
    return store.dispatch(getUserArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('get an published articles for a single user', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.article,
      });
    });
    const expectedActions = [{ type: 'PUBLISHED_ARTICLES', articles: data.article.articles.results }];
    const store = mockStore({ articles: [] });
    return store.dispatch(getUserPublishedArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('get an published articles for a single user with error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: [],
      });
    });
    const store = mockStore({ articles: [] });
    return store.dispatch(getUserPublishedArticles()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });


  it('get an all articles', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.article,
      });
    });
    const expectedActions = [{ type: 'ALL_ARTICLES', articles: data.article.articles.results }];
    const store = mockStore({ articles: [] });
    return store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('get an all articles with error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: data,
      });
    });
    const store = mockStore({ articles: [] });
    return store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });


  it('get an articles for a given user', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response:  data.article,
      });
    });
    const expectedActions = [{ type: 'EDIT_ARTICLE', article: data.article.articles.results[0] }];
    const store = mockStore({ article: [] });
    return store.dispatch(getSingleleUserArticle()).then(() => {
    });
  });

  it('get an articles for a given user with error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response:  data.article.articles,
      });
    });
    const store = mockStore({ article: [] });
    return store.dispatch(getSingleleUserArticle()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });


  it('update an article for a given user', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response:  data.article.articles.results[1],
      });
    });
    const store = mockStore({ article: [] });
    return store.dispatch(updateUserArticle(articleData)).then(() => {
    });
  });


  it('update an article for a given user with error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response:  data.article,
      });
    });
    const store = mockStore({ article: [] });
    return store.dispatch(updateUserArticle(articleData)).then(() => {
    });
  });
});
