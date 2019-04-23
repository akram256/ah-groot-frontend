import React from 'react';
import { shallow } from 'enzyme';

import RetrieveProfileComponent from '../../src/components/profile/retrieveProfile';

describe('RetrieveProfileComponent', () => {
 
  it('should render without crashing', () => {
    const wrapper = shallow(<RetrieveProfileComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});