import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../styles/loginModal.scss';
import LoginModal from '../../components/login/LoginModal';
import loginAction from '../../actions/loginAction';

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
    let { history } = this.props;
  }
  

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ isLoading: false });
      if (nextProps.token) {
        sessionStorage.setItem('token', nextProps.token);
        this.props.history.push('/home');
      }
    }
    if(sessionStorage.token){
      this.props.history.push('/home');
    }
  }

  emailChange = event => this.setState({ email: event.target.value });
  passwordChange = event => this.setState({ password: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.logIn();
  };

  logIn = () => {
    const { loginAction } = this.props;
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    loginAction(loginData);
  };

  render() {
    const { open,
            close,
            redirectUser } = this.props;

    return (
      <LoginModal
        open={open}
        close={close}
        email={this.state.email}
        password={this.state.password}
        emailChange={this.emailChange}
        passwordChange={this.passwordChange}
        handleSubmit={this.handleSubmit}
        isLoading={this.state.isLoading}
        redirectUser={redirectUser}
      />
    );
  }
}

LoginContainer.defaultProps = {
  token: '',
  errors: {},
};

export const mapStateToProps = state => ({
  token: state.login.token,
  errors: state.login.errors,
  isSuccessful: state.login.isSuccessful,
});

export default withRouter(connect(
  mapStateToProps,
  { loginAction }
)(LoginContainer));
