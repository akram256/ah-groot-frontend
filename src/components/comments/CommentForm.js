import React from 'react';
import '../../styles/comments.scss';

const CommentForm = props => {
  return (
    <div className="comment-create-form">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                value={props.commentText}
                onChange={props.commentTextChange}
              />
              <label htmlFor="textarea1" className="comment-label">
                {props.textareaLabel}
              </label>
            </div>
          </div>
          <input
            type="submit"
            value={props.inputValue}
            className="btn right"
            onClick={props.handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
