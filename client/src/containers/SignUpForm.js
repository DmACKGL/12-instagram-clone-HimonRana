import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./SignUpForm.css";

export class SignUpForm extends Component {
  static propTypes = {
    prop: PropTypes
  };

  handleSubmit() {}

  render() {
    const { isAuthenticating } = this.props;
    return (
      <div className="signUpDiv">
        <div className="signUpBox">
          <img src="https://api.adorable.io/avatars/100/bulle@adorable.png" className="userAvatar" />
          <form className="SignUpForm__root" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <h2>Register here</h2>
              <input
                type="text"
                placeholder="Name"
                className="SignUpForm__input"
              />
            </fieldset>
            <fieldset>
              <input
                type="text"
                placeholder="Email"
                className="SignUpForm__input"
              />
            </fieldset>
            <fieldset>
              <input
                type="password"
                placeholder="Password"
                className="SignUpForm__input"
              />
            </fieldset>
            <fieldset>
              <input
                type="password"
                placeholder="Password again"
                className="SignUpForm__input"
              />
            </fieldset>
            <button
              className="SignUpForm__button"
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

const mapStateToProps = state => ({
  isAuthenticating: state.isAuthenticating
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
