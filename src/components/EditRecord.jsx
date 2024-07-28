import React from "react";
import Input from "./Input";

export default function EditRecord() {
  let style = {
    display: "block",
    position: "fixed",
    zIndex: 100,
    backgroundColor: "rgba(255,255,255,0.3)",
    width: "100vw",
    height: "100vh",
  };

  console.log("working");
  return (
    <>
      <div style={style}>
        <div style={{ margin: "auto" }}>
          <Input />
          {console.log("working")}
        </div>
      </div>
    </>
  );
}
