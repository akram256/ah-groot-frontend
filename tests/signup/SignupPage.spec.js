import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { userSignupRequest } from '../../src/actions/signup/signupActions';
import SignUpModal from '../../src/components/signup/SignupModal';
import SignUpPage, { SignupPage as NoStoreSignUp} from '../../src/containers/signup/SignupPage';
import {Provider} from 'react-redux';
import store from '../../src/Store';

describe('MapStateToDispatch', () => {

  const script = document.createElement('script');
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

   const div = document.createElement('div');


  it('access mapStateToProps', () => {
    const newProps = {
      open: true,
      close: jest.fn(),
      userSignupRequest: jest.fn(),
      inputHandler: jest.fn(),
      submitHandler: jest.fn(),
      password: '123445678Aa',
      email: 'example@gmail.com',
      username: 'Cucumber',
    };
   mount(<Provider store={store}><SignUpPage {...newProps} /></Provider>,div);

  });


});

describe('User registration actions', () => {
  const userData = {
    username: 'edgar',
    email: 'edgarnyabongo@gamil.com',
    password: 'P@ssw0rd2',
    password2: 'P@ssw0rd2',
  };
  const WrongUserData = {
    username: 'edgar',
    email: 'edgarnyabongo.com',
    password: 'P@ssw0rd2',
    password2: 'P@ssw0rd2',
  };
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should not register a user', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {errors: [{}]},
      });
    });

    const expectedAction = [
      { type: 'STARTED' },
      { type: 'FAILED', err: {errors: [{}]}},
    ];
    return store.dispatch(userSignupRequest(WrongUserData)).then(() => {

      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should register a user successfully', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      error: null,
      successMsg: null,
      loading: false,
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {user: { Message: 'Successfully logged in'} },
      })

        });
      const expectedAction = [
        { type: 'STARTED' },
        { type: 'SUCCESSFUL', data: {user: { Message: 'Successfully logged in'} } },
      ];

      return store.dispatch(userSignupRequest(userData)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });


});

describe('Form', () => {
  const newProps = {
    open: true,
    close: jest.fn(),
    userSignupRequest: jest.fn(),
    inputHandler: jest.fn(),
    submitHandler: jest.fn(),
    password: '123445678Aa',
    email: 'example@gmail.com',
    username: 'Cucumber',
  };
  it('should change property name in the state', () => {
    const componentWrapper = mount(<Provider store={store}><SignUpModal {...newProps} /></Provider>);
    componentWrapper.setProps({ email: 'blah@gmail.com' });
    expect(componentWrapper.props().email).toEqual('blah@gmail.com');
  });


  it('calls submit method after form submission', () => {
    const newProps = {
      open: true,
      close: jest.fn(),
      userSignupRequest: jest.fn(),
      inputHandler: jest.fn(),
      submitHandler: jest.fn(),
      password: '123445678Aa',
      email: 'example@gmail.com',
      username: 'Cucumber',
    };
    let wrapper = mount(<Provider store={store}><SignUpModal {...newProps} /></Provider>);
    wrapper.find('#signUpForm').simulate('submit');
    expect(newProps.submitHandler).toHaveBeenCalled();
  });

  it('should check for password mismatch', () => {
    const newProps = {
      open: true,
      close: jest.fn(),
      submitHandler: jest.fn(),
      inputHandler: jest.fn(),
      password:'123Password',
      email:"email@gmail.com",
      username:"username",
    };
    let wrapper = mount(<Provider store={store}><SignUpModal {...newProps} /></Provider>);
    const form = wrapper.find('#signUpForm');
  form.simulate('submit');
});

it('should update username value in state if user inputs value in username field', () => {

  const newProps = {
    open: true,
    close: jest.fn(),
    submitHandler: jest.fn(),
    inputHandler: jest.fn(),
    password:'123Password',
    email:"email@gmail.com",
    username:"username",
  };
  let wrapper = mount(<Provider store={store}><SignUpModal {...newProps} /></Provider>);
  const form = wrapper.find('#signUpForm');
  form.find("input[type='text']").instance().value = 'aaaaaa';
  form.find("input[name='email']").instance().value = 'aaaaaaa@gmail.com';
  form.find("input[name='password']").instance().value = '123456789A';
  form.find("input[name='password2']").instance().value = '123456789A';
  form.simulate('submit');

});

it('calls input handler', () => {
  const props= {
    userSignupRequest : jest.fn(),
    open: true,
    close: jest.fn(),
    password:'123Password',
    email:"email@gmail.com",
    username: "",
  }
    let wrapper = shallow(<NoStoreSignUp {...props} />);
    const instance = wrapper.instance();
    const event = {
    target: {
      name:'edgar'
    }
    }
    instance.inputHandler(event);
    });

  it('calls submit handler', () => {
    const props= {
      userSignupRequest : jest.fn(),
      open: true,
      close: jest.fn(),
      password:'123Password',
      email:"email@gmail.com",
      username: "",
    }
    let wrapper = shallow(<NoStoreSignUp {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name:''
      }
    }
    event.preventDefault = jest.fn()
    instance.submitHandler(event);
  });

  it('calls submit handlers else if passwords are not equal', () => {
    const props= {
      userSignupRequest : jest.fn(),
      open: true,
      close: jest.fn(),
      password:"",
      email:"",
      username: "",
    }
    let wrapper = shallow(<NoStoreSignUp {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {}
    }
    event.preventDefault = jest.fn();
    instance.setState({password:"1234",password2:"123"});
    instance.submitHandler(event);
  })


});

