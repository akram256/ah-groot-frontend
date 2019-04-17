import React from 'react';
import CommentCreateForm from './CommentForm';

const Comment = props => {
  return (
    <div className="comment-container">
      <div className="comment-owner">{props.user}</div>
      <div className="comment-timestamp">{props.createdAt}</div>
      <span>
        <i
          className="small material-icons right comment-update"
          onClick={props.deleteComment}
        >
          delete
        </i>
      </span>
      <span>
        <i
          className="small material-icons right comment-update"
          onClick={props.toggleEditForm}
        >
          edit
        </i>
      </span>
      <div className="comment-body card-panel">
        <div className="comment-body">{props.body}</div>
      </div>
    </div>
  );
};

export default Comment;
