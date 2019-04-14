import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideResetEmail } from '../../actions/resetPasswordActions';
import '../../styles/resetpassword.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.js';

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.sendResetEmail = this.sendResetEmail.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  sendResetEmail() {
    if (this.validateEmail(this.state.email)) {
      this.props.provideResetEmail(this.state.email);
    } else {
      M.toast({ html: 'Invalid email', classes: 'red' });
    }
  }

  render() {
    return (
      <div className="reset-password card-panel">
        <p className="reset-password center-align">Reset your password</p>
        <div className="row">
          <form>
            <div className="row">
              <div className="input-field col s12 reset">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />
                <label htmlFor="email">
                  {this.state.email ? this.state.value : 'Email'}
                </label>
              </div>
            </div>
          </form>
        </div>
        <button className="waves-effect btn" onClick={this.sendResetEmail}>
          Send reset password link
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { provideResetEmail }
)(ResetPassword);
