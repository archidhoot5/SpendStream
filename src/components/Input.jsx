import React, { useState } from "react";
import "./Input.css";
import send from "../assets/send.png";
import records from "../data/records.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Input({ date, month, year }) {
  let style = {
    // marginTop: "0.5rem",
    border: "1px solid black",
    // height: "7.5%",
    // marginRight: "1rem",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px #12192c",
    // marginBottom: "1rem",
    // marginLeft: "1rem",
    // width: "100%",
    padding: "0.5rem",
    // background: "#f9f9f9",
    background: "aliceblue",
  };
  let style2 = {
    fontSize: "18px",
    fontWeight: "600",
    marginLeft: "1rem",
    color: "gold",
  };
  let style3 = {
    marginLeft: "1rem",
    // width: "80%",
  };
  let style4 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  //   let dropbtn = {
  //     backgroundColor: "#04AA6D",
  //     color: "white",
  //     padding: "16px",
  //     fontSize: "16px",
  //     border: "none",
  //   };
  //   let dropdown = {
  //     position: "relative",
  //     display: "inline-block",
  //   };
  //   let dropdownContent = {
  //     display: "none",
  //     position: "absolute",
  //     backgroundColor: "#f1f1f1",
  //     minWidth: "160px",
  //     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  //     zIndex: "1",
  //   };
  const [descText, setDescText] = useState("");
  const [amtText, setAmt] = useState("");
  const [type, setType] = useState("Type");
  const [category, setCategory] = useState("Category");
  // const [date, setDate] = useState(new Date());
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  console.log(rec);
  const handleChange = (e) => {
    setDescText(e.target.value);
  };
  const handleChange1 = (e) => {
    setAmt(e.target.value);
  };

  const showToastMessage = () => {
    toast.error("Error Notification !");
  };

  const writeData = () => {
    let bal = parseInt(localStorage.getItem("balance"));
    console.log(bal);
    if (
      category === "Category" ||
      type === "Type" ||
      descText === "" ||
      amtText === ""
    ) {
      toast.error("Enter all values to log Transaction");

      console.log("HO gaya");
    } else if (parseInt(amtText) < 0) {
      toast.error("Enter positive values");
    } else if (type === "Expense" && bal - parseInt(amtText) < 0) {
      toast.error("You cannot make more transactions");
    } else {
      rec.push({
        itemNo: rec.length + 1,
        date: date,
        month: month + 1,
        year: year,
        type: category,
        title: descText,
        value: parseInt(amtText),
        InorOut: type === "Income" ? 1 : 0,
      });

      let balArr = JSON.parse(localStorage.getItem("balanceArray") || "[]");

      type === "Income"
        ? localStorage.setItem("balance", bal + parseInt(amtText))
        : // console.log("Hello Add")
          localStorage.setItem("balance", bal - parseInt(amtText));
      // console.log("Hello Subtract");
      localStorage.setItem("records", JSON.stringify(rec));
      console.log(localStorage.getItem("balance"));
      balArr.push(parseInt(localStorage.getItem("balance")));
      localStorage.setItem("balanceArray", JSON.stringify(balArr));
      window.location.reload();
    }
    // records.push({
    //   date: date.getDate(),
    //   month: date.getMonth(),
    //   year: date.getFullYear(),
    //   type: category,
    //   title: descText,
    //   value: parseInt(amtText),
    //   InorOut: type === "Income" ? 1 : 0,
    // });
    console.log(JSON.parse(localStorage.getItem("records") || "[]"));
  };
  return (
    <>
      <div style={style2}>Track Expense</div>
      <hr style={style3} />
      <div className="inputFullBox" style={style}>
        <div style={style4}>
          <div className="dropdown">
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
                <a onClick={() => setCategory("Home")}>Home</a>
                <a onClick={() => setCategory("Salary")}>Salary</a>
                <a onClick={() => setCategory("E-Commerce")}>E-Commerce</a>
                <a onClick={() => setCategory("Shop")}>Shop</a>
                <a onClick={() => setCategory("Credit")}>Credit</a>
                <a onClick={() => setCategory("Others")}>Others</a>
              </div>
            </div>
          </div>
          {/* <input type="number" /> */}
          <div className="inputdiv">
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
          <img src={send} alt="" onClick={() => writeData()} />
        </div>
      </div>
    </>
  );
}
