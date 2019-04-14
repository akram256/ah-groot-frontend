import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import moxios from 'moxios';

import { AllArticleView } from '../../src/components/articles/AllArticleView';
import { ArticleView } from '../../src/components/articles/ViewArticleCard';

describe('AllArticleView', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AllArticleView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should respond to onclick event', () => {
    const wrapper = shallow(<AllArticleView
       history={{ push: jest.fn()}}
       />);
       const event = {
        currentTarget: {
          getAttribute: jest.fn()
        }
       }
       wrapper.find('.card-content.black-text').simulate('click', event);;
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

  it('should respond to onclick events', () => {
    const wrapper = shallow(<ArticleView
      history={{ push: jest.fn()}}
    />);
    wrapper.find('.edit-artilce').simulate('click');
    wrapper.find('.delete-artilce').simulate('click');
  });

  it('should call the async delete function with error', async () => {
    const wrapper = shallow(<ArticleView
      history = {{push: jest.fn()}}
      />);
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 204,
        response: {status: 204},
      });
    });
    return wrapper.instance().deleteArticle("slug").then(()=>{
    });
  });
});

