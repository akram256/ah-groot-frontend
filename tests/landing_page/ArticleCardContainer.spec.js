import React from 'react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
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
    const wrapper = shallow(<Router> <Provider store={store}><ArticleCardContainer /></Provider> </Router>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing Again', () => {
    const wrapper = mount(<Router> <Provider store={store}><ArticleCardContainer /></Provider></Router> );
  });

  it('should render when state is updated', () => {
    const wrapper = mount(<Router> <Provider store={store}><ArticleCardContainer /></Provider> </Router>);
    wrapper.setProps({ articles: data.article.articles.results });
    wrapper.update();
    expect(wrapper.prop('articles').length).toEqual(6);
  });

  it('should render empty span when there are no props', () => {
    const wrapper = mount(<Router> <Provider store={store}><ArticleCardContainer /></Provider> </Router>);
    wrapper.setProps({ articles: [] });
    wrapper.update();
    expect(wrapper.prop('articles').length).toEqual(0);
  });
});
