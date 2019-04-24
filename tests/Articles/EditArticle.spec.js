import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import UpdateArticle, {
  UpdateArticle as DumpUpdateArticle, mapDispatchToProps
} from '../../src/containers/Articles/EditArticle';
import data from '../landing_page/maxios_mock';

describe('UpdateArticle page ', () => {
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
      <DumpUpdateArticle
        recentArticlePost={data.article.articles.results[0]}
        getSingleleUserArticle={() => jest.fn()}
        getAllCategories={() => jest.fn()}
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
      <DumpUpdateArticle
        recentArticlePost={data.article.articles.results[0]}
        getSingleleUserArticle={() => jest.fn()}
        getAllCategories={() => jest.fn()}
        match={{
          params: {
            slug: 'hdhgd-djh',
          },
        }}
      />
    );
    wrapper.instance().handleThemeChange();
    wrapper.instance().handleBodyChange('value');
    wrapper
      .instance()
      .handleCategoryChange(
        { value: { slug: 'slug' } },
        { action: 'select-option'}
      );

    expect(wrapper).toMatchSnapshot();
  });

  jest.useFakeTimers();
  it('should respond on onclick events', () => {
    const wrapper = shallow(
      <DumpUpdateArticle
        recentArticlePost={data.article.articles.results[0]}
        getSingleleUserArticle={() => jest.fn()}
        updateUserArticle={() => jest.fn()}
        getAllCategories={() => jest.fn()}
        match={{
          params: {
            slug: 'hdhgd-djh',
          },
        }}
        newArticle={data.article.articles.results[0]}
      />
    );

    wrapper
      .find('.waves-effect.waves-light.btn-small')
      .at(0)
      .simulate('click');
    wrapper
      .find('.waves-effect.waves-light.btn-small')
      .at(1)
      .simulate('click');
    jest.runAllTimers();
    wrapper.find('#checkbox').simulate('click');
  });

  it('should receive props', () => {
    const wrapper = shallow(
        <DumpUpdateArticle
          recentArticlePost={data.article.articles.results[0]}
          getSingleleUserArticle={() => jest.fn()}
          getAllCategories={() => jest.fn()}
          match={{
            params: {
              slug: 'hdhgd-djh',
            },
          }}
          newArticle={data.article.articles.results[0]}
        />
      );
    wrapper.instance().componentWillReceiveProps({editArticle: data.article.articles.results[0]});
    wrapper.instance().setState({category: {slug:"nema", name:"sssss"}});
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should respond to on change events', () => {
    const wrapper = shallow(<DumpUpdateArticle
      recentArticlePost={data.article.articles.results[0]}
      getSingleleUserArticle={() => jest.fn()}
      getAllCategories={() => jest.fn()}
      match={{
        params: {
          slug: 'hdhgd-djh',
        },
      }}
      newArticle={data.article.articles.results[0]}
    />
  );

  wrapper.find('.basic-single').simulate('change', { value: { slug: "slug"}}, { action: "select-option" });
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
      <UpdateArticle
        recentArticlePost={data.article.articles.results[0]}
        getSingleleUserArticle={() => jest.fn()}
        getAllCategories={() => jest.fn()}
        match={{
          params: {
            slug: 'hdhgd-djh',
          },
        }}
        newArticle={data.article.articles.results[0]}
      />
    </Provider>
  );
  });

  it('should match state to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).updateUserArticle();
    mapDispatchToProps(dispatch).setBody();
    mapDispatchToProps(dispatch).setCategory();
    mapDispatchToProps(dispatch).setTitle();
    mapDispatchToProps(dispatch).setDescription();
 });
});
