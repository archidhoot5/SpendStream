import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import "./PrevTransactions.css";
import TransactionRecords from "./TransactionRecords";
import { color } from "chart.js/helpers";

export default function PrevTransactions() {
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "1rem",
    // width: "25vw",
  };
  let style2 = {
    fontSize: "14px",
    fontWeight: "600",
    color: "gold",
  };
  let style3 = {
    fontSize: "12px",
    fontWeight: "200",
    textDecoration: "none",
    color: "gold",
  };
  //   let style2 = {
  //     fontSize: "14px",
  //     fontWeight: "600",
  //     marginTop: "2rem",
  //   };
  //   let style3 = {
  //     marginRight: "1rem",
  //   };
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  return (
    <>
      <div style={style1}>
        <div style={style2}>Previous Transactions</div>
        <a href="/transaction-records" className="view" style={style3}>
          View all
        </a>
      </div>
      <hr style={{ marginRight: "1rem" }} />
      <div style={{ marginBottom: "2rem" }}>
        {/* <div className="card"> */}
        {/* <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: true,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food ",
            value: 500,
            InorOut: 0,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: 0,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: 1,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: 0,
          }}
        /> */}
        {rec.map(
          (record, ind) =>
            ind >= rec.length - 5 && (
              <ExpenseCard
                data={{
                  itemNo: record.itemNo,
                  date: record.date,
                  month: record.month,
                  year: record.year,
                  type: record.type,
                  title: record.title,
                  value: record.value,
                  InorOut: record.InorOut,
                }}
              />
            )
        )}
      </div>
    </>
  );
}
