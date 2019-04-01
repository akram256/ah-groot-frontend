import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.js';
import { userSignupRequest } from '../../actions/signup/signupActions';
import SignUpModal from '../../components/signup/SignupModal';
import '../../styles/registerModal.scss';

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };
  }


  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({isLoading:true})
    if (this.state.password == this.state.password2) {
      const data = {
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        },
      };
      this.props.userSignupRequest(data);
    } else {
      M.toast({html: 'Passwords donot match', classes: 'red' });

    }
  };


  render() {
    const { userSignupRequest,
            open,
            close } = this.props;

    return (
      <div className="container">
        <SignUpModal
          open ={open}
          close = {close}
          submitHandler = {this.submitHandler}
          inputHandler={this.inputHandler}
          password={this.state.password}
          email={this.state.email}
          username={this.state.username}
          userSignupRequest= {this.props.userSignupRequest}
          isLoading={this.props.loading}

          
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return { loading: state.registrationReducer.loading }
}


export default connect(
  mapStateToProps,
  { userSignupRequest }
)(SignupPage);
