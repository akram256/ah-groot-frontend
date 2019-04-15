import React from 'react';
import { shallow } from 'enzyme';
import SocialAuth from '../../src/components/SocialAuth'

describe('SocialAuth', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SocialAuth/>);
    expect(wrapper).toMatchSnapshot();
  });
});