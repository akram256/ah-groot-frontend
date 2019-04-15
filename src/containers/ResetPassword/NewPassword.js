import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/resetPasswordActions';
import M from 'materialize-css/dist/js/materialize.js';

export class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmNewPassword: '',
    };

    this.sendNewPassword = this.sendNewPassword.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendNewPassword() {
    this.props.resetPassword(this.state.newPassword, this.state.confirmNewPassword, this.props.token);
  }

  render() {
    return (
      <div className="reset-password card-panel">
        <p className="reset-password center-align bold">Reset your password</p>
        <div className="row">
          <form className="reset">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  className="validate"
                  onChange={this.handlePasswordChange}
                  value={this.state.newPassword}
                  required
                />
                <label htmlFor="newPassword">New Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="confirmNewPassword"
                  type="password"
                  name="confirmNewPassword"
                  className="validate"
                  onChange={this.handlePasswordChange}
                  value={this.state.confirmNewPassword}
                  required
                />
                <label htmlFor="confirmNewPassword">Confirm New Password</label>
              </div>
            </div>
          </form>
        </div>
        <button className="waves-effect btn" onClick={this.sendNewPassword}>
          Reset Password
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { resetPassword }
)(NewPassword);
