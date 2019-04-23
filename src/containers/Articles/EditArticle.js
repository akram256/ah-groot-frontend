import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import ReactQuill from 'react-quill';

import TagContainer from './Tag';
import ArticleMetaData from './MetaData';
import { modules, formats } from './QuillModules';
import InnerHeader from '../../components/landingPage/InnerHeader';

import {
  updateUserArticle,
  getSingleleUserArticle,
} from '../../actions/ArticleAction';
import { getAllCategories } from '../../actions/CategoryAction';
import {
  setBody,
  setCategory,
  setDescription,
  setTitle,
} from '../../actions/NewArticle';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../styles/editor.scss';

export class UpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
      body: '',
      category: {},
      tagList: [],
    };
  }

  componentWillMount() {
    this.props.getAllCategories();
    this.props.getSingleleUserArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(props) {
    if (props.editArticle.hasOwnProperty('title')) {
      const { description, title, tagList, category, body } = props.editArticle;
      this.setState({ description, title, tagList, category, body });
    }
  }
  handleThemeChange = () => {
    let newTheme;
    this.state.theme === 'snow' ? (newTheme = 'bubble') : (newTheme = 'snow');
    this.setState({ theme: newTheme });
  };

  handleBodyChange = value => {
    this.setState({ body: value });
  };

  handleCategoryChange = (value, action) => {
    if (action.action === 'select-option') {
      this.setState({ category: value });
    }
  };

  handleOnClick = () => {
    const { description, title, tagList, category, body } = this.state;
    const updateObject = {
      description, title, tagList, category: category.slug, body
    }
    let articleUpdate = {
      ...updateObject
    }
    if(this.props.newArticle.title !== this.state.title
      && this.props.newArticle.title !== ""){
        articleUpdate = {
          ...updateObject,
          title: this.props.newArticle.title
        }
      this.setState({title: this.props.newArticle.title});
    }
    if(this.props.newArticle.description !== this.state.description
    && this.props.newArticle.description !== ""){
      this.setState({description: this.props.newArticle.description});
      articleUpdate = {
        ...updateObject,
        description: this.props.newArticle.description
      }
    }

    setTimeout(() => {
      this.props.updateUserArticle(
        this.props.match.params.slug,
        articleUpdate
      );
    }, 100);
  };

  render() {
    /* istanbul ignore next */
    return (
      <div>
        <InnerHeader />
        <div className="container">
          <div className="center">Edit article</div>
          <div className="row">
            <div className="draft">
              <i className="material-icons">edit</i>
            </div>
            <ArticleMetaData
              titleDefaultValue={this.state.title}
              descriptionDefaultValue={this.state.description}
            />
            <div className="input-field col s6 category">
              <label>Category</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                autoFocus={true}
                getOptionValue={option => option.slug}
                getOptionLabel={option => option.name}
                noOptionsMessage={() => 'category not found'}
                onChange={(value, action) =>
                  this.handleCategoryChange(value, action)
                }
                name="category"
                options={this.props.allCategories}
                placeholder="Select category"
                value={this.state.category}
              />
            </div>
            <TagContainer defaultTags={this.state.tagList} />
            <div className="input-field col s12 editor">
              <label>Body</label>
              <ReactQuill
                theme={this.state.theme}
                value={this.state.body}
                onChange={this.handleBodyChange}
                placeholder="Write something creative..."
                format={formats}
                modules={modules}
              />
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
              className="waves-effect waves-light btn-small save"
              onClick={() => this.handleOnClick()}
            >
              SAVE
            </button>
            <button
              className="waves-effect waves-light btn-small save"
              onClick={() => this.handleOnClick()}
            >
              PUBLISH
            </button>
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
    allCategories: state.allCategories,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    updateUserArticle: function(article) {
      dispatch(updateUserArticle(article));
    },
    getSingleleUserArticle: function(slug) {
      dispatch(getSingleleUserArticle(slug));
    },
    setBody: function(value) {
      dispatch(setBody(value));
    },
    setCategory: function(value) {
      dispatch(setCategory(value));
    },
    setTitle: function(value) {
      dispatch(setTitle(value));
    },
    setDescription: function(value) {
      setDescription(setDescription(value));
    },
    getAllCategories: function() {
      dispatch(getAllCategories());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateArticle);
