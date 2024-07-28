import React from "react";
import "./ExpenseCard.css";
import { color } from "chart.js/helpers";
import img1 from "../assets/edit.png";
import img2 from "../assets/delete.png";
import EditRecord from "./EditRecord";

export default function ExpenseCard({ data }) {
  let style = {};
  if (data.InorOut) {
    style = {
      color: "Green",
    };
  } else {
    style = {
      color: "Red",
    };
  }
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  let bal = JSON.parse(localStorage.getItem("balanceArray") || "[]");
  console.log(rec);
  const deleteRecord = (id) => {
    console.log(id);
    console.log(data.itemNo);
    console.log(data.value);
    console.log(rec[0].itemNo);
    let delRec = rec.filter((record) => record.itemNo === id);
    let newRec = rec.filter((item) => item.itemNo !== id);
    localStorage.setItem("records", JSON.stringify(newRec));
    console.log("Hello");
    delRec[0].InorOut
      ? localStorage.setItem(
          "balance",
          parseInt(localStorage.getItem("balance")) - delRec[0].value
        )
      : localStorage.setItem(
          "balance",
          parseInt(localStorage.getItem("balance")) + delRec[0].value
        );
    bal.push(parseInt(localStorage.getItem("balance")));
    localStorage.setItem("balanceArray", JSON.stringify(bal));
    window.location.reload();
  };

  const editRecord = (key) => {
    console.log("working1");
  };
  return (
    <>
      <div className="card">
        <div>
          {data.date}/{data.month}/{data.year}
        </div>
        {/* <div>{data.InorOut}</div> */}
        <div>{data.type}</div>
        <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          {data.title}
        </div>
        <div style={style}>{data.value}</div>
        <div className="imgs">
          {/* <img
            className="edit"
            src={img1}
            alt=""
            onClick={() => editRecord(data.key)}
          /> */}
          <img
            className="delete"
            src={img2}
            alt=""
            onClick={() => deleteRecord(data.itemNo)}
          />
        </div>
      </div>
    </>
  );
}
