import React from 'react';
import { shallow, mount } from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../src/Store';

import LandingPage from '../../src/containers/LandingPage/LandingPage';

describe('NavBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should open sign up modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().setState({open: true });
    wrapper.instance().openSignUp();
  });

  it('should open log in modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().setState({open: true });
    wrapper.instance().openLogIn();
  });

  it('should close sign up modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().setState({openSignUp: true });
    wrapper.instance().closeSignUp();
  });

  it('should close log in modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().closeLogIn();
  });

  it('redirect user', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().redirectUser();
  });

  it('redirectToLogIn', () => {
    const redirectToLogIn = jest.fn();
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().redirectToLogIn();
  });

  it('signup page redirectToLogin is covered', () => {
    const props = {
      open: jest.fn(),
      close: jest.fn(),
      redirectToLogIn: () => jest.fn(),
      loading: false,
      userSignupRequest: jest.fn() }
    const wrapper = shallow(<Provider store={store}><LandingPage /></Provider>);
  });




});
