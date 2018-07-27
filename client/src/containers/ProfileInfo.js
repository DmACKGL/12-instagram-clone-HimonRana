import React, { Component } from "react";

class ProfileInfo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <img
              src="https://api.adorable.io/avatars/100/himonrana@adorable.png"
              className="profileAvatar"
            />
          </div>
          <div className="col-8">
          <div className="row">
            <h5 className="col-4 mr-3">Himon Rana</h5>
            <button className="btn-outline-dark col-sm mr-2">Edit Profile</button>
            <a href="">
              <i className="fas fa-cog col-8 mt-2" />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
