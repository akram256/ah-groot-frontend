import React from 'react';
import '../../styles/comments.scss';

const ConfirmDeleteComment = props => {
  return (
    <div className="comment-delete center-align">
      <p className="comment-delete">Are you sure you want to delete this comment?</p>
      <button className="btn cancel" onClick={props.toggleConfirmDelete}>
        Cancel
      </button>
      <button className="btn delete" onClick={props.deleteComment}>
        Delete
      </button>
    </div>
  );
};

export default ConfirmDeleteComment;
