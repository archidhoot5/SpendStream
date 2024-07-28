import React from "react";
import img from "../assets/mastercard_logo.png";

export default function Card() {
  let style = {
    width: "60%",
    height: "25%",
    backgroundColor: "aliceblue",
    // backgroundColor: "beige",
    padding: "1rem",
    paddingTop: "2rem",
    borderRadius: "20px",
    margin: "1rem",
    boxShadow: "0px 5px 10px #12192c",
  };
  let style1 = {
    // width: "15%",
  };
  let style2 = {
    display: "flex",
    justifyContent: "space-between",
    // width: "100%",
    alignItems: "flex-end",
    fontSize: "10px",
    paddingTop: "2rem",
  };
  let style3 = {
    // width: "50%",
  };
  let style4 = {
    color: "gray",
    fontSize: "10px",
  };
  let style5 = {
    fontWeight: "600",
    fontSize: "20px",
  };

  return (
    <>
      <div style={style}>
        <div style={style4}>Availabel Balance</div>
        <div style={style5}>Rs {localStorage.getItem("balance")}</div>
        <div style={style2}>
          <div style={style3}>**** 9017</div>
          <img src={img} alt="" style={style1} />
        </div>
      </div>
    </>
  );
}
