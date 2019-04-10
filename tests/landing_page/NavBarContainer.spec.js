import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import moxios from 'moxios';

import data from './maxios_mock';
import NavBarContainer from '../../src/containers/LandingPage/NavBarContainer';

describe('NavBarContainer', () => {
  const initialState = {
    categories :[{name:'Head lines', slug:'head-lines'}]
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
    const wrapper = shallow( <Provider store={store}><NavBarContainer /></Provider> );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing 2', () => {
    const wrapper = shallow( <Provider store={store}><NavBarContainer /></Provider> );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when state is updated', () => {
    const wrapper = mount( <Provider store={store}><NavBarContainer /></Provider> );
    wrapper.setProps({ categories: data.category.categorys.results });
    expect(wrapper.prop('categories').length).toEqual(2);
  });
});

