import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  bookmarkArticle,
  unBookmarkArticle,
  getAllbookmarkedArticles,
} from '../../actions/bookmarks/BookmarkAction';

export class BookmarkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookMarked: 'unbookmarked',
    };
  }

  componentWillMount() {
    this.props.getAllbookmarkedArticles();
  }

  componentWillReceiveProps(nextProps){
    const { bookmarks } = nextProps;
    const isBookmarkedAlready = bookmarks.find((bookmark)=>(bookmark.slug === nextProps.slug));
    if(isBookmarkedAlready){
        this.setState({ isBookMarked: 'bookmarked' });
    }
  }

  render() {
    return (
      <a
        className={`large material-icons ${this.state.isBookMarked}`}
        onClick={() => {
          if (this.state.isBookMarked === 'unbookmarked') {
              this.setState({ isBookMarked: 'bookmarked' });
            this.props.bookmarkArticle(this.props.slug);
          } else {
              this.setState({ isBookMarked: 'unbookmarked' });
            this.props.unBookmarkArticle(this.props.slug);
          }
        }}
      >
        bookmark
      </a>
    );
  }
}

export const mapStateToProps = state => {
   /* istanbul ignore next */
  return {
    ...state,
    bookmark: state.bookmark,
    unbookmark: state.unbookmark,
    bookmarks: state.bookmarks,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    bookmarkArticle: function(slug) {
      dispatch(bookmarkArticle(slug));
    },
    unBookmarkArticle: function(slug) {
      dispatch(unBookmarkArticle(slug));
    },
    getAllbookmarkedArticles: function() {
      dispatch(getAllbookmarkedArticles());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkButton);
