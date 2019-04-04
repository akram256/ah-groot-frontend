import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../actions/ArticleAction';
import ArticleCard from '../../components/landingPage/ArticleCard';


export class AricleCardContainer extends Component {
  componentWillMount() {
    this.props.getArticles();
  }

  render() {
      return(
    <div className="row">
    <div className="col s12">Recent articles</div>
    <div className="col s6">
    {
    (this.props.articles.length > 1) ?
    this.props.articles.slice(0,3).map(element => {
      return (
            <ArticleCard
            key={element.slug}
            title = {element.title}
            description = {element.description}
            body={element.body}
            reading_time={element.reading_time}
            updated_at={element.updated_at}
            />
      )
    }): <span></span>
    }
    </div>
    <div className="col s6">
    {
    (this.props.articles.length > 1) ?
    this.props.articles.slice(3).map(element => {
      return (
            <ArticleCard
            key={element.slug}
            title = {element.title}
            description = {element.description}
            body={element.body}
            reading_time={element.reading_time}
            updated_at={element.updated_at}
            />
      )
    }): <span></span>
    }
    </div>
  </div>
      );
  }
}

const mapStateToProps = state => {
return {
  articles: state.articles,
  categories: state.categories
}};

const mapDispatchToProps = dispatch => {
  return {
    getArticles: function() {
      dispatch(getArticles());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AricleCardContainer);
