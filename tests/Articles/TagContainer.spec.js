import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import TagContainer, {
    TagContainer as DumpTagContainer, mapDispatchToProps
} from '../../src/containers/Articles/Tag';
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
        <DumpTagContainer
        getTags={() => jest.fn()}
        addTags={() => jest.fn()}
        defaultTags={data.article.articles.results[0].tagList}
        />
    );

    expect(wrapper).toMatchSnapshot();
  });

    it('should call on click functions', () => {
        const wrapper = shallow(
            <DumpTagContainer
            getTags={() => jest.fn()}
            addTags={() => jest.fn()}
            defaultTags={data.article.articles.results[0].tagList}
            />
        );

      wrapper.instance().handleChange(data.article.articles.results[0].tagList);
      expect(wrapper).toMatchSnapshot();
    });

    it('should trigger on change function', () => {
        const wrapper = shallow(
            <DumpTagContainer
            getTags={() => jest.fn()}
            addTags={() => jest.fn()}
            defaultTags={data.article.articles.results[0].tagList}
            />
        );
        const event = [{slug: "spam", value: 'spam'}];

        wrapper.find('.basic-multi').simulate('change', event);
    });

    it('should mount without crashing', () => {
        const wrapper = mount(
            <Provider store={store}>
                <TagContainer
                getTags={() => jest.fn()}
                addTags={() => jest.fn()}
                defaultTags={data.article.articles.results[0].tagList}
                />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should add tags after mounting', () => {
        const wrapper = shallow(
            <DumpTagContainer
            getTags={() => jest.fn()}
            addTags={() => jest.fn()}
            defaultTags={data.article.articles.results[0].tagList}
            />
        );
        wrapper.instance().props.addTags(['tags']);
    });

    it('should match state to props', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).getTags();
      mapDispatchToProps(dispatch).addTags();
   });
});
