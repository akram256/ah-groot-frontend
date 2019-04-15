import React, { Component } from 'react';
// import  { withRouter }  from 'react-router-dom';
import {connect} from 'react-redux';
import facebooklogin from '../actions/SocialAuth/FacebookActions';
import googlelogin from '../actions/SocialAuth/GoogleActions';
import SocialAuth from '../components/SocialAuth';
import M from 'materialize-css/dist/js/materialize.js';



export class SocialAuthViews extends Component {
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.socialauthState.isAuthenticated) {
      localStorage.setItem('token', nextProps.socialauthState.payload.user.auth_token);
      M.toast({html:'You have Successully Logged in', classes: 'green'});
    } 
  }
  
    handleFacebook=(response)=>{
      const {facebooklogin} = this.props;
      if (response.accessToken) {
        facebooklogin({ auth_token: response.accessToken});
      }

    }
    handleGoogleSuccess=(response) => {
      const { googlelogin } = this.props;
      if (response.tokenId) {
        googlelogin({
                auth_token:response.tokenId});
      }
    }
    handlegoogleFailure=(response) => {
      const {googlelogin}= this.props;
      googlelogin('invalid request');
    }
  
   render() {
    return (
      <div>
      <SocialAuth
        id="socialAuth"
        responseFacebook={this.handleFacebook}
        googleSuccess={this.handleGoogleSuccess}
        googleFailure={this.handlegoogleFailure}
      />
    </div>
    );
}
}

export const mapStateToProps = state => ({
  socialauthState: state.socialauthReducer,
});


export default (connect(mapStateToProps,  {facebooklogin, googlelogin})(SocialAuthViews));

