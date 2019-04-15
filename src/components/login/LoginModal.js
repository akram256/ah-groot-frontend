import React from 'react';
import Modal from 'react-responsive-modal';

import 'materialize-css/dist/css/materialize.min.css';

import LoginForm from './LoginForm';

const LoginModal = (props) => {
     const {open, close, email, password, emailChange,
            passwordChange, handleSubmit, isLoading,
            redirectUser} = props;

  return (
    <div className="modal ">
        <Modal open={open} onClose={close}>
            <div className="welcome">
             <h5>Welcome Back!</h5>
            </div>
            <div className="login-form">
                <LoginForm
                email={email}
                password={password}
                emailChange = {emailChange}
                passwordChange = {passwordChange}
                handleSubmit = {handleSubmit}
                isLoading = {isLoading}
                redirectUser = {redirectUser}
                />
            </div>
        </Modal>
  </div>
  )
}

export default LoginModal;
