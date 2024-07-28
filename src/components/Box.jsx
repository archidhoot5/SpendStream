import React from "react";

export default function Box({ x, y }) {
  let style = {
    height: "0.5rem",
    backgroundColor: "gold",
    borderRadius: "20px",
    marginTop: "0.5rem",
    width: `${(x / y) * 100}%`,
    maxWidth: "100%",
  };
  return <div style={style}></div>;
}
