import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import moxios from 'moxios';
import data from './maxios_mock';

import ArticleCardContainer, { ArticleCardContainer as App} from '../../src/containers/LandingPage/ArticleCardContainer';

describe('ArticleCardContainer', () => {
  const initialState = {
    articles : data.article.articles.results
  };
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should render without crashing', () => {
    const wrapper = shallow( <Provider store={store}><ArticleCardContainer /></Provider> );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing Again', () => {
    const wrapper = mount( <Provider store={store}><ArticleCardContainer /></Provider> );
  });

  it('should render when state is updated', () => {
    const wrapper = mount( <Provider store={store}><ArticleCardContainer /></Provider> );
    wrapper.setProps({ articles: data.article.articles.results });
    wrapper.update();
    expect(wrapper.prop('articles').length).toEqual(6);
  });

  it('should render empty span when there are no props', () => {
    const wrapper = mount( <Provider store={store}><ArticleCardContainer /></Provider> );
    wrapper.setProps({ articles: [] });
    wrapper.update();
    expect(wrapper.prop('articles').length).toEqual(0);
  });
});
