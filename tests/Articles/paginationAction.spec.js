import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {fetchOriginal, getNext} from '../../src/actions/paginationAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('update process', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('retrieves successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          articles: {
            count:1,
            next:'',
            previous:"",
            results:[
                {}
            ]
          },
        },
      });
    });
    const expectedActions = [
      {
        type: "ORIGINAL",
        articles:[{}]
        
      },
    ];
    return store.dispatch(fetchOriginal()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  
    it('retrieves next successfully', () => {
      const store = mockStore({});
      moxios.wait(() => {
        const requestM = moxios.requests.mostRecent();
        requestM.respondWith({
          status: 200,
          response: {
            articles: {
              count:1,
              next:'',
              previous:"",
              results:[
                  {}
              ]
            },
          },
        });
      });
      const expectedActions = [
        {
          type: "GET_NEXT",
          articles:[{}]
          
        },
      ];
      return store.dispatch(getNext('')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });