import React from 'react';
import { shallow } from 'enzyme';

import UpdateProfileModal from '../../src/components/profile/profileModal';

describe('UpdateProfileModal', () => {
 
  it('should render without crashing', () => {
    const wrapper = shallow(<UpdateProfileModal />);
    expect(wrapper).toMatchSnapshot();
  });
});