import React, { Component } from "react";

export default class RegionItem extends Component {
  render() {
    const { name, value } = this.props.region;
    return (
      <p style={{ fontSize: 14 }}>
        <i class="mdi mdi-stop-circle-outline text-success"></i>{" "}
        <span style={{ fontWeight: 600 }}> {name} </span>
        <span style={{ float: "right" }}>{value}</span>
      </p>
    );
  }
}
