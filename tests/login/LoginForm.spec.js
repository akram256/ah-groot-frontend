import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../../src/components/login/LoginForm';

describe('LoginForm', () => {
  const props = {
    redirectUser: jest.fn()
  }
  it('should render without crashing', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should click signup link', () =>{
    const wrapper = shallow(<LoginForm {...props}/>);
    wrapper.find('.new-user').simulate('click');
    
  });
});
