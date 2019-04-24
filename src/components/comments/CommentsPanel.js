import React from 'react';
//
import Comment from '../../containers/Comments/Comment';

const CommentsPanel = props => {
  const comments = props.comments ? props.comments : [];
  const commentItems = comments.map(comment => (
    <Comment
      key={comment.id}
      id={comment.id}
      body={comment.body}
      user={comment.user.user}
      createdAt={comment.created_at}
      slug={props.slug}
      getComments={props.getComments}
    />
  ));

  return (
    <div>
      <section className="card">
      <p className="comments-title center-align">Comments</p>
      <hr className="comment-title-divider"></hr>
        <ul>{commentItems}</ul>
      </section>
    </div>
  );
};

export default CommentsPanel;
