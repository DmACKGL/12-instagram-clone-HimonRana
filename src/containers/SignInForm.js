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
      <form className="SignInForm__root" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input
            type="text"
            placeholder="Email"
            className="SignInForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            placeholder="Password"
            className="SignInForm__input"
          />
        </fieldset>
        <button
          className="SignInForm__button"
          disabled={isAuthenticating}
          type="submit"
        >
          {isAuthenticating ? (
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignInForm__spinner" />
          ) : (
            "Log In"
          )}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticating: state.isAuthenticating
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
