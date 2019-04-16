import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from '../../src/Store';
import { userRating } from '../../src/actions/ratingActions';
import { RatingContainer } from '../../src/containers/RatingContainer';
import Rating from '../../src/components/Rating';

describe('User rating', () => {
  const ratingProps = {
    name: "rate1", starCount: 5, value: 0, onStarClick: jest.fn(),  rating: 0,
  };
  const ratingData = {
    article: {
      score: 2,
    },
  };

  const WrongRatingData = {
    article: {},
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('hits mapStateToProps', () => {
    mount(<RatingContainer {...ratingProps} /> );
  });


  it("should prompt onStarClick updates rate score in state", () => {

    const wrapper = shallow ( <RatingContainer /> );
    const instance = wrapper.instance();
    instance.onStarClick(4);
    instance.onSubmit();
    expect(wrapper.state().rating).toBe(4);
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
