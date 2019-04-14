import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';

import { AllArticleView } from '../../src/components/articles/AllArticleView';
import { ArticleView } from '../../src/components/articles/ViewArticleCard';

describe('AllArticleView', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AllArticleView />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ArticleView', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<ArticleView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without call the edit function', () => {
    const wrapper = shallow(<ArticleView />);
    wrapper.setProps({history: { push: jest.fn()}});
    wrapper.instance().editArticle("slug");
  });

  it('should render without call the delete function', () => {
    const wrapper = shallow(<ArticleView />);
    wrapper.instance().deleteArticle("slug");
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 204,
        response: {},
      });
    });
  });
});

