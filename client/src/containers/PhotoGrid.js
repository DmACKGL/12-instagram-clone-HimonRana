import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./PhotoGrid.css";

export class PhotoGrid extends Component {
  render() {
    // const { post } = this.props;
    console.log(this.props.postImg);
    return (
      <div>
        <div className="grid-container">
          {/* <div className="gridPhoto" style={{backgroundImage: `url('${this.props.postImg}')`}}>
            
          </div> */}
          <div
            className="gridPhoto"
            alt=""
            style={{
              backgroundImage: "url('https://picsum.photos/1920/1083/?random')"
            }}
          />
          <div
            className="gridPhoto"
            alt=""
            style={{
              backgroundImage: "url('https://picsum.photos/1920/1082/?random')"
            }}
          />
          <div
            className="gridPhoto"
            alt=""
            style={{
              backgroundImage: "url('https://picsum.photos/1920/1980/?random')"
            }}
          />
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1920/1000/?random"
              alt=""
            />
          </div>
          <div>
            <img
              className="gridPhoto"
              src="https://picsum.photos/1921/1921/?random"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.post
});

export default connect(mapStateToProps)(PhotoGrid);
