import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {

    const {
        email,
        password,
        emailChange,
        passwordChange,
        handleSubmit,
        isLoading,
        redirectUser
    } = props;

    let Loader = require('react-loader');
    return (
      <div>
        <div className="formInput">
         <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input id="email" type="email" className="validate"
                    value={email}
                    onChange={emailChange}
                />
                <label className="active" htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
                <input id="password" type="password" className="validate"
                    value ={password}
                    onChange={passwordChange}
                />
                <label className="active" htmlFor="password">Password</label>
                <div className="button-area">
                <div><Link to='/password-reset' className="forgot-password">Forgot Password?</Link></div>
                <div className="login-button">
                    <Loader loaded={!isLoading}>
                        <input type="submit" value="Login"
                        className="waves-effect waves-light btn-small login"
                        onClick = {handleSubmit}
                        />
                    </Loader>
                </div>
            </div>
            </div>
            <a href="#" onClick={() => redirectUser()} className="new-user">New to Author's Haven?</a>
        </form>
        </div>
      </div>
    )
}

export default LoginForm;
