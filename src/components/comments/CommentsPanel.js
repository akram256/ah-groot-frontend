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
      likes={comment.likes}
      slug={props.slug}
      getComments={props.getComments}
    />
  ));

  return (
    <div>
      <section className="comments card">
        <ul>{commentItems}</ul>
      </section>
    </div>
  );
};

export default CommentsPanel;
