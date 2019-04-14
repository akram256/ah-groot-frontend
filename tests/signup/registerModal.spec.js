import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SignupModal from '../../src/components/signup/SignupModal';

const props = {
  open: true,
  close: jest.fn(),
  userSignupRequest: jest.fn(),
  inputHandler: jest.fn(),
  submitHandler: jest.fn(),
  password: 'password',
  email: 'example@gmail.com',
  username: 'username',
};
describe('SignupModal', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SignupModal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
