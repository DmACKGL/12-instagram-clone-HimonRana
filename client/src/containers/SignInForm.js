import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./SignInForm.css";

export class SignInForm extends Component {
  static propTypes = {
    prop: PropTypes
  };

  handleSubmit() {}

  render() {
    const { isAuthenticating } = this.props;
    return (
      <div className="signInDiv">
        <div className="signInBox">
          <img src="https://api.adorable.io/avatars/100/bulle@adorable.png" className="userAvatar" />
          <form className="SignInForm__root" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <h2>Log in here</h2>
              <input
                type="text"
                placeholder="Email"
                className="email"
                required
              />
            </fieldset>
            <fieldset>
              <input
                type="password"
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
            <a href="#">Forget Password</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
