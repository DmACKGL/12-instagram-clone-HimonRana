import React, { Component } from "react";

import { Link } from "react-router-dom";
import classnames from "classnames";

import Spinner from "../common/Spinner";
import "./Photo.css";
import CommentForm from "../../containers/CommentForm";
import CommentDisplay from "../../containers/CommentDisplay";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.post.comments.length !== prevState.post.comments.length ||
      nextProps.post.likes.length !== prevState.post.likes.length
    ) {
      return {
        post: nextProps.post
      };
    } else {
      return {
        post: prevState.post
      };
    }
  }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.onLikeClick(id);
  }

  onUnlikeClick(id) {
    this.props.onUnlikeClick(id);
  }

  findUserLike(likes) {
    const { auth, post } = this.props;
    // if (post.likes.filter(like => like.user === auth.user.id).length > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { auth, loading, post } = this.props;

    // console.log(post);

    // let photoContent;

    // if (loading) {
    //   photoContent = <Spinner />;
    // } else {
    //   photoContent =
    // }

    return (
      <article className="Photo__root">
        <div className="Photo-header">
          <div className="Photo-header__avatar-container">
            <img
              src="https://picsum.photos/100/100/?random"
              className="Photo-header__avatar-img rounded-circle"
              alt={`${"username"} profile`}
            />
          </div>
          <div className="Photo-header__metadata-container">
            <div className="Photo-header__username">
              <Link to={`/profile/${post.user}`}>{post.name}</Link>
            </div>
          </div>
          <div className="delete ml-auto">
            {/* {post.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="submit"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            ) : null} */}
          </div>
        </div>
        <div className="Photo__body">
          <img src={post.postImg} />
        </div>
        <div className="Photo__like-button ml-4 mt-2">
          <form onSubmit={this.onSubmit.bind(this)}>
            <button
              onClick={this.onLikeClick.bind(this, post._id)}
              className={classnames("btn-outline-danger", {
                "text-white bg-danger": this.findUserLike(post.likes)
              })}
            >
              <i className="far fa-heart" />
            </button>

            <button
              onClick={this.onUnlikeClick.bind(this, post._id)}
              className="btn-outline-secondary"
            >
              x
            </button>
          </form>
        </div>
        <div className="likes pl-4 pt-2">
          <p className="text-sm">{post.likes.length} Likes</p>
        </div>
        <div className="Photo__comments container ml-2 mr-2 mt-2">
          <ul className="m-0">
            <li className="mb-2">
              <div className="">
                <Link className="font-weight-bold" to={`/profile/${post.user}`}>
                  {post.name + ": "}
                </Link>
                {post.text}
              </div>
            </li>
            <CommentDisplay
              key={post._id}
              postId={post._id}
              comments={post.comments}
            />
          </ul>
        </div>
        <div className="Photo__footer">
          <div className="Photo-header__timestamp">
            <small>{post.date}</small>
          </div>
          <div className="Photo__action-box">
            <CommentForm key={post._id} postId={post._id} />
          </div>
        </div>
      </article>
    );
  }
}
export default Photo;
