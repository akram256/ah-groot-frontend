import React, { Component } from 'react';
import Logout from "./Logout";

class InnerHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="head-wrapper">
        <a href="/home" className="app-logo">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554739109/groot/logo.png" />
          <span>Authors Haven</span>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down_">
            <Logout
                logout = {this.props.logout}
            />
        </ul>
      </div>
    );
  }
}

export default InnerHeader;