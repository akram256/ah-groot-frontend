import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import ArticleMetaData, {
  ArticleMetaData as DumpArticleMetaData, mapDispatchToProps
} from '../../src/containers/Articles/MetaData';
import data from '../landing_page/maxios_mock';

describe('ArticleMetaData ', () => {
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
        <ArticleMetaData
          setDescription={() => jest.fn()}
          setTitle={() => jest.fn()}
        />
    );

    expect(wrapper).toMatchSnapshot();
  });

    it('should call on click functions', () => {
      const wrapper = shallow(
        <DumpArticleMetaData
        setDescription={() => jest.fn()}
        setTitle={() => jest.fn()}
        />
      );
      const event = {
        target:{
          value: ""
        },
        preventDefault: jest.fn()
      }
      wrapper.instance().handleChangeDescription(event);
      wrapper.instance().handleChangeTitle(event);
      expect(wrapper).toMatchSnapshot();
    });

    it('should respond on onchnage events', () => {
      const wrapper = shallow(
        <DumpArticleMetaData
        setDescription={() => jest.fn()}
        setTitle={() => jest.fn()}
        />
      );
      const event = {
        target:{
          value: "three"
        },
        preventDefault: jest.fn()
      }

      wrapper
        .find('#textarea1')
        .simulate('change', event);
      wrapper
        .find('#title')
        .simulate('change', event);
    });


    it('should mount without crashing', () => {
      const wrapper = mount(
        <Provider store={store}>
          <ArticleMetaData
          setDescription={() => jest.fn()}
          setTitle={() => jest.fn()}
          />
        </Provider>
        );

      expect(wrapper).toMatchSnapshot();
    });

    it('should match state to props', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setDescription();
      mapDispatchToProps(dispatch).setTitle();
   });
});
