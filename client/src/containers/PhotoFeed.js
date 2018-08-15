import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getPosts,
  deletePost,
  addLike,
  removeLike
} from "../actions/postActions";

import { Photo } from "../components";
import Spinner from "../components/common/Spinner";

class PhotoFeed extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  deletePost(Id) {
    this.props.deletePost(Id);
  }

  render() {
    const { posts, loading } = this.props;
console.log(posts);
    let postContent;

    if (loading) {
      postContent = <Spinner />;
    } else {
      postContent = posts.map((post, index) => (
        <Photo
          key={index}
          post={post}
          onLikeClick={this.onLikeClick}
          onUnlikeClick={this.onUnlikeClick}
          deletePost={this.deletePost}
        />
      ));
    }

    return <div>{postContent}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  loading: state.post.loading
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost, addLike, removeLike }
)(PhotoFeed);
