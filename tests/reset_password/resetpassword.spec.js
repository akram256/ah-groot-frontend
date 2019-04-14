import configureStore from 'redux-mock-store';
import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import NewPassword from '../../src/containers/ResetPassword/NewPassword';
import ResetPassword from '../../src/containers/ResetPassword/ResetPassword';
import ResetPasswordPage from '../../src/components/resetPassword/ResetPasswordPage';

describe('ResetPassword containers', () => {
  const initialState = {};
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render reset password page with token', () => {
    const props = { match: { params: { token: 'qwerty' } } };
    const wrapper = mount(
      <Provider store={store}>
        <ResetPasswordPage {...props} />
      </Provider>
    );
  });

  it('should render reset password page without token', () => {
    const props = { match: { params: { token: '' } } };
    const wrapper = mount(
      <Provider store={store}>
        <ResetPasswordPage {...props} />
      </Provider>
    );
  });

  it('should render reset password form with email field', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    let component = wrapper.find('ResetPassword');
    wrapper.find('button.waves-effect.btn').simulate('click');
    component.setState({ email: 'lydia@gmail.com' });
    wrapper.find('button.waves-effect.btn').simulate('click');
    wrapper.find('input#email').simulate('change', { target: { value: 'l' } });
  });

  it('should render reset password form with password fields', () => {
    let token = 'eywedvbhjkiuyhHjJsdfgh';
    const wrapper = mount(
      <Provider store={store}>
        <NewPassword token={token} />
      </Provider>
    );
    wrapper.find('button.waves-effect.btn').simulate('click');
    wrapper
      .find('input#newPassword')
      .simulate('change', { target: { value: 'a' } });
    wrapper
      .find('input#confirmNewPassword')
      .simulate('change', { target: { value: 'a' } });
  });
});
