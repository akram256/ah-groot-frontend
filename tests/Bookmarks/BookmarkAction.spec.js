import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import {
  unBookmarkArticle,
  getAllbookmarkedArticles,
  bookmarkArticle,
} from '../../src/actions/bookmarks/BookmarkAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Bookmark actions', () => {
  let bookmarkResponse;
  beforeEach(function() {
    sessionStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJzdGFubGV5QGdtYWlsLmNvbSIsImV4cCI6MTU1NzYyNzk4NH0.D__dkNT93HX8Rk5RJ2f_g0uHE5y8SWq_QBkeAWMIrNs'
    );
    moxios.install();
    bookmarkResponse = {
      bookmark: {
        author: 'stanley',
        article_title: 'Groot is such an amazing team',
        slug: 'groot-is-such-an-amazing',
        description: 'Groot is such an amazing team',
        bookmarked_at: '2019-04-24T04:27:05.188296+03:00',
        image: '',
      },
    };
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('can bookmark an article', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: bookmarkResponse,
      });
    });
    const store = mockStore({ bookmark: [] });
    return store.dispatch(bookmarkArticle()).then(() => {
      expect(store.getActions()).toEqual([
        { type: 'BOOKMARK', payload: 'bookmarked' },
      ]);
    });
  });

  it('can bookmark an article with an error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: bookmarkResponse,
      });
    });
    const store = mockStore({ bookmark: [] });
    return store.dispatch(bookmarkArticle()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it('can unbookmark an article', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 204,
        response: bookmarkResponse,
      });
    });
    const store = mockStore({ bookmark: [] });
    return store.dispatch(unBookmarkArticle()).then(() => {
      expect(store.getActions()).toEqual([
        { type: 'UN_BOOKMARK', payload: 'unbookmarked' },
      ]);
    });
  });

  it('can unbookmark an article with an error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: bookmarkResponse,
      });
    });
    const store = mockStore({ bookmark: [] });
    return store.dispatch(unBookmarkArticle()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it('can get all articles', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {bookmarks: [bookmarkResponse.bookmark] },
      });
    });
    const store = mockStore({ bookmark: [] });
    return store.dispatch(getAllbookmarkedArticles()).then(() => {
    });
  });

  it('can get all articles with an error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: bookmarkResponse,
      });
    });
    const store = mockStore({ bookmark: [] });
    return store.dispatch(getAllbookmarkedArticles()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
