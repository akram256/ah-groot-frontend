import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getComments,
  postComment,
  updateComment,
  deleteComment,
} from '../../actions/commentAction';
import CommentForm from '../../components/comments/CommentForm';
import CommentEditForm from '../../components/comments/CommentEditForm';
import CommentsPanel from '../../components/comments/CommentsPanel';

export class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllComments: false,
      displayCommentForm: false,
      displayEditCommentForm: false,
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

  toggleCommentEditForm = (id) => {
    this.setState({
      displayEditCommentForm: !this.state.displayEditCommentForm,
    });
  };

  displayAllComments = () => {
    this.setState({
      displayAllComments: !this.state.displayAllComments,
    });
  };

  commentTextChange = event =>
    this.setState({ commentText: event.target.value });

  createComment = event => {
    event.preventDefault();
    const commentText = this.state.commentText;
    this.props.postComment(commentText, this.props.slug);
    this.setState({ displayCommentForm: false, displayAllComments: true });
  };

  updateComment = event => {
    this.setState({ displayCommentForm: false });
    this.props.updateComment(comment, this.props.slug);
  };

  deleteComment = event => {
    this.setState({ displayCommentForm: false });
    this.props.deleteComment(comment, this.props.slug);
  };

  render() {
    return (
      <div className="comments">
        <button className="waves-effect btn" onClick={this.displayAllComments}>
          View Comments
        </button>
        <button className="waves-effect btn" onClick={this.toggleCommentForm}>
          Add Comment
        </button>

        {this.state.displayEditCommentForm ? (
          <div>
            <CommentEditForm
              handleSubmit={this.updateComment}
              toggleCommentEditForm={this.toggleCommentEditForm}
            />
          </div>
        ) : (
          <div></div>
        )}

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

        {this.state.displayAllComments ? (
          <div>
            <CommentsPanel
              comments={this.props.comments}
              handleSubmit={this.updateComment}
              toggleEditForm={this.toggleCommentEditForm}
              displayEditForm={this.state.displayCommentEditForm}
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
  updateComment,
  deleteComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
