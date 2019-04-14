import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import moxios from 'moxios';

import data from './maxios_mock';
import { storeCategories } from '../../src/actions/index'
import NavBarContainer, { NavBarContainer as DumpNavBarContainer } from '../../src/containers/LandingPage/NavBarContainer';


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

  it('should render when props are updated', () => {
    const wrapper = shallow(<DumpNavBarContainer
      storeCategories={()=>storeCategories()}
      categories =  {data.category.categorys.results.slice(0,7)}
      />);
  });

  it('should render when mounted', () => {
    const wrapper = mount( <Provider store={store}><NavBarContainer /></Provider> );
    wrapper.setProps({ categories: data.category.categorys.results.slice(0,2) });
  });

  it('should render with categories more than 6 tabs', () => {
    const wrapper = shallow( <Provider store={store}><NavBarContainer /></Provider> );
    wrapper.setProps({ categories: data.category.categorys.results.slice(0,7) });
    wrapper.update();
  });
});