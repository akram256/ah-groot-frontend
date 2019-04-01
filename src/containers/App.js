import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
              exact path='/'
              render={(renderProps) => (
              <div>
                  <h1>Author's Haven</h1>
              </div>
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
