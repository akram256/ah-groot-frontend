import ReactQuill from 'react-quill';
import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';

import * as sanitizeHtml from "sanitize-html";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import '../../styles/editor.scss';
import { setBody } from '../../actions/NewArticle';

export class Editor extends Component {
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
        {this.props.showTheme ? (
          <div className="themeSwitcher">
            <div className="switch">
              <span>Editor Mode</span>
              <label>
                Bubble
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  onClick={() => this.handleThemeChange()}
                />
                <span className="lever" />
                Snow
              </label>
            </div>
          </div>
        ) : (
          <span />
        )}
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

const mapStateToProps = state => {
  return {
    ...state,
    body: state.body,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBody: function(body) {
      dispatch(setBody(body));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
