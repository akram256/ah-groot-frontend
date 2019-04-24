import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

import TagContainer from './Tag';
import SelectCategory from './Category';
import ArticleMetaData from './MetaData';
import { modules, formats } from './QuillModules';
import InnerHeader from '../../components/landingPage/InnerHeader';

import { postArticle } from '../../actions/ArticleAction';
import { setBody, setCategory } from '../../actions/NewArticle';
import endPoints, { authHeader} from '../../containers/urls';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../styles/editor.scss';

export class CreateArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      theme: 'snow'
    };
  }
  handleOnClick = () => {
    this.props.postArticle(this.props.newArticle);
  }

  handleBodyChange = (value) => {
    this.setState({ body: value});
    this.props.setBody(value);
  }

  handleCategoryChange = (value, action) => {
    if(action.action === 'select-option'){
      this.props.setCategory(value.slug);
    }
  }

  handlePublish = () => {
    const slug = this.props.recentArticlePost.slug;
    if(slug){
      return axios.post(`${endPoints.singleArticle}${slug}/publish/`, {},
      authHeader).
      then(response => {
        M.toast({html: "This article has been successfully published", classes: 'green'});
      }).
      catch(error => {
        return(error);
      });
    } else {
      M.toast({html: "Please save this article and try again", classes: 'red'});
    }
  }

  handleThemeChange = () =>{
    let newTheme;
    this.state.theme === 'snow' ? (newTheme = 'bubble') : (newTheme = 'snow');
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <InnerHeader />
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
              <SelectCategory onChangeCategory={this.handleCategoryChange} defaultCategory={false}/>
            </div>
            <TagContainer defaultTags={[]}/>
            <div className="input-field col s12 editor">
              <label>Body</label>
              <ReactQuill
              theme={this.state.theme}
              value={this.state.body}
              onChange={this.handleBodyChange}
              placeholder="Write something creative..."
              format={formats}
              modules={modules} />
              <div className="themeSwitcher">
            <div className="switch">
              <span>Editor Mode</span>
              <label>
                Bubble
                <input
                  id='checkbox'
                  type="checkbox"
                  defaultChecked="checked"
                  onClick={() => this.handleThemeChange()}
                />
                <span className="lever" />
                Snow
              </label>
            </div>
          </div>
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

export const mapDispatchToProps = dispatch => {
  return {
    postArticle: function(slug, article) {
      dispatch(postArticle(slug, article));
    },
    setBody: function(value) {
      dispatch(setBody(value));
    },
    setCategory: function(value) {
      dispatch(setCategory(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticle);
