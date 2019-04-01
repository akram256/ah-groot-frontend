import React from 'react';
import Modal from 'react-responsive-modal';

import 'materialize-css/dist/css/materialize.min.css';

import LoginForm from './LoginForm';

const LoginModal = (props) => {
     const {open,
            close,
            email,
            password,
            emailChange,
            passwordChange,
            handleSubmit,
            isLoading} = props;

  return (
    <div className="modal ">
        <Modal open={open} onClose={close}>
            <h4 className="welcome">Welcome Back!</h4>
            <LoginForm 
            email={email}
            password={password}
            emailChange = {emailChange}
            passwordChange = {passwordChange}
            handleSubmit = {handleSubmit}
            isLoading = {isLoading}
            />
        </Modal>
  </div>
    
  )
}

export default LoginModal;
