import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';
import fetchMock from 'fetch-mock';

import SingleArticleView, {
    SingleArticleView as DumpSingleArticleView,
} from '../../src/containers/Articles/SingleArticleView';
import data from '../landing_page/maxios_mock';

describe('Single article ', () => {
  const initialState = {
    articles: data.article.articles.results,
    comments: { comments: []},
  };
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
    fetchMock.restore();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
        <DumpSingleArticleView
        getSingleleUserArticle={() => jest.fn()}
          setTitle={() => jest.fn()}
          match={{
            params: {
              slug: 'hdhgd-djh',
            },
          }}
        />
    );

    expect(wrapper).toMatchSnapshot();
  });

    it('should call on click functions', () => {
        const wrapper = shallow(
            <DumpSingleArticleView
            getSingleleUserArticle={() => jest.fn()}
              setTitle={() => jest.fn()}
              match={{
                params: {
                  slug: 'hdhgd-djh',
                },
              }}
            />
        );
      wrapper.instance().componentWillReceiveProps({editArticle: data.article.articles.results[0]});
      expect(wrapper).toMatchSnapshot();
    });
});
