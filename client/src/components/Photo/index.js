import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import classnames from 'classnames';
import { deletePost, addLike, removeLike, getPost } from "../../actions/postActions";

import Spinner from "../common/Spinner";
import "./Photo.css";

class Photo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isToggleOn: true
    }

    this.toggleClick = this.toggleClick.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

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

  render() {
    const { post, auth } = this.props;
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
              <Link to={`/profile/${auth.user.id}`}>{auth.user.name}</Link>
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
          <img src={post.postImg} alt={`${auth.user.name} profile`} />
        </div>
        <div className="Photo__like-button ml-4 mt-2">
        {/* { this.state.isToggleOn ? ( */}
          <button
            onClick={this.onLikeClick.bind(this, post._id)}
            className={classnames("btn-outline-danger", {
              "text-white bg-danger": this.findUserLike(post.likes)
            })}
          >
            <i className="far fa-heart" />
          </button>
        {/* ) : ( */}
          <button
            onClick={this.toggleClick}
            onClick={this.onUnlikeClick.bind(this, post._id)}
            className="btn-outline-secondary"
          >
            x
          </button>
        {/* )} */}
        </div>
        <div className="likes pl-4 pt-2">
          <p className="text-sm">{post.likes.length} Likes</p>
        </div>
        <div className="Photo__comments container ml-2 mr-2 mt-2">
          <ul className="m-0">
            <li className="mb-2">
              <div className="">
                <Link className="font-weight-bold" to={`/profile/${post._id}`}>
                  {auth.user.name + ": "}
                </Link>
                {post.text}
              </div>
            </li>
            {/* <li className="mb-2">
              <div className="">
                <Link className="font-weight-bold" to={"/profile/:id/"}>
                  {"John Applemunk: "}
                </Link>
                Hello im a comment am cool cool coolc oocl lorem uipsnuf
                uibadfwaiub baiwudf.
              </div>
            </li> */}
          </ul>
        </div>
        <div className="Photo__footer">
          <div className="Photo-header__timestamp">
            <small>{post.date}</small>
          </div>
          <div className="Photo__action-box">
            <div className="Photo__comment-box">
              <form>
                <input type="text" placeholder="Comment here" />
              </form>
            </div>
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
  getPost: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike, getPost }
)(Photo);
