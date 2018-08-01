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
              src="https://picsum.photos/100/100/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/200/200/?random"
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/300/300/?random"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
