import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LandingPage from './LandingPage/LandingPage';
import ResetPasswordPage from '../components/resetPassword/ResetPasswordPage';
import CreateArticle from '../containers/Articles/CreateArticlePage';
import ViewArticle from '../containers/Articles/ViewArticlePage';
import UpdateArticle from '../containers/Articles/EditArticle';
import ArticleFeed from '../containers/Articles/ArticleFeed';
import SingleArticleView from '../containers/Articles/SingleArticleView';

import '../styles/App.scss';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/password-reset" component={ResetPasswordPage} />
            <Route
              exact
              path="/password-reset/:token"
              component={ResetPasswordPage}
            />
            <Route exact path="/new-article" component={CreateArticle} />
            <Route exact path="/home" component={ArticleFeed} />
            <Route exact path="/me/articles" component={ViewArticle} />
            <Route
              exact
              path="/me/article/:slug/edit"
              component={UpdateArticle}
            />
            <Route
              exact
              path="/article/:slug/view"
              component={SingleArticleView}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
