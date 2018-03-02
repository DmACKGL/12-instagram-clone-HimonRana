import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './Photo.css';

export class Photo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { photo } = this.props;

    return (
      <article className="Photo__root">
        <div className="Photo-header">
          <div className="Photo-header__avatar-container">
            <img
              src={photo.imageUrl}
              className="Photo-header__avatar-img"
              alt={`${'username'} profile`}
            />
          </div>
          <div className="Photo-header__metadata-container">
            <div className="Photo-header__username">
              <Link to={`/${'johnny'}`}>{'John Appleseed'}</Link>
            </div>
            <div className="Photo-header__address">
              <Link to={`/explore/locations/${0}`}>{'New York City'}</Link>
            </div>
          </div>
          <div className="Photo-header__timestamp">
            <small>10 hours ago</small>
          </div>
        </div>
        <div
          className={`Photo__body`}>
          <img src={photo.imageUrl} />
        </div>
        <div className="Photo__footer">
          <div className="Photo__action-box">
            <div className="Photo__like-button">
              <button>Like</button>
            </div>
            <div className="Photo__comment-box">
              <input type="text" placeholder="Comments go here later" />
            </div>
          </div>
        </div>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
