import React from 'react';
import Logo from '../Logo';
import ResetPassword from '../../containers/ResetPassword/ResetPassword';
import NewPassword from '../../containers/ResetPassword/NewPassword';
import '../../styles/resetpassword.scss';
import 'materialize-css/dist/css/materialize.min.css';

export default function ResetPasswordPage(props) {
  if (props.match.params.token) {
    return (
      <div className="reset-password-page center-align">
        <Logo />
        <NewPassword token={props.match.params.token} />
      </div>
    );
  } else {
    return (
      <div className="reset-password-page center-align">
        <Logo />
        <ResetPassword />
      </div>
    );
  }
}
