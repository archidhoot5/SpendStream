import React, { useState } from "react";
import Card from "./Card";
import Assets from "./Assets";
import IncomeBar from "./IncomeBar";
import IncomeSpendingCard from "./IncomeSpendingCard";
import IncomeSource from "./IncomeSource";
import PieChart from "./PieChart";
import Input from "./Input";
import PrevTransactions from "./PrevTransactions";
import "./Table.css";
import data from "../data/data.json";
import Charts from "./Charts";
export default function Table() {
  const style = {
    // width: "80rem",
    // height: "80rem",
    // border: "2px solid #14d314",
    borderRadius: 20,
    // width: "100rem",
    // marginTop: "8%",
    // marginLeft: "auto",
    // marginRight: "auto",
    boxShadow: "0px 5px 10px #12192c",
    // backgroundColor: "#f9f9f9",
    display: "flex",
    // flexWrap: "wrap",
    gap: "5%",
    // marginLeft: "1rem",
    // marginRight: "1rem",
    justifyContent: "flex-start",
    backgroundColor:
      "linear-gradient(90deg, hsl(104, 28%, 40%) 0%, hsl(58, 28%, 40%) 100%)",
    padding: "1rem",
    // minHeight: "170vh",
    marginBottom: "20vh",
  };
  let style1 = {
    display: "flex",
    justifyContent: "flex-start",
  };
  const [date, setDate] = useState(new Date());
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  let data = [];
  let Data = [];
  let income = [];
  let Income = [];
  localStorage.setItem("total", 0);
  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Food"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );
  data.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);
  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Shopping"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );
  data.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);
  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Transportation"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );
  data.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);
  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Others"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );
  data.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);
  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Home"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );

  data.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);

  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Salary"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );
  income.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);

  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "E-Commerce"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );

  income.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);

  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Shop"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );

  income.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);

  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.type === "Credit"
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + parseInt(record.value)
          )
        : ""
      : ""
  );

  income.push(parseInt(localStorage.getItem("total")));
  localStorage.setItem("total", 0);
  Data = [
    { label: "Food", value: data[0] },
    { label: "Shopping", value: data[1] },
    { label: "Transportation", value: data[2] },
    { label: "Others", value: data[3] },
    { label: "Home", value: data[4] },
  ];
  return (
    <>
      <div className="table" style={style}>
        <div className="left-div">
          <div className="abc" style={style1}>
            <Card />
            <Assets />
          </div>
          <div className="incomeBar">
            <IncomeBar />
          </div>
          <div>
            <IncomeSpendingCard />
          </div>
          <div>
            <IncomeSource />
          </div>
          <div>
            <Charts />
          </div>
        </div>
        <div className="right-div">
          {/* hello */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // background: "beige",
              background: "aliceblue",
              padding: "1rem",
              margin: "1rem",
              borderRadius: "20px",
            }}
          >
            <PieChart data={Data} />
          </div>

          {/* <CardSlider /> */}
          {/* <CardSliderNew /> */}
          <PrevTransactions />
          <Input
            date={date.getDate()}
            month={date.getMonth()}
            year={date.getFullYear()}
          />
        </div>
      </div>
    </>
  );
}
