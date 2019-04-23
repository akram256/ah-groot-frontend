import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';

import { modules, formats } from './QuillModules';
import InnerHeader from '../../components/landingPage/InnerHeader';
import CommentContainer from '../../containers/Comments/CommentContainer';
import RatingContainer from '../../containers/RatingContainer';
import ReportingContainer from '../../containers/report/ReportingContainer';
import dislikearticle from '../../actions/DislikeAction'
import BookmarkButton from '../../containers/Bookmark/BookmarkButton';

import likearticle from '../../actions/LikeAction';
import { getSingleleUserArticle } from '../../actions/ArticleAction';

import '../../styles/singlearticle.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../styles/rating.scss';
import '../../styles/report.scss';

export class SingleArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
      body: '',
      slug: '',
      category: {},
      tagList: [],
      average_rating: 0,
    }
  }

   /* istanbul ignore next */
  handlelike = slug => {
     /* istanbul ignore next */
    this.props.likearticle(slug);
  };

   /* istanbul ignore next */
  handledislike = slug => {
     /* istanbul ignore next */
    this.props.dislikearticle(slug);
  };

  componentWillMount() {
    this.props.getSingleleUserArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(props) {
    if (props.editArticle.hasOwnProperty('title')) {
      const { description, title, tagList, category, body, likes, dislikes, average_rating } = props.editArticle;
      this.setState({ description, title, tagList, category, body, likes, dislikes, average_rating });
    };
    }

/* istanbul ignore next */
  render() {
    const { handlelike, handledislike } = this.props;
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    return (
        <div>
          <InnerHeader />
          <div className="container">
            <div className="row">
              <h2>{this.state.title}</h2>
              <h5 className="view-article-description">
                {this.state.description}{' '}
              </h5>
              <div className="category">
                Category:
                <span className="chip">{this.state.category.name}</span>
              </div>
              <div>
                Tags:
                {this.state.tagList.length > 0 ? (
                  this.state.tagList.map(item => {
                    return (
                      <div key={item} className="chip">
                        {item}
                      </div>
                    );
                  })
                ) : (
                  <span />
                )}
              </div>
            </div>
            <div className="col s12 read">
              <ReactQuill
              className="editor"
              readOnly={true}
              theme='bubble'
              value={this.state.body}
              format={formats}
              modules={modules} />

            <div className="card-action">
                  <label className="outter">
                  <button slug={this.props.match.params.slug} className="material-icons like" onClick={(event) => {
                    const slug = event.currentTarget.getAttribute('slug');
                    this.handlelike(slug)
                  }
                  }>thumb_up</button><span className="votes">{this.state.likes}</span>
                  </label>
                  <label className="outter">
                  <button slug={this.props.match.params.slug} className="material-icons like" onClick={(event) => {
                    const slug = event.currentTarget.getAttribute('slug'); this.handledislike(slug)
                                   }}>thumb_down</button><span className="votes">{this.state.dislikes}</span>

                  </label>
                  <label className="outter majorReportbtn"><ReportingContainer slug={this.props.match.params.slug} /></label>
                  <label className="outter rater"><RatingContainer slug={this.props.match.params.slug} /></label>
                className="editor"
                readOnly={true}
                theme="bubble"
                value={this.state.body}
                format={formats}
                modules={modules}
              />
              <div className="card-action">
                <label className="outter">
                  <button
                    slug={this.props.match.params.slug}
                    className="material-icons like"
                    onClick={event => {
                      const slug = event.currentTarget.getAttribute('slug');
                      this.handlelike(slug);
                    }}
                  >
                    thumb_up
                  </button>
                  <span className="votes">{this.state.likes}</span>
                </label>
                <label className="outter">
                  <button
                    slug={this.props.match.params.slug}
                    className="material-icons like"
                    onClick={event => {
                      const slug = event.currentTarget.getAttribute('slug');
                      this.handledislike(slug);
                    }}
                  >
                    thumb_down
                  </button>
                  <span className="votes">{this.state.dislikes}</span>
                </label>
                <label className="bookmark button">
                    <BookmarkButton slug={this.props.match.params.slug}/>
                </label>
                <label className="outter rater"><RatingContainer slug={this.props.match.params.slug} />
                  </label>
                  <label className="outter rateStar">
                  <span className="rating-digit">{ this.state.average_rating }</span>
                  <i className="material-icons small">star</i>
                  </label>


              </div>
              <CommentContainer slug={this.props.match.params.slug} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

 /* istanbul ignore next */
const mapStateToProps = state => {
  /* istanbul ignore next */
  return {
    ...state,
    editArticle: state.editArticle,
  };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
  return {
    /* istanbul ignore next */
    getSingleleUserArticle: function(slug) {
      dispatch(getSingleleUserArticle(slug));
    },
    /* istanbul ignore next */
    likearticle: function(slug) {
      dispatch(likearticle(slug));
    },
    /* istanbul ignore next */
    dislikearticle: function(slug) {
      dispatch(dislikearticle(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArticleView);
