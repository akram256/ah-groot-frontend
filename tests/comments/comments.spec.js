import configureStore from 'redux-mock-store';
import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CommentContainer from '../../src/containers/Comments/CommentContainer';
import Comment from '../../src/containers/Comments/Comment';
import commentData from './commentData';
import CommentForm from '../../src/components/comments/CommentForm';
import CommentEditForm from '../../src/components/comments/CommentEditForm';
import ConfirmDeleteComment from '../../src/components/comments/ConfirmDeleteComment';
import CommentsPanel from '../../src/components/comments/CommentsPanel';

describe('comment container', () => {
  const initialState = {
    commentPosted: false,
    commentUpdated: false,
    commentDeleted: false,
    comments: [],
  };
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CommentContainer slug={'an-article'} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a comment form', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CommentForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a comment edit form', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CommentEditForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a confirm delete comment component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConfirmDeleteComment />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a comments panel', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CommentsPanel comments={[commentData]} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the comment container with its children', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CommentContainer slug={'an-article'} />
      </Provider>
    );
    wrapper.setState({ displayCommentForm: false, commentText: '' });
    const event = {
      target: { value: '' },
    };
    wrapper.find('button.btn').simulate('click');
    wrapper
      .find('textarea.materialize-textarea')
      .simulate('change', { target: { value: 'l' } });
    wrapper.find('input.btn.right').simulate('click');
  });

  it('should render a single comment', () => {
    const displayAllComments = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Comment />
      </Provider>
    );
    wrapper.setProps({
      key: commentData.id.toString,
      id: commentData,
      body: commentData.body,
      user: commentData.user.user,
      createdAt: commentData.created_at.toString(),
      slug: 'an-article',
      displayAllComments: displayAllComments,
    });

    wrapper.setState({
      displayEditCommentForm: true,
      displayConfirmDelete: true,
      commentText: 'comment',
    });

    wrapper
      .find('i.small.material-icons.right.comment-edit.one')
      .simulate('click');
    wrapper
      .find('i.small.material-icons.right.comment-edit.two')
      .simulate('click');
    wrapper.find('i.small.material-icons.comment-edit.three').simulate('click');
    wrapper
      .find('textarea.materialize-textarea.comment-edit')
      .simulate('change', { target: { value: 'l' } });
    wrapper.find('input.btn.right').simulate('click');
    wrapper.find('button.btn.delete').simulate('click');
  });
});
