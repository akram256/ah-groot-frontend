import React from 'react';


const LoginForm = (props) => {

    const { 
        email, 
        password,
        emailChange,
        passwordChange,
        handleSubmit,
        isLoading
    } = props;
    
    let Loader = require('react-loader');
    return (
      <div>
        <div className="formInput">
        <Loader loaded={!isLoading}></Loader>
         <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input id="email" type="email" className="validate"
                    value={email}
                    onChange={emailChange}
                />
                <label className="active" for="email">Email</label>
            </div>
            <div className="input-field col s12">
                <input id="password" type="password" className="validate"
                    value ={password}
                    onChange={passwordChange}
                />
                <label className="active" for="password">Password</label>
            </div>
            <input type="submit" value="Login"
                className="waves-effect waves-light btn-small login"
                onClick = {handleSubmit}
                />
            <a className="forgot-password" href="url">Forgot Password?</a>
        </form>
        </div>
      </div>
    )
}

export default LoginForm;
