import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';

import Header from '../../components/landingPage/Header';
import { modules, formats } from './QuillModules';
import CommentContainer from '../../containers/Comments/CommentContainer';

import likearticle from '../../actions/LikeAction'
import dislikearticle from '../../actions/DislikeAction'
import { getSingleleUserArticle } from '../../actions/ArticleAction';

import '../../styles/singlearticle.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import AllArticleView from '../../components/articles/AllArticleView'

export class SingleArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
      body: '',
      slug: '',
      category: {},
      tagList: []
    }
  }
  handlelike = (slug) => {
    this.props.likearticle(slug);
    const { likeColor, dislikeColor } = this.state;
    if (slug.likes > 1) {
      this.setState(
        {
          likeColor: '#808080'
        },
        () => {
          localStorage.setItem('likeColor', JSON.stringify(likeColor));
        }
      );
    } else {
      this.setState(
        {
          likeColor: '#3f51b5',
          dislikeColor: '#808080'
        },
        () => {
          localStorage.setItem('dislikeColor', JSON.stringify(dislikeColor));
          localStorage.setItem('likeColor', JSON.stringify(likeColor));
        }
      );
    }
  }

  handledislike = (slug) => {
    this.props.dislikearticle(slug);
  }

  componentWillMount() {
    this.props.getSingleleUserArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(props) {
    if (props.editArticle.hasOwnProperty('title')) {
      const { description, title, tagList, category, body, likes, dislikes } = props.editArticle;
      this.setState({ description, title, tagList, category, body, likes, dislikes });
    };
  }

  render() {
    const { handlelike, handledislike } = this.props;
    return (
      <div>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <h2>{this.state.title}</h2>
              <h5 className="view-article-description">{this.state.description} </h5>
              <div className="category">
                Category:
            <span className="chip">{this.state.category.name}</span>
              </div>
              <div>
                Tags:
            {(this.state.tagList.length > 0) ?
                  this.state.tagList.map(item => {
                    return (

                      <div key={item} className="chip">

                        {item}
                      </div>
                    );
                  }) : (<span></span>)
                }
              </div>
              <div className="col s12 read">
                <Editor showTheme={false} bodyDefaultValue={this.state.body} />
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
              <span>
                <button slug={this.props.match.params.slug} className="material-icons left" onClick={(event) => {
                  const slug = event.currentTarget.getAttribute('slug');
                  this.handlelike(slug)
                }
                }>thumb_up</button>
                <p className="left">{this.state.likes} Likes</p>
                <button slug={this.props.match.params.slug} className="material-icons left" onClick={(event) => {
                  const slug = event.currentTarget.getAttribute('slug'); this.handledislike(slug)
                }}>thumb_down</button>
                <p className="left">{this.state.dislikes} DisLikes</p>
              </span>
            </div>
            <CommentContainer slug={this.props.match.params.slug} />
          </div>
        </div>
       
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    editArticle: state.editArticle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleleUserArticle: function (slug) {
      dispatch(getSingleleUserArticle(slug));
    },
    likearticle: function (slug) {
      dispatch(likearticle(slug));
    },
    dislikearticle: function (slug) {
      dispatch(dislikearticle(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArticleView);
