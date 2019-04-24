import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';

import { modules, formats } from './QuillModules';
import InnerHeader from '../../components/landingPage/InnerHeader';
import CommentContainer from '../../containers/Comments/CommentContainer';
import RatingContainer from '../../containers/RatingContainer';

import likearticle from '../../actions/LikeAction'
import dislikearticle from '../../actions/DislikeAction'
import { getSingleleUserArticle } from '../../actions/ArticleAction';

import '../../styles/singlearticle.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../styles/rating.scss'


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

  handlelike = (slug) => {
    this.props.likearticle(slug);
  }

  handledislike = (slug) => {
    this.props.dislikearticle(slug);
  }

  componentWillMount() {
    this.props.getSingleleUserArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(props) {
    if (props.editArticle.hasOwnProperty('title')) {
      const { description, title, tagList, category, body, likes, dislikes, average_rating } = props.editArticle;
      this.setState({ description, title, tagList, category, body, likes, dislikes, average_rating });
    };
  }

  render() {
    const { handlelike, handledislike } = this.props;
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    return (
      <div>
        <div>
          <InnerHeader />
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
                  <label className="outter rater"><RatingContainer slug={this.props.match.params.slug} />
                  </label>
                  <label className="outter rateStar">
                  <span className="rating-digit">{ this.state.average_rating }</span>
                  <i className="material-icons small">star</i>
                  </label>
                    
              </div>
            </div>
            <CommentContainer slug={this.props.match.params.slug} />
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
