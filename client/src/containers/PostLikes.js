import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { addLike, removeLike } from "../actions/postActions";

export class PostLikes extends Component {
  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    // const { auth, post } = this.props;
    // if (post.likes.filter(like => like.user === auth.user.id).length > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  render() {
    const { post } = this.props;
    
    return (
      <div>
        <div className="Photo__like-button ml-4 mt-2">
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
        </div>
        <div className="likes pl-4 pt-2">
          <p className="text-sm">{post.likes.length} Likes</p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
// };

export default connect(
  null,
  { addLike, removeLike }
)(PostLikes);
