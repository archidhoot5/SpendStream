import React from "react";

export default function SideDashboard({ flag }) {
  let style = flag
    ? {
        height: "100vh",
        backgroundColor: "black",
        width: "35rem",
        // width: "15vw",
        borderRadius: "20px",
      }
    : {
        height: "100vh",
        backgroundColor: "black",
        width: "15vw",
        borderRadius: "20px",
      };
  return <div style={style}></div>;
}
