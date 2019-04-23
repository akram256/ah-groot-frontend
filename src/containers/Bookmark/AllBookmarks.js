import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllbookmarkedArticles } from '../../actions/bookmarks/BookmarkAction';

export class AllBookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
  }

  componentWillMount() {
    this.props.getAllbookmarkedArticles();
  }

  componentWillReceiveProps(nextProps) {
    const { bookmarks } = nextProps;
    this.setState({ bookmarks });
  }

  render() {
    return (
      <div>
        {this.state.bookmarks.length > 0 ? (
          this.state.bookmarks.map(element => {
            return (
              <div key={element.slug}>
                 <Link className="bookmark-link" to={`/article/${element.slug}/view`}>
                  {element.article_title}
                </Link>
              </div>
            );
          })
        ) : (
          <span>No bookmarks</span>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    ...state,
    bookmarks: state.bookmarks,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getAllbookmarkedArticles: function() {
      dispatch(getAllbookmarkedArticles());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBookmarks);
