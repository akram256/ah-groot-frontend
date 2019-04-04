import React, { Component } from 'react';
import NavBarContainer from '../../containers/LandingPage/NavBarContainer';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-top-wrapper">
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li>
              <a href="#">Home</a>
            </li>
            <NavBarContainer />
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
