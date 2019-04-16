import React, { Component, createElement } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { connect } from 'react-redux';

import * as sanitizeHtml from "sanitize-html";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

export class TagContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", theme: 'snow' };
    this.quillNode;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
    this.props.setBody(html);
  }

componentWillReceiveProps(props){
  if(props.bodyDefaultValue){
    this.quillNode.getEditor().enable(true);
    this.quillNode.getEditor().clipboard.dangerouslyPasteHTML(this.sanitize(props.bodyDefaultValue), "silent");
}
}

 sanitize = (value) => {
      return sanitizeHtml(value, {
          allowedTags: [ "h1", "h2", "h3", "h4", "h5", "h6", "p", "br", "a", "ul", "li", "ol", "s", "u", "em", "pre", "strong", "blockquote", "span" ],
          allowedAttributes: {
              "*": [ "class", "style" ],
              "a": [ "href", "name", "target" ]
          },
          allowedSchemes: [ "http", "https", "ftp", "mailto" ]
      });
  }

  handleThemeChange() {
    let newTheme;
    this.state.theme === 'snow' ? (newTheme = 'bubble') : (newTheme = 'snow');
    this.setState({ theme: newTheme });
  }

  creatorEditorProps = ( ) => {
    if(!this.props.showTheme){
      return {
        theme: 'bubble',
        readOnly: !this.props.showTheme,
      };
    }
    if(this.props.showTheme || this.props.edit ){
      return {theme: this.state.theme,}
    }
  }

  setQuillNode = (node) => {
    this.quillNode = node;
  }
  render() {
    let data = [];
    data = this.processTagData(this.props.tags);
    console.log("hr", this.props.defaultTags)

    let  defaultValue = this.props.defaultTags.length > 0 ?
    {
      value: this.processTagData(this.props.defaultTags),

    }: {
      placeholder: "Add tag and press enter",
    };

    return (
      <div>
        {createElement(ReactQuill, {
          onChange: html => this.handleChange(html),
          // defaultValue: this.props.bodyDefaultValue,
          ref: this.setQuillNode,
          // value:this.state.editorHtml,
          modules: Editor.modules,
          formats: Editor.formats,
          bounds: '.container',
          placeholder: this.props.placeholder,
          ...this.creatorEditorProps(),
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

const mapDispatchToProps = dispatch => {
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
