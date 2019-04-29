import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class AllArticleView extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
  }

  render() {
    const {
      title, description, slug,
      likes, average_rating,
      dislikes,user, reading_time,
    } = this.props;

    return (
      <div className="col s12 custom">
        <div className="card grey lighten-5">
          <div
            slug={slug}
            className="card-content black-text"
            onClick={(event) => {
              const slug = event.currentTarget.getAttribute('slug');
              this.props.history.push(`/article/${slug}/view`);
            }}
          >
            <span className="card-title truncate">{title}</span>
            <span className="card-description truncate">{description}</span>
            <div className="meta-data">
            {/* <div className="article-author">By {user}</div> */}
            <div>By <span className="by-user">{user}</span></div>
            <div className="reading-time">{reading_time}</div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(AllArticleView);
