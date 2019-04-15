import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { userRating } from '../../src/actions/ratingActions';
describe('User registration actions', () => {
  const ratingData = {
    article: {
      score: 2,
    },
  };

  const WrongRatingData = {
    article: {},
  };
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should not rate article', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { errors: [{}] },
      });
    });

    const expectedAction = [
      { type: 'STARTED' },
      { type: 'FAILED', err: { errors: [{}] } },
    ];
    return store.dispatch(userRating(WrongRatingData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('A user should rate an article successfully', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      error: null,
      successMsg: null,
      loading: false,
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          article: {
            score: '4.00',
            author: 3,
            rated_on: '2019-04-16T15:14:19.516056+03:00',
            article: 1,
          },
        },
      });
    });
    const expectedAction = [
      { type: 'STARTED' },
      {
        type: 'SUCCESSFUL',
        data: {
          article: {
            score: '4.00',
            author: 3,
            rated_on: '2019-04-16T15:14:19.516056+03:00',
            article: 1,
          },
        },
      },
    ];

    return store.dispatch(userRating(ratingData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
