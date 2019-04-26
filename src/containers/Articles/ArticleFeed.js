import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AllArticleView from '../../components/articles/AllArticleView';
import AllBookmarks from '../../containers/Bookmark/AllBookmarks';
import { getAllArticles } from '../../actions/ArticleAction';
import InnerHeader from '../../components/landingPage/InnerHeader';
import ProfileContainer from '../profile/Profile';
import { fetchOriginal, getNext } from '../../actions/paginationAction';
import Search from '../../components/landingPage/search';

import '../../styles/viewarticle.scss';

export class ArticleFeed extends Component {
  constructor(props) {
    super(props);
    let { history } = this.props;
    this.state = {};
  }

  componentWillMount() {
    this.props.getAllArticles();
    this.props.fetchOriginal();
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    const options = {
      direction: 'left',
      hoverEnabled: false,
    };
    M.FloatingActionButton.init(elems, options);
  }

  fetchData = event => {
    event.preventDefault();
    this.props.fetchNext(localStorage.next);
  };

  fetchPrevious = event => {
    event.preventDefault();
    this.props.fetchNext(localStorage.previous);
  };

  logout=()=>{
    sessionStorage.clear();
    /* istanbul ignore next */
    window.location.href="/"
  }

  /* istanbul ignore next */
  render() {
    return (
      <div>
        <InnerHeader logout={this.logout} />
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large">
            <i className="large material-icons">more_horiz</i>
          </a>
          <ul>
            <li onClick={() => this.props.history.push('/me/articles')}>
              <a className="btn-floating green">
                <i className="material-icons">list</i>
              </a>
            </li>
            <li onClick={() => this.props.history.push('/new-article')}>
              <a className="btn-floating blue">
                <i className="material-icons">mode_edit</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="container feed">
          <div className="center">Your article feed</div>
          <div className="row">
            <div className="col s4">
              <ProfileContainer />
            </div>
            <div className="col s5">
              {this.props.paginateArticles.length === 0
                ? this.props.firstArticles.map(element => {
                    return (
                      <AllArticleView
                        key={element.slug}
                        title={element.title}
                        description={element.description}
                        slug={element.slug}
                        average_rating={element.average_rating}
                        user={element.author.user}
                        reading_time={element.reading_time}
                      />
                    );
                  })
                : this.props.paginateArticles.map(element => {
                    return (
                      <AllArticleView
                        key={element.slug}
                        title={element.title}
                        description={element.description}
                        slug={element.slug}
                        average_rating={element.average_rating}
                        user={element.author.user}
                        reading_time={element.reading_time}
                      />
                    );
                  })}
                  <div> 
              <button className="btn right" onClick={this.fetchData}>
                Next
              </button>
            </div>
            <div>
              <button className="btn left" onClick={this.fetchPrevious}>
                Previous
              </button>
            </div>
          </div>
          <div className='col s3'>
                <Search /><br></br>
                <h6>Bookmarks</h6>
                <AllBookmarks/>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return state;
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
  return {
    getAllArticles: function() {
      dispatch(getAllArticles());
    },
    fetchOriginal: function() {
      dispatch(fetchOriginal());
    },
    fetchNext: function(url) {
      dispatch(getNext(url));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleFeed)
);
