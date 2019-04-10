import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from './maxios_mock';

import { setCategories, storeCategories } from '../../src/actions';

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
    const expectedActions = [
      { type: 'CATEGORIES', categories: data.category.categorys.results },
    ];
    const store = mockStore({ categories: [] });
    return store.dispatch(storeCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
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

    const expectedActions = [{ type: 'CATEGORIES', categories: undefined }];
    store.dispatch(setCategories());
    expect(store.getActions()).toEqual(expectedActions);
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
});
