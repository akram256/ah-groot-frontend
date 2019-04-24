import React, { Component, createElement } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { connect } from 'react-redux';

import { getTags } from '../../actions/TagAction';
import { addTags } from '../../actions/NewArticle';

export class TagContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  componentWillMount() {
    this.props.getTags();
  }

  handleChange = (newValue) => {
    const data = newValue.map(object => {
      return object.value;
    });
    this.props.addTags(data);
  };

  processTagData = (tags) => {
    if (tags) {
      return tags.map(item => {
        return {
          value: item,
          label: item,
        };
      });
    }
  }
  render() {
    let data = [];
    data = this.processTagData(this.props.tags);

    let  defaultValue = this.props.defaultTags.length > 0 ?
    {
      value: this.processTagData(this.props.defaultTags),
      isDisabled: true

    }: {
      placeholder: "Add tag and press enter",
    };

    return (
      <div className="input-field col s6 tags">
        <label>Tags</label>
        {createElement(CreatableSelect,{
          className: "basic-multi",
          classNamePrefix: "select",
          isClearable: true,
          isSearchable:true,
          onChange:(value, action) => this.handleChange(value, action),
          name: "tags",
          isMulti:true,
          options:data,
          ...defaultValue
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    tags: state.tags,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getTags: function() {
      dispatch(getTags());
    },
    addTags: function(tags) {
      dispatch(addTags(tags));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagContainer);
