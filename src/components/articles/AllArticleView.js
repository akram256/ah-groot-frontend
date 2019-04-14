import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class AllArticleView extends Component {
  constructor(props) {
    super(props);
    let { history } = this.props;
  }
  render() {
    const { title, description, slug } = this.props;
    return (
      <div className="col s12 custom">
        <div className="card grey lighten-5">
          <div
            slug={slug}
            className="card-content black-text"
            onClick={event => {
              const slug = event.currentTarget.getAttribute('slug');
              this.props.history.push(`/article/${slug}/view`);
            }}
          >
            <span className="card-title truncate">{title}</span>
            <span className="card-description truncate">{description}</span>
          </div>
          <div className="card-action">
            <button >1 like</button>
            <button >3 dislikes</button>
            <button >0 comments</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllArticleView);
