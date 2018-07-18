import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { loginUser } from "../actions/loginUser";
import "./SignInForm.css";

export class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state)).then(() => {
      this.props.history.push("/");
    });
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.dispatch(registerUser(this.state)).then(() => {
  //     this.props.history.push('/signin');
  //   });

  render() {
    const { isAuthenticating } = this.props;
    return (
      <div className="signInDiv">
        <div className="signInBox">
          <img
            src="https://api.adorable.io/avatars/100/bulle@adorable.png"
            className="userAvatar"
          />
          <form
            className="SignInForm__root"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <fieldset>
              <h2>Log in here</h2>
              <input
                onChange={this.handleChange.bind(this)}
                type="text"
                name="email"
                placeholder="Email"
                className="email"
                required
              />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange.bind(this)}
                type="password"
                name="password"
                placeholder="Password"
                className="password"
                required
              />
            </fieldset>
            <button
              className="btn btn-button"
              disabled={isAuthenticating}
              type="submit"
            >
              {isAuthenticating ? (
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignInForm__spinner" />
              ) : (
                "Log In"
              )}
            </button>
            <Link to="/SignUp">Don't have an account? Sign up!</Link>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isAuthenticating: state.isAuthenticating
// });

// const mapDispatchToProps = {};

export default withRouter(connect(null)(SignInForm));
