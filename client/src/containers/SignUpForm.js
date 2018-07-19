import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { registerUser } from "../actions/registerUser";
import "./SignUpForm.css";

export class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(registerUser(this.state)).then(() => {
      this.props.history.push("/signin");
    });
  }

  render() {
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
            onSubmit={this.handleSubmit.bind(this)}
          >
            <fieldset>
              <h2>Register here</h2>
              <input
                onChange={this.handleChange.bind(this)}
                type="text"
                placeholder="Name"
                className="name"
                name="name"
              />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange.bind(this)}
                type="email"
                placeholder="Email"
                className="email"
                name="email"
              />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange.bind(this)}
                type="password"
                placeholder="Password"
                className="password"
                name="password"
              />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange.bind(this)}
                type="password"
                placeholder="Confirm Password"
                className="password"
                name="password2"
              />
            </fieldset>
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

/*const mapStateToProps = state => ({
  isAuthenticating: state.isAuthenticating
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
*/
export default withRouter(connect(null)(SignUpForm));
