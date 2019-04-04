import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.js';

class Carousel extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.carousel');
    var config = {
      dist: 0,
      fullWidth: true,
      duration: 400,
      indicators: true,
    };
    M.Carousel.init(elems, config);
    this.autoplay();
  }

  autoplay = () => {
    setInterval(function() {
      var elements = document.querySelectorAll('.carousel.carousel-slider');
      if( elements[0]){
        elements[0].M_Carousel;
      }
    }, 4000);
  };

  render() {
    return (
      <div className="carousel carousel-slider center">
        <div className="carousel-fixed-item center">
          <div className="fixed-item-text">
            A Social platform for the creative at heart
          </div>
        </div>
        <a className="carousel-item" href="#one!">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554888347/groot/carousel-1-compressed.jpg" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554888347/groot/carousel-2-compressed.jpg" />
        </a>
        <a className="carousel-item" href="#four!">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554888347/groot/carousel-3-compressed.jpg" />
        </a>
        <a className="carousel-item" href="#five!">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554888347/groot/carousel-4-compressed.jpg" />
        </a>
        <a className="carousel-item" href="#six!">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554888347/groot/carousel-5-compressed.jpg" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554888347/groot/carousel-6-compressed.jpg" />
        </a>
      </div>
    );
  }
}

export default Carousel;
