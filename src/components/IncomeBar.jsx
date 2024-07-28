import React from "react";
import Box from "./Box";

export default function IncomeBar() {
  let style = {
    // width: "80%",
    // paddingTop: "2rem",
    borderRadius: "20px",
    marginLeft: "1rem",
    marginRight: "1rem",
    marginBotton: "1rem",
  };
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
  };
  let style2 = {
    fontSize: "10px",
    // color: "gray",
  };
  let style3 = {
    color: "gold",
    fontSize: "16px",
  };
  let style4 = {
    fontSize: "14px",
    fontWeight: "600",
    color: "beige",
  };
  let style5 = {
    fontSize: "14px",
    color: "gold",
    display: "flex",
    alignItems: "center",
  };
  let style6 = {
    // width: "90%",
    height: "5%",
    backgroundColor: "black",
    borderRadius: "20px",
  };
  let date = new Date();
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  localStorage.setItem("total", 0);
  let newRec = rec.filter((record) => record.InorOut === 1);
  newRec.map((record) =>
    record.month === date.getMonth() + 1
      ? localStorage.setItem(
          "total",
          parseInt(localStorage.getItem("total")) + record.value
        )
      : ""
  );
  let val = parseInt(localStorage.getItem("total"));
  localStorage.setItem("total", 0);
  return (
    <>
      <div style={style}>
        <div>
          <div style={style1}>
            <div style={style2}>
              <div style={style3}>Income Goal</div>
              <div style={{ color: "gold" }}>Progress To Month</div>
            </div>
            <div style={style5}>
              <span style={style4}>Rs {val} /</span> Rs{" "}
              {localStorage.getItem("income-goal")}
            </div>
          </div>
        </div>
        <Box x={val} y={parseInt(localStorage.getItem("income-goal"))} />
      </div>
    </>
  );
}
