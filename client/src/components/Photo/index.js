import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

import Spinner from "../common/Spinner";
import "./Photo.css";
import CommentForm from "../../containers/CommentForm";
import CommentDisplay from "../../containers/CommentDisplay";

class Photo extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      isToggleOn: true
  //   }

  //   this.toggleClick = this.toggleClick.bind(this);
  // }

  // componentDidMount() {
  //   this.props.getPost();
  // }


  toggleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { post, auth } = this.props;
    const { comments } = this.props.post;
    // console.log(post);
    let photoContent;

    photoContent = (
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
            {post.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="submit"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
        <div className="Photo__body">
          <img src={post.postImg} />
        </div>
        <div className="Photo__like-button ml-4 mt-2">
          {/* { this.state.isToggleOn ? ( */}
          <form onSubmit={this.onSubmit.bind(this)}>
            <button
              onClick={this.onLikeClick.bind(this, post._id)}
              // className="btn-outline-danger"
              className={classnames("btn-outline-danger", {
                "text-white bg-danger": this.findUserLike(post.likes)
              })}
            >
              <i className="far fa-heart" />
            </button>
            {/* ) : ( */}
            <button
              onClick={this.onUnlikeClick.bind(this, post._id)}
              className="btn-outline-secondary"
            >
              x
            </button>
            {/* )} */}
          </form>
        </div>
        <div className="likes pl-4 pt-2">
          <p className="text-sm">{post.likes.length} Likes</p>
        </div>
        <div className="Photo__comments container ml-2 mr-2 mt-2">
          {/* COMMENTS HERE */}
          <ul className="m-0">
            <li className="mb-2">
              <div className="">
                <Link className="font-weight-bold" to={`/profile/${post.user}`}>
                  {post.name + ": "}
                </Link>
                {post.text}
              </div>
            </li>
            <CommentDisplay key={post._id} postId={post._id} comments={post.comments} />
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

    return <div>{photoContent}</div>;
  }
}

Photo.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  // getPost: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  // post: state.post
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(Photo);
