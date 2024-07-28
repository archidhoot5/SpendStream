import React from "react";
import { Line } from "react-chartjs-2";
export default function Charts() {
  let bal = JSON.parse(localStorage.getItem("balanceArray") || "[]");
  let date = new Date();
  let newBal = [];
  if (bal.length >= 15) {
    for (let i = bal.length - 15; i < bal.length; i++) {
      newBal.push(bal[i]);
    }
  } else {
    bal.map((data) => newBal.push(data));
  }
  return (
    <>
      <div
        className="income-expense"
        style={{
          margin: "1rem",
          background: "aliceblue",
          padding: "1rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "600" }}>Balance Graph</div>
        <hr />
        <Line
          data={{
            labels: newBal.map((record, ind) => ind + 1),
            datasets: [
              {
                label: "Balance",
                data: newBal.map((data) => data),
                backgroundColor: "#064ff0",
                borderColor: "#064ff0",
              },
            ],
          }}
          isResponsive:true
        />
      </div>
    </>
  );
}
