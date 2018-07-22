import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";

import { registerUser } from "../actions/authActions";
import "./SignUpForm.css";

export class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);

    // axios
    //   .post("/auth/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));

    // this.props.dispatch(registerUser(this.state))
    // .then(() => {
    //   this.props.history.push("/signin");
    // });
  }

  render() {
    const { errors } = this.state;

    const { user } = this.props.auth

    const { isAuthenticating } = this.props;
    return (
      <div className="signUpDiv">
        <div className="signUpBox">
          <img
            src="https://api.adorable.io/avatars/100/bulle@adorable.png"
            className="userAvatar"
          />
          <form
            noValidate
            className="SignUpForm__root"
            onSubmit={this.handleSubmit}
          > {user ? user.name : null}
            <h2>Register here</h2>
            {errors.name && (
              <div className="SignUpForm__error-text">{errors.name}</div>
            )}
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              className={classnames("name", {
                "SignUpForm__error-line": errors.name
              })}
              name="name"
              value={this.state.name}
            />
            {errors.email && (
              <div className="SignUpForm__error-text">{errors.email}</div>
            )}
            <input
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
              className={classnames("email", {
                "SignUpForm__error-line": errors.email
              })}
              name="email"
              value={this.state.email}
            />
            {errors.password && (
              <div className="SignUpForm__error-text">{errors.password}</div>
            )}
            <input
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              className={classnames("password", {
                "SignUpForm__error-line": errors.password
              })}
              name="password"
              value={this.state.password}
            />
            {errors.password2 && (
              <div className="SignUpForm__error-text">{errors.password2}</div>
            )}
            <input
              onChange={this.handleChange}
              type="password"
              placeholder="Confirm Password"
              className={classnames("password2", {
                "SignUpForm__error-line": errors.password2
              })}
              name="password2"
              value={this.state.password2}
            />
            <button
              className="btn btn-primary"
              disabled={isAuthenticating}
              type="submit"
            >
              {isAuthenticating ? (
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignUpForm__spinner" />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SignUpForm.PropTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.Isrequired
};


const mapStateToProps = (state) => ({
  auth: state.auth
});



export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(SignUpForm)
);
