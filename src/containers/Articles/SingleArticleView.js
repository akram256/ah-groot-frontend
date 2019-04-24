import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import followReducer from '../../reducers/profile/followuserReducer'
import { modules, formats } from './QuillModules';
import InnerHeader from '../../components/landingPage/InnerHeader';
import CommentContainer from '../../containers/Comments/CommentContainer';
import RatingContainer from '../../containers/RatingContainer';
import ReportingContainer from '../../containers/report/ReportingContainer';
import dislikearticle from '../../actions/DislikeAction';
import BookmarkButton from '../../containers/Bookmark/BookmarkButton';
import likearticle from '../../actions/LikeAction';
import followuser from '../../actions/profile/followActions'
import followerlist from '../../actions/profile/followersActions'
import unfollowuser from '../../actions/profile/unfollowActions'
import { getSingleleUserArticle } from '../../actions/ArticleAction';
import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/singlearticle.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../styles/rating.scss';
import '../../styles/report.scss';
import '../../styles/rating.scss'
import RetrieveProfileComponent from '../../components/profile/retrieveProfile'
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
      read_stats: 0,
      author: {}
    };
  }

  /* istanbul ignore next */
  handlelike = slug => {
    /* istanbul ignore next */
    this.props.likearticle(slug);
  }
  handlefollow = (user, hasFollowed) => {
    hasFollowed ? this.props.unfollowuser(user) : this.props.followuser(user)
  }

  /* istanbul ignore next */
  handledislike = slug => {
    /* istanbul ignore next */
    this.props.dislikearticle(slug);
  };

  hasFollowed = () => {
    console.log("ukkk ",this.props.followers);
    const following = this.props.followers.following;

    if (following) {
      const should = following.length > 0 ? 
      following.find(single => single.user === sessionStorage.getItem("user")) : undefined;

      return should ? true : false;
    } 

  }
  handlefollowers = (user) => {
    this.props.followerlist(user)
      }

  componentDidMount() {

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      Modal.init(elems);
    })
  }

  componentWillMount() {
    this.props.getSingleleUserArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(props) {
    if (props.editArticle.hasOwnProperty('title')) {
      const {
        description,
        title,
        tagList,
        category,
        body,
        likes,
        dislikes,
        average_rating,
        read_stats,
        author
      } = props.editArticle;
      this.setState({
        description,
        title,
        tagList,
        category,
        body,
        likes,
        dislikes,
        average_rating,
        read_stats,
        author
      });
      if (this.state.title === "") this.props.followerlist(author.user)
    }
  }
 


  /* istanbul ignore next */
  render() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    const { handlelike, handledislike } = this.props;
    console.log(this.state.author.user)
    return (
      <div>
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

              <div id="modal1" className="modal">
                <div className="modal-content">

                  <RetrieveProfileComponent
                    user={this.state.author.user}
                    timestamp={this.state.author.timestamp}
                    full_name={this.state.author.full_name}
                    bio={this.state.author.bio}
                    image={this.state.author.image}
                    followers={this.state.author.follower_count}
                    following={this.state.author.following_count}
                    handlefollow={this.handlefollow}
                    shouldHiveStuff={true}
                    hasFollowed={this.hasFollowed()}
                    handlefollowers={this.handlefollowers}

                  />

                </div>
                <div class="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                </div>
              </div>


              <a className="waves-effect waves-light  modal-trigger" href="#modal1" >By {this.state.author.user}</a>

            </div>
            {this.state.author.user === sessionStorage.user ? (
                <p className="read-stats">This article has been read: {this.state.read_stats} times</p>
              ) : (
                <div />
              )}

            <div className="col s12 read">
              <ReactQuill
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
                <label className="outter majorReportbtn">
                  <ReportingContainer slug={this.props.match.params.slug} />
                </label>
                <label className="outter rater">
                  <RatingContainer slug={this.props.match.params.slug} />
                </label>
                <label className="outter rateStar">
                  <span className="rating-digit">{ this.state.average_rating }</span>
                  <i className="material-icons small">star</i>
                  </label>
                <label className="bookmark button">
                  <BookmarkButton slug={this.props.match.params.slug} />
                </label>
              </div>

            {sessionStorage.token ? (
              <CommentContainer slug={this.props.match.params.slug} />
            ) : (
              <span />
            )}
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
    followers: state.followReducer
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
    followuser: function (user) {
      dispatch(followuser(user));
    },
    followerlist: function (user) {
      dispatch(followerlist(user));
    },
    unfollowuser: function (user) {
      dispatch(unfollowuser(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArticleView);
