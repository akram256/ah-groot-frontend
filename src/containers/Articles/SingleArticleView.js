import React, { Component } from 'react';
import { connect } from 'react-redux';

import Editor from './QuillEditor';
import Header from '../../components/landingPage/Header';
import CommentContainer from '../../containers/Comments/CommentContainer';

import { getSingleleUserArticle } from '../../actions/ArticleAction';

import '../../styles/singlearticle.scss';

export class SingleArticleView extends Component {
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
    this.setState({ description, title, tagList, category , body });
  };
}

  render() {
    return (
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
            this.state.tagList.map(item=>{
              return(
                <div key={item} className="chip">
                  {item}
                </div>
              );
            }): (<span></span>)
            }
            </div>
            <div className="col s12 read">
              <Editor showTheme={false} bodyDefaultValue={this.state.body} />
            </div>
          </div>
          <CommentContainer slug={this.props.match.params.slug}/>
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
    getSingleleUserArticle: function(slug) {
      dispatch(getSingleleUserArticle(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArticleView);
