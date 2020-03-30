import React, { Component } from "react";

export default class Statstics extends Component {
  render() {
    /* const {
      active_cases,
      country,
      critical,
      new_cases,
      total_cases,
      total_deaths,
      total_recovered
    } = this.props.data; */
    return (
      <div className="row card-2">
        <div className="row text-center">
          <div className="col-md-6 mb-3">
            <h3 className="font-weight-light">
              <i className=""></i>
              <span style={{ color: "#ef5350", fontWeight: 700 }}>{0}</span>
            </h3>
            <p className="text-muted text-overflow">New Case</p>
          </div>
          <div className="col-md-6 mb-3">
            <h3 className="font-weight-light">
              <i className="text-danger"></i>
              <span style={{ color: "#ff5722", fontWeight: 700 }}>{20}</span>
            </h3>
            <p className="text-muted text-overflow">Active Cases</p>
          </div>
        </div>
        <div className="p10" style={{ marginTop: 20 }}>
          <h4 className="mb-20">
            <small className="text-muted detail-lable">Total cases</small>
            <span className="right value"> {21} </span>
          </h4>
        </div>
        <div className="p10">
          <h4 className="mb-20">
            <small className="text-muted detail-lable">
              recovery at the specified date
            </small>
            <span className="right value"> {1} </span>
          </h4>
        </div>
        <div className="p10">
          <h4 className="mb-20">
            <small className="text-muted detail-lable">critical cases</small>
            <span className="right value"> {0} </span>
          </h4>
        </div>
        <div className="p10">
          <h4 className="mb-20">
            <small className="text-muted detail-lable">Total Death</small>
            <span className="right value"> {0} </span>
          </h4>
        </div>
      </div>
    );
  }
}
