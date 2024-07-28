import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import PieChart from "./PieChart";
// import data from "../data/assets.json";
import "./AssetsandGoals.css";
import Box from "./Box";
import send from "../assets/send.png";
import { ToastContainer, toast } from "react-toastify";
export default function AssetsandGoals() {
  let style = {
    // width: "80%",
    // paddingTop: "2rem",
    borderRadius: "20px",
    // marginLeft: "1rem",
    marginRight: "3rem",
    marginBottom: "1rem",
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
  const [date, setDate] = useState(new Date());
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  localStorage.setItem("total", 0);
  let monthly = [];
  localStorage.setItem("month", 0);
  //   localStorage.setItem("monthlyTot",0)
  for (let i = 1; i <= 12; i++) {
    rec.map((record) =>
      !record.InorOut
        ? parseInt(record.month) === i
          ? localStorage.setItem(
              "total",
              parseInt(localStorage.getItem("total")) + record.value
            )
          : ""
        : ""
    );
    monthly.push({
      i: parseInt(localStorage.getItem("total")),
      month: i,
    });

    localStorage.setItem(`${i}`, localStorage.getItem("total"));

    localStorage.setItem("total", 0);
  }

  console.log(monthly);

  // let date = new Date();
  // let rec = JSON.parse(localStorage.getItem("records") || "[]");
  // localStorage.setItem("total", 0);
  // let newRec = rec.filter((record) => record.InorOut === 1);
  // newRec.map((record) =>
  // record.month === date.getMonth() + 1
  //   ? localStorage.setItem(
  //       "total",
  //       parseInt(localStorage.getItem("total")) + record.value
  //     )
  //   : ""
  // );
  let val = parseInt(localStorage.getItem("total"));
  localStorage.setItem("total", 0);
  let [save, setSave] = useState(0);
  let prevSave = parseInt(localStorage.getItem("savings") || 0);
  const [descText, setDescText] = useState("");
  const [amtText, setAmt] = useState("");
  const handleChange = (e) => {
    setDescText(e.target.value);
  };
  const handleChange1 = (e) => {
    setAmt(e.target.value);
  };
  const saveAmt = () => {
    // setSave(x);
    if (descText === "" || amtText === "") {
      toast.error("Enter all values to log Transaction");

      console.log("HO gaya");
    } else if (parseInt(amtText) < 0) {
      toast.error("Enter positive values");
    } else {
      console.log(prevSave);
      localStorage.setItem("savings", prevSave + parseInt(amtText));
      console.log(amtText);
      window.location.reload();
      localStorage.setItem("curr-month", date.getMonth() + 1);
    }
  };
  date.getMonth() + 1 !== parseInt(localStorage.getItem("curr-month"))
    ? localStorage.setItem("savings", 0)
    : "";
  let data = [
    { label: "Gold", value: localStorage.getItem("gold") },
    { label: "Warehouse", value: localStorage.getItem("ware") },
    { label: "Stock", value: localStorage.getItem("stock") },
    { label: "Land", value: localStorage.getItem("land") },
  ];

  return (
    <>
      <div
        className="section"
        style={{
          // marginTop: "8%",
          // marginLeft: "3rem",
          display: "flex",
          // background: "#EAE8E3",
          background: "linear-gradient(90deg,#12192C,#062a6e)",
          borderRadius: "20px",
          boxShadow: "0px 5px 10px #12192c",
          padding: "2rem",
          minWidth: "80vw",
          justifyContent: "center",
        }}
      >
        <div>
          <div className="goals-section">
            <div
              className="monthly-data"
              style={{
                fontSize: "14px",
                background: "aliceblue",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                borderRadius: "20px",
              }}
            >
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  January {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("1")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  February {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("2")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>March {date.getFullYear()}:</div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("3")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>April {date.getFullYear()}:</div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("4")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>May {date.getFullYear()}:</div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("5")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>June {date.getFullYear()}:</div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("6")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>July {date.getFullYear()}:</div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("7")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  August {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("8")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  September {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("9")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  October {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("10")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  November {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("11")}
                </div>
              </div>
              <div
                className="month"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "50%",
                  //   width: "12vw",
                  marginLeft: "1rem",
                }}
              >
                <div style={{ color: "gray" }}>
                  December {date.getFullYear()}:
                </div>
                <div style={{ marginLeft: "1rem", fontWeight: "600" }}>
                  Rs {localStorage.getItem("12")}
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "90%" }}>
            <div
              style={{
                fontSize: "40px",
                fontWeight: "500",
                color: "gold",
                margin: "1rem",
              }}
            >
              Goals
            </div>
            <hr />
            <div style={{ fontSize: "14px", color: "white" }}>
              A plan you have for your money. You can have short-term and
              long-term goals, saving up Rs 10,000 is a short-term goal, while
              investing for retirement is a long-term financial goal. Your goals
              should give you focus and keep you accountable, no matter how long
              they take to make happen{" "}
            </div>
          </div>
          <br />
          <br />
          <div style={{ fontSize: "16px", color: "gold", marginRight: "3rem" }}>
            Enter Amount Saved
            <hr />
          </div>
          <div
            className="inputFullBox"
            style={{
              // marginTop: "0.5rem",
              border: "1px solid black",
              // height: "7.5%",
              marginRight: "3rem",
              borderRadius: "10px",
              boxShadow: "0px 5px 10px #12192c",
              marginBottom: "1rem",
              // marginLeft: "1rem",
              // width: "100%",
              padding: "0.5rem",
              // background: "#f9f9f9",
              background: "aliceblue",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <div className="dropdown">
                <button className="dropbtn">{type}</button>
                <div className="dropdown-content">
                <a onClick={() => setType("Income")}>Income</a>
                <a onClick={() => setType("Expense")}>Expense</a>
                </div>
                </div>
                <div>
                <div className="dropdown">
                <button className="dropbtn">{category}</button>
                <div className="dropdown-content">
                <a onClick={() => setCategory("Food")}>Food</a>
                <a onClick={() => setCategory("Shopping")}>Shopping</a>
                <a onClick={() => setCategory("Transportation")}>
                Transportation
                </a>
                <a onClick={() => setCategory("Others")}>Others</a>
                </div>
                </div>
              </div> */}
              {/* <input type="number" /> */}
              <div
                className="inputdiv"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  name=""
                  id="input1"
                  placeholder="Describe"
                  onChange={handleChange}
                  value={descText}
                />
              </div>
              <div className="inputdiv">
                <input
                  type="number"
                  name=""
                  id="input"
                  placeholder="Amount"
                  onChange={handleChange1}
                  value={amtText}
                />
              </div>
              <img src={send} alt="" onClick={() => saveAmt()} />
            </div>
          </div>

          <div style={style}>
            <div>
              <div style={style1}>
                <div style={style2}>
                  <div style={style3}>Saving Goal</div>
                  <div style={{ color: "gold" }}>Progress To Month</div>
                </div>
                <div style={style5}>
                  <span style={style4}>
                    Rs {localStorage.getItem("savings")} /
                  </span>{" "}
                  {/* Rs 100000 */}
                  {localStorage.getItem("saving-goal")}
                </div>
              </div>
            </div>
            <Box
              x={parseInt(localStorage.getItem("savings"))}
              y={parseInt(localStorage.getItem("saving-goal"))}
            />
          </div>
        </div>
        <div className="assets-section">
          <div className="assets" style={{ width: "90%" }}>
            <div style={{ fontSize: "40px", fontWeight: "500", color: "gold" }}>
              Assets
            </div>
            <hr />
            <div style={{ fontSize: "14px", color: "white" }}>
              Current assets are cash and others that are expected to be
              converted to cash or consumed either in a year or in the operating
              cycle (whichever is longer), without disturbing the normal
              operations of a business. These assets are continually turned over
              in the course of a business during normal business activity{" "}
            </div>
            <div
              className="pie"
              style={{
                background: "aliceblue",
                borderRadius: "20px",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <PieChart data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
