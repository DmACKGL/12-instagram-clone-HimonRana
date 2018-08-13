import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getPosts } from "../actions/postActions";
import { Photo } from "../components";
import Spinner from "../components/common/Spinner";
import PhotoGrid from "./PhotoGrid";

class PhotoFeed extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;
    let gridContent;
    // console.log(posts);

    if (loading) {
      postContent = <Spinner />;
    } else {
      postContent = posts.map(post => <Photo key={post._id} post={post} />);
    }

    return (
      <div>
        {postContent}
        {/* <div >
          {posts.map(post => (
            <PhotoGrid postImg={post.postImg} />
          ))}
        </div> */}
      </div>
    );
  }
}

PhotoFeed.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PhotoFeed);
