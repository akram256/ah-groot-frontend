import React from 'react';
import { shallow ,mount} from 'enzyme';

import RetrieveProfileComponent from '../../src/components/profile/retrieveProfile';

describe('RetrieveProfileComponent', () => {
  const followerlist = jest.fn();
  const handlefollow =jest.fn();
  it('should render without crashing', () => {
    const wrapper = mount(<RetrieveProfileComponent 
      handlefollow ={()=>jest.fn()}
      followerlist={()=>jest.fn()}/>);
    wrapper.setProps({shouldHiveStuff:true})
    console.log(wrapper.debug())
    wrapper.find('h6.waves-effect.waves-light.modal-trigger').simulate('click')
    wrapper.find('button.btn.left').simulate('click')
  
    
    expect(wrapper).toMatchSnapshot();
  });

});