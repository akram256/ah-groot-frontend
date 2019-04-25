import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments, postComment } from '../../actions/commentAction';
import CommentForm from '../../components/comments/CommentForm';
import CommentsPanel from '../../components/comments/CommentsPanel';

export class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCommentForm: false,
      commentText: '',
    };
  }

  componentWillMount() {
    this.props.getComments(this.props.slug);
  }

  toggleCommentForm = () => {
    this.setState({
      displayCommentForm: !this.state.displayCommentForm,
    });
  };

  commentTextChange = event =>
    this.setState({ commentText: event.target.value });

  createComment = event => {
    event.preventDefault();
    const commentText = this.state.commentText;
    this.props.postComment(commentText, this.props.slug);
    this.setState({ displayCommentForm: false });
    document.location.reload(true);
  };

  render() {
    return (
      <div className="comments">
        <div>
          <CommentsPanel
            comments={this.props.comments}
            slug={this.props.slug}
            getComments={this.props.getComments}
          />
        </div>

        <button className="btn comment-add" onClick={this.toggleCommentForm}>
          Add Comment
        </button>

        {this.state.displayCommentForm ? (
          <div>
            <CommentForm
              handleSubmit={this.createComment}
              commentText={this.state.commentText}
              commentTextChange={this.commentTextChange}
              inputValue="Post Comment"
              textareaLabel="Write your comment here"
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

const mapDispatchToProps = {
  getComments,
  postComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
