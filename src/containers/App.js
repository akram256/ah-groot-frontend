import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ResetPasswordPage from '../components/resetPassword/ResetPasswordPage';
import '../styles/App.scss';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/password-reset" component={ResetPasswordPage} />
            <Route
              exact
              path="/password-reset/:token"
              component={ResetPasswordPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
