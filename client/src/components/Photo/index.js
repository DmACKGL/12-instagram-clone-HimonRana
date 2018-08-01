import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Photo.css";

export class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ""
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall() {
    fetch("/users")
      .then(res => res.json())
      .then(res => {
        this.setState({ response: res });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { photo } = this.props;

    return (
      <article className="Photo__root">
        <div className="Photo-header">
          <div className="Photo-header__avatar-container">
            <img
              src="https://picsum.photos/100/100/?random"
              className="Photo-header__avatar-img rounded-circle"
              alt={`${"username"} profile`}
            />
          </div>
          <div className="Photo-header__metadata-container">
            <div className="Photo-header__username">
              <Link to={`/${"johnny"}`}>{"John Appleseed"}</Link>
            </div>
            <div className="Photo-header__address">
              <Link to={`/explore/locations/${0}`}>{"New York City"}</Link>
            </div>
          </div>
        </div>
        <div className={`Photo__body`}>
          <img
            src="https://picsum.photos/200/200/?random"
            alt={`${"username"} profile`}
          />
        </div>
        <div className="Photo__like-button ml-4 mt-2">
          <button className="btn-outline-danger">
            <i class="far fa-heart" />
          </button>
        </div>
        <div className="Photo__comments container ml-2 mr-2 mt-2">
          <ul className="m-0">
            <li className="mb-2">
              <div className="">
                <Link className="font-weight-bold" to={"/profile/:id/"}>
                  {"John Applemunk: "}
                </Link>
                  Hello im a comment am cool cool coolc oocl lorem uipsnuf
                  uibadfwaiub baiwudf.
              </div>
            </li>
            <li className="mb-2">
              <div className="">
                <Link className="font-weight-bold" to={"/profile/:id/"}>
                  {"John Applemunk: "}
                </Link>
                  Hello im a comment am cool cool coolc oocl lorem uipsnuf
                  uibadfwaiub baiwudf.
              </div>
            </li>
          </ul>
        </div>
        <div className="Photo__footer">
          <div className="Photo-header__timestamp">
            <small>10 hours ago</small>
          </div>
          <div className="Photo__action-box">
            <div className="Photo__comment-box">
            <form>
              <input type="text" placeholder="Comment here" />
            </form>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
