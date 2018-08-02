import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { getCurrentProfile } from "../actions/profileActions";
import Spinner from "../components/common/Spinner";
import "./ProfileInfo.css"
class ProfileInfo extends Component {
  constructor() {
    super();

    this.state = {
      bio: "",
      imageURL: "",
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile()
  };

  
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    const avatar = `https://api.adorable.io/avatars/100/${
      user.name
    }@adorable.png`;

    let profileContent;
    let spinner = <Spinner />;

    if (loading) {
        profileContent = spinner;
    } else {
      profileContent = (
        <div>
        <div className="infoProfile row d-flex flex-nowrap">
          <div className="imgUrl col-6 d-flex justify-content-center">
            <img
              src="https://picsum.photos/200/200/?random"
              
              className="profileAvatar rounded-circle "
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="profileContent">
              <h4 className="userName mb-1">{user.name}</h4>
              <hr />
              <h6>{profile == null ? ("") : (profile.bio)}</h6>
            </div>
          </div>
        </div>
        <div className="grid-container mt-5">
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/100/100/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/300/300/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/400/400/?random"
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
