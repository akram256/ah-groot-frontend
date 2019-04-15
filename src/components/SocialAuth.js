import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import config from '../../src/config.json'

const SocialAuth = props =>(

    <div className="App">
      <div className="facebook-div">
        <FacebookLogin
          appId={config.appId}
          fields="name,email,picture"
          callback={props.responseFacebook}
          textButton={false}
          icon= {<img src ="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554917850/groot/facebook_logo.png" width="50px" height="50px"/>}
        />
        <label>Join with facebook</label>
      </div>
      <div className="google-div">
        <GoogleLogin
          clientId={config.clientId}
          buttonText="Join with google"
          onSuccess={props.googleSuccess}
          onFailure={props.googleFailure}
        >
        </GoogleLogin>
       
      </div>
  </div>  
);
SocialAuth.prototype = {
  responseFacebook: PropTypes.func.isRequired,
  googleSuccess: PropTypes.func.isRequired,
  googleFailure: PropTypes.func.isRequired,
};

export default SocialAuth;
