import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagContainer from './Tag';
import SelectCategory from './Category';
import ArticleMetaData from './MetaData';
import Editor from './QuillEditor';
import Header from '../../components/landingPage/Header';

import { updateUserArticle, getSingleleUserArticle } from '../../actions/ArticleAction';

export class UpdateArticle extends Component {
constructor(props){
  super(props);
  this.state = {
    description: '',
    title: '',
    body:'',
    category: {},
    tagList: []
  }
}

componentWillMount(){
  this.props.getSingleleUserArticle(this.props.match.params.slug);
}

componentWillReceiveProps(props){
  if(props.editArticle.hasOwnProperty('title')){
    const {description, title, tagList, category, body} = props.editArticle;
    this.setState({ description, title, tagList, category , body});
  };

}
  handleOnClick = () => {
    const requestData = JSON.stringify(this.props.newArticle);
    console.log(requestData);
    this.props.updateUserArticle(this.props.match.params.slug, this.props.newArticle);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="center">Edit article</div>
          <div className="row">
            <div className="draft">
              <i className="material-icons">edit</i>
            </div>
            <ArticleMetaData
            titleDefaultValue={this.state.title}
            descriptionDefaultValue={this.state.description}/>
            <div className="input-field col s6 category">
              <label>Category</label>
              <SelectCategory
              //  defaultCategory={this.state.category}
               />
            </div>
            <TagContainer defaultTags={this.state.tagList} />
            <div className="input-field col s12 editor">
              <label>Body</label>
              <Editor showTheme={true} bodyDefaultValue={this.state.body} />
            </div>
            <button
            className="waves-effect waves-light btn-small save"
            onClick={() => this.handleOnClick()}>
              SAVE
            </button>
            <button
            className="waves-effect waves-light btn-small save"
            onClick={() => this.handleOnClick()}>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserArticle: function(article) {
      dispatch(updateUserArticle(article));
    },
    getSingleleUserArticle: function(slug) {
      dispatch(getSingleleUserArticle(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateArticle);
