import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../actions/ArticleAction';
import ArticleView from '../../components/landingPage/ArticleCard';

export class AricleContainer extends Component {
  componentWillMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <div className="row">
        {this.props.articles.length > 0 ? (
          this.props.articles.map(element => {
            return (
              <ArticleView
                key={element.slug}
                title={element.title}
                description={element.description}
                slug={element.slug}
              />
            );
          })
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categories: state.categories,
  };
};

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
)(AricleContainer);
