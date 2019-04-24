import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import ViewArticle, {
  ViewArticle as DumpViewArticle,
} from '../../src/containers/Articles/ViewArticlePage';
import data from '../landing_page/maxios_mock';

describe('ViewArticle ', () => {
  const initialState = {
    articles: data.article.articles.results,
  };
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
      <DumpViewArticle
        getUserArticle={() => jest.fn()}
        getUserPublishedArticles={() => jest.fn()}
        userArticles={data.article.articles.results}
        publishedArticles={data.article.articles.results}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without articles', () => {
    const wrapper = shallow(
      <DumpViewArticle
        getUserArticle={() => jest.fn()}
        getUserPublishedArticles={() => jest.fn()}
        userArticles={[]}
        publishedArticles={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should mount without crashing', () => {
    sessionStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJzdGFubGV5QGdtYWlsLmNvbSIsImV4cCI6MTU1NzYyNzk4NH0.D__dkNT93HX8Rk5RJ2f_g0uHE5y8SWq_QBkeAWMIrNs');
    const wrapper = mount(
        <Router>
      <Provider store={store}>
        <ViewArticle
          getUserArticle={() => jest.fn()}
          getUserPublishedArticles={() => jest.fn()}
          userArticles={data.article.articles.results}
          publishedArticles={data.article.articles.results}
        />
      </Provider>
        </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
