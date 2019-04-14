import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AllArticleView from '../../components/articles/AllArticleView';
import { getAllArticles } from '../../actions/ArticleAction';
import Header from '../../components/landingPage/Header';

import '../../styles/viewarticle.scss';

export class ArticleFeed extends Component {
  constructor(props) {
    super(props);
    let { history } = this.props;
  }
  componentDidMount() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    const options = {
      direction: 'right',
      hoverEnabled: false
    };
    M.FloatingActionButton.init(elems, options);
    this.props.getAllArticles();
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large">
            <i className="large material-icons">more_horiz</i>
          </a>
          <ul>
            <li onClick={()=>this.props.history.push('/me/articles')}>
              <a className="btn-floating green">
                <i className="material-icons">list</i>
              </a>
            </li>
            <li onClick={()=>this.props.history.push('/new-article')}>
              <a className="btn-floating blue">
                <i className="material-icons">mode_edit</i>
              </a>
            </li>
          </ul>
        </div>
          <div className="center">Your article feed</div>
          <div className="row">
            <div className="col s12">
              {this.props.allArticles.length > 0 ? (
                this.props.allArticles.map(element => {
                  return (
                    <AllArticleView
                      key={element.slug}
                      title={element.title}
                      description={element.description}
                      slug={element.slug}
                      average_rating={element.average_rating}
                    />
                  );
                })
              ) : (
                <span ></span>
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
    getAllArticles: function() {
      dispatch(getAllArticles());
    },
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleFeed));


