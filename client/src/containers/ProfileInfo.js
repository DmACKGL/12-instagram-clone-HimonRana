import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { getCurrentProfile } from "../actions/profileActions";
class ProfileInfo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;

    const avatar = `https://api.adorable.io/avatars/100/${
      user.name
    }@adorable.png`;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <img
              src={avatar}
              className="profileAvatar rounded-circle"
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="row">
              <h5>{user.name}</h5>
            </div>
          </div>
        </div>
        <div className="grid-container mt-5">
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/840/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/840/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/840/?random"
            />
          </div>
        </div>
      </div>
    );
  }
}
ProfileInfo.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(withRouter(ProfileInfo));
