import React, { Component } from "react";
import "./PhotoGrid.css";

export class PhotoGrid extends Component {
  render() {
    return (
      <div>
        <h1>Explore</h1><br />
        <div className="grid-container">
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/840/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/840/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/840/?random"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
