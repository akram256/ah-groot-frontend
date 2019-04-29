import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';

import { setDescription, setTitle } from '../../actions/NewArticle';

export class ArticleMetaData extends Component {
  handleChangeTitle = (event) => {
    event.preventDefault()
    this.props.setTitle(event.target.value);
  };

  handleChangeDescription = (event) => {
    event.preventDefault()
    this.props.setDescription(event.target.value);
  };

  render() {
    let setValue;
    setValue = this.props.descriptionDefaultValue ?
      {
        value: this.props.descriptionDefaultValue
      }
      :
      {
        placeholder: 'Description'
      };
    return (
      <div>
        <div className="input-field col s6">
          <input className='active' defaultValue={this.props.titleDefaultValue} placeholder="Title" id="title" type="text" onChange={(event) => this.handleChangeTitle(event)} />
          <label className='active' htmlFor="title">Title</label>
        </div>
        <div className="input-field col s6">
        {createElement('textarea',{
          id:"textarea1",
          className:"materialize-textarea",
          onChange: (event) => this.handleChangeDescription(event),
          ...setValue
        },)}
          <label className='active' htmlFor="textarea1">Description</label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    title: state.title,
    description: state.description,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setDescription: function(describe) {
      dispatch(setDescription(describe));
    },
    setTitle: function(title) {
        dispatch(setTitle(title));
      },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleMetaData);
