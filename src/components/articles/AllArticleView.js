import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AllArticleView extends Component {
  constructor(props) {
    super(props);
    let { history } = this.props;
  }

  render() {
    const {title, description, slug,
      likes, average_rating,
      dislikes} = this.props;

    return (
        <div className='col s12 custom'>
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
            <button >{likes} Likes</button>
            <button >{dislikes} DisLikes</button>
            <button >0 comments</button>
            <button >rating: {average_rating}</button>
          </div>

          </div>
        </div>

    );
  }
}

export default withRouter(AllArticleView);
