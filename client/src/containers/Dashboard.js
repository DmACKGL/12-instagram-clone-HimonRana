import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getCurrentProfile,
  createProfile,
  deleteAccount
} from "../actions/profileActions";
import Spinner from "../components/common/Spinner";
import isEmpty from "../validation/is-empty";
import classnames from "classnames";
import "./SignUpForm.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      bio: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";

      this.setState({
        bio: profile.bio
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { user } = this.props.auth;
    const { errors } = this.state;

    return (
      <div>
        <h4>{user.name}</h4>
        <p className="lead text-muted"> Edit Profile</p>
        <form onSubmit={this.onSubmit}>
          <textarea
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.bio
            })}
            placeholder="Short bio"
            name="bio"
            value={this.state.bio}
            onChange={this.onChange}
          />
          {errors.bio && (
            <div className="SignUpForm__error-text">{errors.bio}</div>
          )}
          <button type="submit" value="Submit" className=" btn btn-link">
            {" "}
            Submit
          </button>
        </form>
        <p>
          <strong>Remove Account permanently</strong>
        </p>
        <button onClick={this.onDeleteClick.bind(this)} className="btn-danger">
          Delete Account
        </button>
      </div>
    );
  }
}

Dashboard.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile, deleteAccount }
)(withRouter(Dashboard));
