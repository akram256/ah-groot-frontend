import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

import TagContainer from './Tag';
import SelectCategory from './Category';
import ArticleMetaData from './MetaData';
import Editor from './QuillEditor';
import Header from '../../components/landingPage/Header';

import { postArticle } from '../../actions/ArticleAction';
import endPoints, { authHeader} from '../../containers/urls';

export class CreateArticle extends Component {
  handleOnClick = () => {
    this.props.postArticle(this.props.newArticle);
  }
  handlePublish = () => {
    const slug = this.props.recentArticlePost.slug;
    if(slug){
      axios.post(`${endPoints.singleArticle}${slug}/publish/`, {},
      authHeader).
      then(response=>{
        console.log(response);
        M.toast({html: "This article has been successfully published", classes: 'green'});
      }).
      catch(error=>{
        console.log(error);
      });
    } else {
      M.toast({html: "Please save this article and try again", classes: 'red'});
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="center">Create an article</div>
          <div className="row">
            <div className="draft">
              <i className="material-icons">edit</i>
              <span>Draft</span>
            </div>
            <ArticleMetaData />
            <div className="input-field col s6 category">
              <label>Category</label>
              <SelectCategory />
            </div>
            <TagContainer defaultTags={[]}/>
            <div className="input-field col s12 editor">
              <label>Body</label>
              <Editor showTheme={true} placeholder={'Write something creative...'} />
            </div>
            <button
            className="waves-effect waves-light btn-small"
            onClick={() => this.handleOnClick()}>
              SAVE
            </button>
            <button
            className="waves-effect waves-light btn-small"
            onClick={() => this.handlePublish()}>
              PUBLISH
            </button>
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
    postArticle: function(slug, article) {
      dispatch(postArticle(slug, article));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticle);
