import React, { Component } from 'react';

import LoginContainer from '../Login/Login';
import NavBar from '../../components/landingPage/NavBar';
import Header from '../../components/landingPage/Header';
import Carousel from '../../components/landingPage/Carousel';
import ArticleCardContainer from './ArticleCardContainer';
import Footer from '../../components/landingPage/Footer';
import SignUpPage from '../../containers/signup/SignupPage'

import '../../styles/landing.scss'


class LandingPage extends Component {
  state = {
    openLogIn: false,
    openSignUp: false
  };

  openSignUp = () => {
    this.setState({ openSignUp: true });
  };

  openLogIn = () => {
    this.setState({ openLogIn: true });
  };

  closeSignUp = () => {
    this.setState({ openSignUp: false });
  };

  closeLogIn = () => {
    this.setState({ openLogIn: false });
  };

  redirectUser = () =>{
    this.closeLogIn();
    this.openSignUp();
}
  redirectToLogIn = () =>{
    this.closeSignUp();
    this.openLogIn();
  }

  render() {

    return (
      <div>
        <SignUpPage
        open = {this.state.openSignUp}
        close ={this.closeSignUp}
        redirectToLogIn={this.redirectToLogIn}/>
        <LoginContainer
          open = {this.state.openLogIn}
          close = {this.closeLogIn}
          redirectUser = {this.redirectUser}
        />
        <Header
          openSignUp={this.openSignUp}
          openLogIn = {this.openLogIn}
        />
        <NavBar />
        <Carousel />
        <ArticleCardContainer/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
