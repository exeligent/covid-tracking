import React, { Component } from "react";

export default class WorldStat extends Component {
  render() {
    return (
      <div className="container">
        <div
          className=" row  text-center"
          style={{ color: "#fff!important", marginBottom: 20 }}
        >
          <h3 className="col-md-12 text-center">
            Coronavirus Cases: Of The World
          </h3>
          <div className="col-md-4 mb-3">
            <h3 className="font-weight-light text-warning">
              <i className=""></i>
              <strong>722,196</strong>
            </h3>
            <p className="text-muted text-overflow">Total Cases</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="font-weight-light text-success">
              <i className=""></i> <strong>151,766</strong>
            </h3>
            <p className="text-muted text-overflow">Total Recovery</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="font-weight-light text-danger">
              <i className=""></i> <strong>33,976</strong>
            </h3>
            <p className="text-muted text-overflow">Total Death</p>
          </div>
        </div>
      </div>
    );
  }
}
