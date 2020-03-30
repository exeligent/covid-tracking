import React from "react";

export default function Footer() {
  return (
    <div
      className="container-fluid text-center"
      style={{
        background: "#323a46",
        borderRadius: "0.25rem",
        padding: 20,
        marginTop: 70
      }}
    >
      <span
        style={{
          textAlign: "center",

          fontSize: 13,
          color: "#bdbdbd"
        }}
      >
        <div style={{ marginTop: 5 }}></div>
        <div style={{ marginTop: 5 }}>Data Fetched from worldometer </div>
        <div style={{ marginTop: 10, fontSize: 15 }}>
          Made With <i className="glyphicon glyphicon-heart" /> By Biniyam
          Daniel{" "}
        </div>
      </span>
    </div>
  );
}
