import React from 'react';
import { shallow } from 'enzyme';

import UpdateProfileForm from '../../src/components/profile/UpdateProfile';

describe('UpdateProfileForm', () => {
 
  it('should render without crashing', () => {
    const wrapper = shallow(<UpdateProfileForm />);
    expect(wrapper).toMatchSnapshot();
  });
});