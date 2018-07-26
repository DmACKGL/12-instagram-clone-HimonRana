import React, { Component } from "react";

class ProfileInfo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="frow justify-start">
          <img src="https://api.adorable.io/avatars/100/himonrana@adorable.png" className="profileAvatar" />
          <h5 className="mr-3">Himon Rana</h5>
          <button className="btn-outline-dark mr-2">Edit Profile</button>
          <a href="">
            <i className="fas fa-cog mt-2" />
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
