import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { deleteComment } from "../actions/postActions";

class CommentDisplay extends Component {
  render() {
    const { comments, postId, auth, post } = this.props;
    // console.log(this.props);

    return (
      <div>
          { comments.map((comment) => (
        <li className="mb-2">
          <div className="">
            <Link className="font-weight-bold" to={`/profile/${comment.user}`}>
              {comment.name + ": "}
            </Link>
            {comment.text}
          </div>
        </li>
          ))
        }
      </div>
    );
  }
}

CommentDisplay.propTypes = {
//   deleteComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
//   { deleteComment }
)(CommentDisplay);
