import React, { Component } from 'react';
import NavBar from '../../components/landingPage/NavBar';
import Header from '../../components/landingPage/Header';
import Carousel from '../../components/landingPage/Carousel';
import ArticleCardContainer from './ArticleCardContainer';
import Footer from '../../components/landingPage/Footer';

import '../../styles/landing.scss'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NavBar />
        <Carousel />
        <ArticleCardContainer/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
