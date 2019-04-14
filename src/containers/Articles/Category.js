import React, { Component, createElement } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { getAllCategories } from '../../actions/CategoryAction';
import { setCategory } from '../../actions/NewArticle';

export class SelectCategory extends Component {
  componentWillMount() {
    this.props.getAllCategories();
  }

  onChange = (value, action) => {
    if(action.action === 'select-option'){
      this.props.setCategory(value.slug);
    }
  }


  render() {
    const defaultValue = this.props.defaultCategory ?
    {
      // isDisabled: true,
      value: this.props.defaultCategory,

    }: {
      placeholder: "Select category",
    };

    return (
      createElement(Select,{
        className: "basic-single",
        classNamePrefix: "select",
        isClearable: true,
        isSearchable: true,
        getOptionValue: option => option.slug,
        getOptionLabel: option => option.name,
        noOptionsMessage:() => 'No categories',
        onChange: (value, action) => this.onChange(value, action),
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

const mapDispatchToProps = dispatch => {
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
