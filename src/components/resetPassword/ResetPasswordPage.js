import React from 'react';
import ResetPageHeader from '../../components/resetPassword/ResetPageHeader';
import ResetPassword from '../../containers/ResetPassword/ResetPassword';
import NewPassword from '../../containers/ResetPassword/NewPassword';
import '../../styles/resetpassword.scss';
import 'materialize-css/dist/css/materialize.min.css';

export default function ResetPasswordPage(props) {
  if (props.match.params.token) {
    return (
      <div className="reset-password-page">
        <ResetPageHeader />
        <NewPassword token={props.match.params.token} />
      </div>
    );
  } else {
    return (
      <div className="reset-password-page">
        <ResetPageHeader />
        <ResetPassword />
      </div>
    );
  }
}
