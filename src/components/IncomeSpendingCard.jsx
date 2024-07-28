import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import data from "../data/data.json";
import { color } from "chart.js/helpers";
export default function IncomeSpendingCard() {
  let style = {
    display: "flex",
    margin: "1rem",
    // width: "70%",
    justifyContent: "space-between",
  };
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "0.5rem",
    // background: "#f9f9f9",
    backgroundColor: "aliceblue",
  };
  let style2 = {
    fontSize: "10px",
    color: "gray",
  };
  let style3 = {
    fontSize: "12px",
    fontWeight: "600",
  };

  let style6 = {
    width: "63%",
  };
  const CHARTOPTIONS = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },

    // Modify the axis by adding scales
    scales: {
      xAxes: [{ gridLines: { color: "#ffffff" } }],
      yAxes: [{ gridLines: { color: "#ffffff" } }],
      // to remove the labels
      x: {
        beginAtZero: true,
        ticks: {
          display: false,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
        lineWidth: 0,
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  let date = new Date();
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  localStorage.setItem("total", 0);
  let inc = [];
  let exp = [];
  rec.map((record) =>
    record.month === date.getMonth() + 1
      ? record.InorOut
        ? inc.push(record)
        : exp.push(record)
      : ""
  );
  return (
    <>
      <div style={style}>
        <div style={style1}>
          <div style={style6}>
            <Line
              data={{
                labels: inc.map((data) => data.type),
                datasets: [
                  {
                    label: "Cost",
                    data: inc.map((data) => data.value),
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                  },
                ],
              }}
              options={CHARTOPTIONS}
            />
          </div>
          <div>
            <div style={style2}>Income</div>
            <div style={style3}>
              {rec.map((record) => {
                record.month === date.getMonth() + 1
                  ? record.InorOut
                    ? localStorage.setItem(
                        "total",
                        parseInt(localStorage.getItem("total")) + record.value
                      )
                    : ""
                  : "";
              })}
              Rs {localStorage.getItem("total")}
            </div>
            {localStorage.setItem("total", 0)}
          </div>
        </div>
        <div style={style1}>
          <div style={style6}>
            <Line
              data={{
                labels: exp.map((data) => data.type),
                datasets: [
                  {
                    label: "Cost",
                    data: exp.map((data) => data.value),
                    backgroundColor: "#FF0000",
                    borderColor: "#FF0000",
                  },
                ],
              }}
              options={CHARTOPTIONS}
            />
          </div>
          <div>
            <div style={style2}>Spending</div>
            <div style={style3}>
              {rec.map((record) => {
                record.month === date.getMonth() + 1
                  ? !record.InorOut
                    ? localStorage.setItem(
                        "total",
                        parseInt(localStorage.getItem("total")) + record.value
                      )
                    : ""
                  : "";
              })}
              Rs {localStorage.getItem("total")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
