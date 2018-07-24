import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import "./style.css";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser()
    this.props.history.push('/');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const avatar = `https://api.adorable.io/avatars/100/${
      user.name
    }@adorable.png`;

    const authLinks = (
      <div className="Header__container frow justify-between">
        <div className="frow row-start">
          <h1 className="Header__logo">
            <Link to="/" className="Header__logo-link">
              <i
                className="fab fa-instagram Header__instagram-icon mr-2"
                aria-hidden="true"
              />
              Buntstagram
            </Link>
          </h1>
        </div>
        <nav className="frow justify-end">
          <ul className="Header__nav-group">
            <li className="Header__nav-link">
              <Link to="/profile">Users</Link>
            </li>
            <li className="Header__nav-link">
              <a
                href=""
                onClick={this.onLogoutClick.bind(this)}
                className="nav-link"
              >
                <img className="avatar" src={avatar} alt={user.name} /> Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );

    const guestLinks = (
      <div className="Header__container frow justify-between">
        <div className="frow row-start">
          <h1 className="Header__logo">
            <Link to="/" className="Header__logo-link">
              <i
                className="fab fa-instagram Header__instagram-icon mr-2"
                aria-hidden="true"
              />
              Buntstagram
            </Link>
          </h1>
        </div>
      </div>
    );

    return (
      <header className="Header__root">
        {isAuthenticated ? authLinks : guestLinks}
      </header>
    );
  }
}

Header.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
