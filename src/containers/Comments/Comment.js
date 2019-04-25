import React, { Component } from 'react';
import {
  updateComment,
  deleteComment,
  likeComment,
} from '../../actions/commentAction';
import CommentEditForm from '../../components/comments/CommentEditForm';
import ConfirmDeleteComment from '../../components/comments/ConfirmDeleteComment';
import { connect } from 'react-redux';
import moment from 'moment';

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEditCommentForm: false,
      displayConfirmDelete: false,
      commentText: '',
    };
  }

  toggleEditForm = () => {
    this.setState({
      displayEditCommentForm: !this.state.displayEditCommentForm,
    });
  };

  toggleConfirmDelete = () => {
    this.setState({
      displayConfirmDelete: !this.state.displayConfirmDelete,
    });
  };

  commentTextChange = event =>
    this.setState({ commentText: event.target.value });

  updateComment = event => {
    event.preventDefault();
    this.setState({ displayEditCommentForm: false });
    const commentText = this.state.commentText;
    this.props.updateComment(commentText, this.props.id, this.props.slug);
  };

  getDateCreated = () => {
    return `${moment(`${new Date(this.props.createdAt)}`).fromNow()}`;
  };

  deleteComment = () => {
    this.setState({ displayConfirmDelete: false });
    this.props.deleteComment(this.props.id, this.props.slug);
  };

  likeComment = () => {
    this.props.likeComment(this.props.id, this.props.slug);
  };

  render() {
    return (
      <div className="comment-container">
        <div className="comment-owner">
          {this.props.user} <span className="commented">commented: </span>
        </div>
        <div className="comment-timestamp">{this.getDateCreated()}</div>
        {this.props.user === sessionStorage.user ? (
          <div>
            <span>
              <i
                className="small material-icons right comment-edit one"
                onClick={this.toggleConfirmDelete}
              >
                delete
              </i>
            </span>
            <span>
              <i
                className="small material-icons right comment-edit two"
                onClick={this.toggleEditForm}
              >
                edit
              </i>
            </span>
          </div>
        ) : (
          <div />
        )}

        <span className="right">
          <i
            className="small material-icons comment-edit three"
            onClick={this.likeComment}
          >
            thumb_up
          </i>
          <span className="comment-like-count">{this.props.likes}</span>
        </span>
        <div className="comment-body card-panel">
          <div className="comment-body">{this.props.body}</div>
        </div>

        {this.state.displayEditCommentForm ? (
          <div>
            <CommentEditForm
              commentText={this.state.commentText}
              commentTextChange={this.commentTextChange}
              handleSubmit={this.updateComment}
              toggleEditForm={this.toggleEditForm}
            />
          </div>
        ) : (
          <div />
        )}

        {this.state.displayConfirmDelete ? (
          <div>
            <ConfirmDeleteComment
              deleteComment={this.deleteComment}
              toggleConfirmDelete={this.toggleConfirmDelete}
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
  commentId: state.commentId,
});

const mapDispatchToProps = {
  updateComment,
  deleteComment,
  likeComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
