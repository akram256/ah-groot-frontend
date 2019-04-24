import React from 'react';
import { shallow } from 'enzyme';

import Logout from '../../src/components/landingPage/Logout';

describe('NavBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Logout />);
    expect(wrapper).toMatchSnapshot();
  });
});