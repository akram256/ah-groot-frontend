import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import moxios from 'moxios';

import CreateArticle, { CreateArticle as DumpCreateArticle, mapDispatchToProps} from '../../src/containers/Articles/CreateArticlePage';
import data from '../landing_page/maxios_mock';

describe('CreateArticle page ', () => {
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
    const wrapper = shallow(<DumpCreateArticle
    recentArticlePost ={data.article.articles.results[0]}
    setBody={()=>jest.fn()}
    postArticle={()=>jest.fn()}
     />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call on click functions', () => {
    const wrapper = shallow(<DumpCreateArticle
    recentArticlePost ={data.article.articles.results[0]}
    setBody={()=>jest.fn()}
    setCategory={()=>jest.fn()}
    postArticle={()=>jest.fn()}
     />);
     wrapper.instance().handleThemeChange();
     wrapper.instance().handleOnClick();
     wrapper.instance().handleBodyChange("value");
     wrapper.instance().handleCategoryChange(
         {value: {slug: "slug"}},
         {action: "select-option"}
         );

    expect(wrapper).toMatchSnapshot();
  });

  it('should respond on onclick events', () => {
    const wrapper = shallow(<DumpCreateArticle
        recentArticlePost ={data.article.articles.results[0]}
        setBody={()=>jest.fn()}
        setCategory={()=>jest.fn()}
        postArticle={()=>jest.fn()}
         />);
         wrapper.find('.waves-effect.waves-light.btn-small').at(0).simulate('click');
         wrapper.find('.waves-effect.waves-light.btn-small').at(1).simulate('click');
         wrapper.find('#checkbox').simulate('click');
  });

  it('should publish an article', () => {
    const wrapper = shallow(<DumpCreateArticle
      recentArticlePost ={data.article.articles.results[0]}
      setBody={()=>jest.fn()}
      setCategory={()=>jest.fn()}
      postArticle={()=>jest.fn()}
       />);
       moxios.wait(() => {
        const requestM = moxios.requests.mostRecent();
        requestM.respondWith({
          status: 200,
          response: data.article.articles.results[0],
        });
      });
      return wrapper.instance().handlePublish().then(()=>{
      });
  });

  it('should not publish an article with an error', () => {
    const wrapper = shallow(<DumpCreateArticle
      recentArticlePost ={data.article.articles.results[0]}
      setBody={()=>jest.fn()}
      setCategory={()=>jest.fn()}
      postArticle={()=>jest.fn()}
       />);
       moxios.wait(() => {
        const requestM = moxios.requests.mostRecent();
        requestM.respondWith({
          status: 404,
          response: data,
        });
      });
      return wrapper.instance().handlePublish().then(()=>{
      });
  });

  it('should not publish an article without slug', () => {
    const wrapper = shallow(<DumpCreateArticle
      recentArticlePost ={data.article}
      setBody={()=>jest.fn()}
      setCategory={()=>jest.fn()}
      postArticle={()=>jest.fn()}
       />);
       moxios.wait(() => {
        const requestM = moxios.requests.mostRecent();
        requestM.respondWith({
          status: 404,
          response: data,
        });
      });
      wrapper.instance().handlePublish();
  });

  it('should full mount without breaking', () => {
    global.MutationObserver = class {
      constructor(callback) {}
      disconnect() {}
      observe(element, initObject) {}
      takeRecords() {return []}
    };
    global.document.getSelection = function() {}
    const wrapper = mount(
    <Provider store={store}>
      <CreateArticle
      recentArticlePost ={data.article}
      setBody={()=>jest.fn()}
      setCategory={()=>jest.fn()}
      postArticle={()=>jest.fn()}
      />
    </Provider>
  );
  });

  it('should match state to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).postArticle();
    mapDispatchToProps(dispatch).setBody();
    mapDispatchToProps(dispatch).setCategory();
 });
});