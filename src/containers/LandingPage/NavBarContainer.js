import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeCategories } from '../../actions';

export class NavBarContainer extends Component {
  componentWillMount() {
    this.props.storeCategories();
  }

  render() {
    return this.props.categories.map(element => {
      return (
        <li key={element.slug}>
          <a href="#">{element.name}</a>
        </li>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categories: state.categories
  }};

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
