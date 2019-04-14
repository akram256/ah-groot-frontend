import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import { connect } from 'react-redux';

import ArticleView from '../../components/articles/ViewArticleCard';
import {
  getUserArticle,
  getUserPublishedArticles,
} from '../../actions/ArticleAction';
import Header from '../../components/landingPage/Header';
import '../../styles/viewarticle.scss';

export class ViewArticle extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.tabs');
    const options = {
      duration: 300,
      swipeable: true,
    };
    M.Tabs.init(elems, options);
    this.props.getUserArticle();
    this.props.getUserPublishedArticles();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="center">Your articles</div>
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s6">
                  <a className="active" href="#drafts">
                    <div className="draft">
                      <i className="material-icons">edit</i>
                      <span>Drafts</span>
                    </div>
                  </a>
                </li>
                <li className="tab col s6">
                  <a href="#published">
                    <div className="publish">
                      <i className="material-icons">publish</i>
                      <span>Published</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div id="drafts" className="col s12">
              {this.props.userArticles.length > 0 ? (
                this.props.userArticles.map(element => {
                  return (
                    <ArticleView
                      key={element.slug}
                      title={element.title}
                      description={element.description}
                      slug={element.slug}
                    />
                  );
                })
              ) : (
                <span>No draft articles</span>
              )}
            </div>
            <div id="published" className="col s12">
              {this.props.publishedArticles.length > 0 ? (
                this.props.publishedArticles.map(element => {
                  return (
                    <ArticleView
                      key={element.slug}
                      title={element.title}
                      description={element.description}
                      slug={element.slug}
                    />
                  );
                })
              ) : (
                <span>No published article</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getUserArticle: function() {
      dispatch(getUserArticle());
    },
    getUserPublishedArticles: function() {
      dispatch(getUserPublishedArticles());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewArticle);
