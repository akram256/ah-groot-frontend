import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from '../../src/containers/LandingPage/LandingPage';

describe('NavBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should open modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().setState({open: true });
    wrapper.instance().onOpenModal();
  });

  it('should close modal form', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().onCloseModal();
  });

  it('should change state to true', () => {
    const wrapper = shallow(<LandingPage />);
    const event = {}
    event.preventDefault = jest.fn()
    wrapper.instance().buttonClicked(event);
  });
});
