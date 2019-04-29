import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import BookmarkButton, {
  BookmarkButton as DumpBookmarkButton,
  mapDispatchToProps,
} from '../../src/containers/Bookmark/BookmarkButton';
import {
  AllBookmarks,
  mapDispatchToProps as customMapDispatchToProps,
  mapStateToProps as customMapStateToProps
 } from '../../src/containers/Bookmark/AllBookmarks';

describe('Bookmarks botton ', () => {
  const mockStore = configureStore([thunk]);
  let store;
  let bookmarkResponse;

  beforeEach(() => {
    store = mockStore([]);
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
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
      <DumpBookmarkButton getAllbookmarkedArticles={() => jest.fn()} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should receive new props', () => {
    const wrapper = shallow(
      <DumpBookmarkButton
      getAllbookmarkedArticles={() => jest.fn()}
        bookmarks ={[bookmarkResponse.bookmark]}
      />
    );
    wrapper
      .instance()
      .componentWillReceiveProps({ bookmarks: [bookmarkResponse.bookmark], slug: 'groot-is-such-an-amazing' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should respond to on click events', () => {
    const wrapper = shallow(
        <DumpBookmarkButton
        getAllbookmarkedArticles={() => jest.fn()}
        bookmarkArticle={() => jest.fn()}
        unBookmarkArticle={() => jest.fn()}
        bookmarks ={[bookmarkResponse.bookmark]}
        />
      );
      wrapper.find('.material-icons').simulate('click');
      wrapper.find('.material-icons').simulate('click');
  });

  it('should match state to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getAllbookmarkedArticles();
    mapDispatchToProps(dispatch).unBookmarkArticle();
    mapDispatchToProps(dispatch).bookmarkArticle();
  });
});

describe('All bookmarks ', () => {
    const mockStore = configureStore([thunk]);
    let store;
    let bookmarkResponse;

    beforeEach(() => {
      store = mockStore([]);
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
      moxios.install();
    });

    afterEach(function() {
      moxios.uninstall();
    });

    it('should render without crashing', () => {
      const wrapper = shallow(
        <AllBookmarks getAllbookmarkedArticles={() => jest.fn()} />
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should receive new props', () => {
      const wrapper = shallow(
        <AllBookmarks
        getAllbookmarkedArticles={() => jest.fn()}
          bookmarks ={[bookmarkResponse.bookmark]}
        />
      );
      wrapper
        .instance()
        .componentWillReceiveProps({ bookmarks: [bookmarkResponse.bookmark] });
      expect(wrapper).toMatchSnapshot();
    });

    it('should map dispatch to props', () => {
      const dispatch = jest.fn();
      customMapDispatchToProps(dispatch).getAllbookmarkedArticles();
    });

    it('should match state to props', () => {
      const initialState = {
        bookmarks: []
      };
      customMapStateToProps(initialState);
    });

  });
