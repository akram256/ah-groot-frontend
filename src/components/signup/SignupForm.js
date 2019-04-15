import React, { Component } from 'react';
import SocialAuthViews from '../../containers/SocialAuthContainer';

const SignupForm = props => {
  let Loader = require('react-loader')
  return (
    <div>
      <div className="formInput">
        <h5 className="center-align data-heading">JOIN</h5>
        <form onSubmit={props.onSubmit} id="signUpForm" className="form">
          <div className="input-field s12">
            <input
              type="text"
              id="username"
              name="username"
              value={props.username}
              onChange={props.onChange}
              className="validate"
              required
            />
            <label className="active" htmlFor="username">
              Username
            </label>
          </div>

          <div className="input-field s12">
            <label className="active" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={props.email}
              onChange={props.onChange}
              className="validate"
              required
            />
          </div>

          <div className="input-field s12">
            <label className="active" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={props.password}
              onChange={props.onChange}
              className="validate"
              required
            />
          </div>

          <div className="input-field s12">
            <label className="active" htmlFor="password2">
              Confirm Password 
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={props.password2}
              onChange={props.onChange}
              required
              className="validate"
            />
          </div>

          <div className="input-field center">
          <Loader loaded={!props.isLoading}>
            <button type="submit" className="waves-effect waves-light btn-small login">
              Register
            </button>
          </Loader>
          <br/>
          <br/>
           <hr className="login-separator" />
            <p className="login-or"><label>OR</label></p>
            <SocialAuthViews/> 
      
          </div>

          <div className="data-option">
            <p className="center-align">Already have an account? <a href='#' onClick={() => props.redirectToLogIn()}
            id="redirectLink">Log in</a></p>
          </div>
         
        </form>
      </div>
    
    </div>
  );
};

export default SignupForm;
