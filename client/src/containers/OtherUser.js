import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { getProfileById } from "../actions/profileActions";
import { PhotoGrid } from "./PhotoGrid";
import Spinner from "../components/common/Spinner";
import "./ProfileInfo.css";

class OtherUser extends Component {
  componentDidMount() {
    this.props.getProfileById();
    console.log(this.props);
    // if (this.props.match.params._id) {
    //   this.props.getProfileById(this.props.match.params._id);
    // }
  }

  render() {
    return <div>BED JOKE</div>;
  }
}

OtherUser.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(withRouter(OtherUser));
