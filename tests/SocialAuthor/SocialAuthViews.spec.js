import React from 'react';
import { shallow } from 'enzyme';
import { SocialAuthViews, mapStateToProps } from '../../src/containers/SocialAuthContainer';

const push = jest.fn();
const props = {
    googlelogin: jest.fn(),
    facebooklogin: jest.fn(),
    payload: {
        user: {
            token: 'usertoken',
        },
        errors: {
            errors: "['The auth_token is expired or invalid']",
        },
    },
    socialAuthState: {
        isAuthenticated: false,
        facebook_login: false,
        google_login: false,
        payload: '',
        token: '',
    },
    history: { push },
};

const initialState = {
    isAuthenticated: false,
    facebook_login: false,
    google_login: false,
    payload: '',
    token: '',
};

let wrapper;

describe('Social Auth Views', () => {
    const  props = {
        history: { push: jest.fn() },
        googlelogin: jest.fn(),
        facebooklogin: jest.fn(),
    }
    let wrapper = shallow ( <SocialAuthViews {...props} /> );

    it('should match snapshot', () => {
        expect (wrapper).toMatchSnapshot();
    });

    it('should call handle google-login action', () => {
        wrapper.instance().handlegoogleFailure({
          auth_token: 'token',
        });
        expect(wrapper.instance().props.googlelogin).toBeCalled();
      });
         it('should update next props', () => {
    wrapper.setProps({
      socialauthState: {
        isAuthenticated: true,
        payload: {
          user: {
            username: 'groot',
          },
        },
      },
    });
    expect(wrapper.instance().props.socialauthState).toEqual({
              isAuthenticated: true,
              payload: {
                user: {
                  username: 'groot',
                },
              },
            });
          });
            it('should call handle google sign in success', () => {
    wrapper.setProps({
      response: {
        tokenId: 'a fake google token',
      },
    });
    wrapper.instance().handleGoogleSuccess(wrapper.instance().props.response);
    expect(wrapper.instance().props.response).toEqual({ tokenId: 'a fake google token' });
  });
  
  it('should handle google sign in fail', () => {
    wrapper.setProps({
      response: {
        error: 'a fake google error',
         },
    });
    wrapper.instance().handlegoogleFailure(wrapper.instance().props.response.error);
    expect(wrapper.instance().props.googlelogin).toBeCalled();
  });
     it('should call facebook sign in action', () => {
    wrapper.setProps({
      response: {
        accessToken: 'a fake google token',
      },
    });

     wrapper.instance().handleFacebook(wrapper.instance().props.response);
    expect(wrapper.instance().props.facebooklogin).toBeCalled();
  });
    it('should return state from redux store', () => {
        expect(mapStateToProps(initialState).props).toEqual(undefined);
  });
    it('should store token in local storage', () => {
        wrapper.setProps({
        response: {
            tokenId: 'a fake google token',
      },
    });
  });
});
