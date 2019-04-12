import React, { Component } from 'react';
import moment from 'moment';

class ArticleCard extends Component {
  render() {
    const { title, description, body, reading_time, updated_at } = this.props;
    const newdate = new Date(updated_at).toString();
    const timeAgo = moment(`${newdate}`).fromNow();

    return (
      <div className='col s6'>
      <div className="card grey lighten-5">
        <div className="card-content black-text">
          <span className="card-title truncate">{title}</span>
          <span className="card-description truncate">{description}</span>
          <div className="truncate">{body}</div>
        </div>
        <div className="card-action">
          <div>published {timeAgo}</div>
          <div>{reading_time}</div>
          <i className="material-icons">star</i>
        </div>
      </div>
      </div>
    );
  }
}

export default ArticleCard;
