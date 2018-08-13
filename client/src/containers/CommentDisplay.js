import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteComment } from "../actions/postActions";

class CommentDisplay extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
    window.location.reload(false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comment) {
      this.props.comments.push(nextProps.comment);
    }
  }

  render() {
    const { comments, postId, auth } = this.props;
    console.log(this.props);

    return (
      <div>
        {comments.map(comment => (
          <li className="mb-2">
            <div className="commentData">
              <Link
                className="font-weight-bold"
                to={`/profile/${comment.user}`}
              >
                {comment.name + ": "}
              </Link>
              {comment.text}
              {comment.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                  type="button"
                  className="deleteComment ml-1"
                >
                  &#10008;
                </button>
              ) : null}
            </div>
          </li>
        ))}
      </div>
    );
  }
}

CommentDisplay.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentDisplay);
