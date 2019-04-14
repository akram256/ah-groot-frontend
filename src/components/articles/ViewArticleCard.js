import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import endPoints, {authHeader} from '../../containers/urls';
import axios from 'axios';

export class ArticleView extends Component {
  constructor(props) {
    super(props);
    let { history } = this.props;
  }

  deleteArticle = slug => {
    axios
      .delete(`${endPoints.singleArticle}${slug}/`, authHeader)
      .then(function(response) {
        if (response.status === 204) {
          M.toast({ html: 'This article has been deleted ', classes: 'green' });
          Window.location.reload();
        }
      })
      .catch(function(error) {
        return;
      });
  };

  editArticle = slug => {
    this.props.history.push(`/me/article/${slug}/edit`);
  }

  render() {
    const { title, description, slug } = this.props;
    return (
      <div className="col s12 custom">
        <div className="card grey lighten-5">
          <div className="card-content black-text">
            <span className="card-title truncate">{title}</span>
            <span className="card-description truncate">{description}</span>
          </div>
          <div className="card-action">
            <span slug={slug} className='edit-artilce' onClick={() => this.editArticle(slug)}>
              <i className="material-icons">edit</i>
            </span>
            <span slug={slug} className='delete-artilce'onClick={() => this.deleteArticle(slug)}>
            <i className="material-icons">delete</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleView);
