import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from './maxios_mock';

import { setCategories, storeCategories } from '../../src/actions';
import { getAllCategories } from '../../src/actions/CategoryAction';
import { getTags } from '../../src/actions/TagAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Get categories actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('retrieves a given number of categories and dispatches them', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.category,
      });
    });
    const store = mockStore({ categories: [] });
    return store.dispatch(storeCategories()).then(() => {
    });
  });

  it('retrieves a given number of categories with an error', () => {
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 400,
        response: [],
      });
    });

    const store = mockStore({ categories: [] });
    store.dispatch(setCategories());
  });

  it('does not store categories when reponse is 404', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: [],
      });
    });
    const store = mockStore({ categories: [] });

    return store.dispatch(storeCategories()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it('retrieves all categories and dispatches them', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.category,
      });
    });
    const store = mockStore({ allCategories: [] });
    return store.dispatch(getAllCategories()).then(() => {});
  });

  it('retrieves all categories with error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: [],
      });
    });

    const store = mockStore({ allCategories: [] });
    return store.dispatch(getAllCategories()).then(() => {
    });
  });


  it('retrieves all tags and dispatches them', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {tags: {results: ["music","world"]}},
      });
    });
    const store = mockStore({ tags: [] });
    return store.dispatch(getTags()).then(() => {
    });
  });

  it('retrieves all tags with error', () => {
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 404,
        response: ["music","world"],
      });
    });
    const store = mockStore({ tags: [] });
    return store.dispatch(getTags()).then(() => {
    });
  });
});
