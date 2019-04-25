import React, { Component } from 'react';
import moment from 'moment';
import sanitizeHtml from 'sanitize-html';
import { withRouter } from 'react-router-dom';


export class ArticleCard extends Component {
  render() {
    const {
      title,
      description,
      body,
      reading_time,
      updated_at,
      author,
      slug,
    } = this.props;
    const newdate = new Date(updated_at).toString();
    const timeAgo = moment(`${newdate}`).fromNow();

    return (
      <div className="col s6">
        <div className="card grey lighten-5">
          <div className="card-content black-text"  slug={slug}
                      onClick={(event) => {
                        const slug = event.currentTarget.getAttribute('slug');
                        this.props.history.push(`/article/${slug}/view`);
                      }}>
            <span className="card-title truncate">{title}</span>
            <span className="card-description truncate">{description}</span>
            <div className="truncate">
              {sanitizeHtml(body, { allowedTags: [], allowedAttributes: {} })}
            </div>
          </div>
          <div className="card-action all-article-details">
            <div>
              published by {author} {timeAgo}
            </div>
            <div>{reading_time}</div>
            <i className="material-icons">star</i>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleCard);
