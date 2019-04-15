import React from 'react';
import { shallow } from 'enzyme';

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
    wrapper.instance().closeSignUp();
  });

  it('should close log in modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().closeLogIn();
  });

});
