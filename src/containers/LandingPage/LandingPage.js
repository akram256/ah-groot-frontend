import React, { Component } from 'react';
import NavBar from '../../components/landingPage/NavBar';
import Header from '../../components/landingPage/Header';
import Carousel from '../../components/landingPage/Carousel';
import ArticleCardContainer from './ArticleCardContainer';
import Footer from '../../components/landingPage/Footer';
import SignUpPage from '../../containers/signup/SignupPage'

import '../../styles/landing.scss'


class LandingPage extends Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  buttonClicked = (e) =>{
    e.preventDefault();
    console.log('Hello')
      this.setState({
        open:true
      })
  }

  render() {
    
    return (
      <div>
        <SignUpPage
        open = {this.state.open}
        close ={this.onCloseModal} />
        <Header onOpenModal={this.onOpenModal}/>
        <NavBar />
        <Carousel />
        <ArticleCardContainer/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
