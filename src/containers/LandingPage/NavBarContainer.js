import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeCategories } from '../../actions';

export class NavBarContainer extends Component {
  componentWillMount() {
    this.props.storeCategories();
  }

  render() {
    return this.renderCategories();
  }

  renderCategories = () => {
    let categoryComponents = this.props.categories.slice(0, 6).map(element => {
      return (
        <li key={element.slug}>
          <a href="#">{element.name}</a>
        </li>
      );
    });
    if (this.props.categories.length > 6) {
      categoryComponents.push(
        <li key="more">
          <a href="#">More</a>
        </li>
      );
      return categoryComponents;
    }
    if (this.props.categories.length <= 6) {
    return categoryComponents;
    }
  };
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeCategories: function() {
      dispatch(storeCategories());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer);
