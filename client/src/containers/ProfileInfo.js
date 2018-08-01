import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { getCurrentProfile } from "../actions/profileActions";
import Spinner from "../components/common/Spinner";
class ProfileInfo extends Component {
  constructor() {
    super();

    this.state = {
      bio: "",
      imageURL: "",
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    console.log(this.props.profile);

    const avatar = `https://api.adorable.io/avatars/100/${
      user.name
    }@adorable.png`;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />
    } else {
      profileContent = (
        <div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <img
              src={profile.imgUrl}
              className="profileAvatar rounded-circle"
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="profileContent">
              <h4 className="userName mb-4">{user.name}</h4>
              <h6>{profile.bio}</h6>
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
      )
    }

    return (
      <div className="container mt-5">
        {profileContent}
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
