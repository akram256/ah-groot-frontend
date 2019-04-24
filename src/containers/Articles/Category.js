import React, { Component, createElement } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { getAllCategories } from '../../actions/CategoryAction';
import { setCategory } from '../../actions/NewArticle';

export class SelectCategory extends Component {
  componentWillMount() {
    this.props.getAllCategories();
  }

  render() {
    const defaultValue = this.props.defaultCategory ?
    {
      defaultValue: this.props.defaultCategory,

    }: {
      placeholder: "Select category",
    };

    /* istanbul ignore next */
    return (
      createElement(Select, {
        className: "basic-single",
        classNamePrefix: "select",
        isClearable: true,
        isSearchable: true,
        getOptionValue: option => option.slug,
        getOptionLabel: option => option.name,
        noOptionsMessage:() => 'category not found',
        onChange: (value, action) => this.props.onChangeCategory(value, action),
        name: "category",
        options: this.props.allCategories,
        ...defaultValue
      })
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allCategories: state.allCategories,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: function() {
      dispatch(getAllCategories());
    },
    setCategory: function(category){
      dispatch(setCategory(category))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategory);
