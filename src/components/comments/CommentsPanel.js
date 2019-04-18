import React from 'react';
import Comment from './Comment';

const CommentsPanel = props => {
  const comments = props.comments;
  const commentItems = comments.map(comment => (
    <Comment
      key={comment.id.toString()}
      id={comment.id}
      body={comment.body}
      user={comment.user.user}
      createdAt={comment.created_at.toString()}
      updateComment={props.updateComment}
      toggleEditForm={props.toggleEditForm}
      displayEditForm={props.displayEditForm}
      inputValue=""
      handleSubmit={props.handleSubmit}
    />
  ));

  return (
    <div>
      <section className="card">
        <ul>{commentItems}</ul>
      </section>
    </div>
  );
};

export default CommentsPanel;
