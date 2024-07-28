import React, { useState } from "react";
import SideDashboard from "./SideDashboard";
import FilterSlide from "./FilterSlide";
import TransactionSlide from "./TransactionSlide";
import records from "../data/records.json";
import "./FilterSlide.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Input from "./Input";
// import records from "../data/records.json";

export default function TransactionRecords() {
  const style = {
    // width: "70rem",
    // height: "85%",
    borderRadius: 20,
    // marginTop: "8%",
    // marginLeft: "2rem",
    marginRight: "auto",
    boxShadow: "0px 5px 10px #12192c",
    backgroundColor: "linear-gradient(90deg,#12192C,#062a6e)",
    display: "flex",
    // justifyContent: "center",
    // flexWrap: "wrap",
    padding: "2rem",
    gap: "10%",
  };

  let style1 = {
    // border: "2px solid gray",
    border: "2px solid gold",
    borderRadius: "15px",
    // width: "25%",
    padding: "2rem",
  };

  const [date, setDate] = useState(new Date());

  const [type, setType] = useState(2);
  const [category, setCategory] = useState("");
  let filter = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    type: type,
    category: category,
  };
  const onChange = (date) => {
    setDate(date);
  };
  const handleClick = (value) => {
    if (value === filter.value) {
      setType(2);
      filter.value = type;
    } else {
      setType(value);
      filter.type = type;
    }
  };

  const categoryClick = (value) => {
    if (value === filter.category) {
      setCategory("");
      filter.category = category;
    } else {
      setCategory(value);
      filter.category = category;
    }
  };

  // const [cards, setCard] = useState([]);
  // records.map((record) => setCard(...cards, record));
  return (
    <div className="table" style={style}>
      <div className="filter" style={style1}>
        <div
          className="title"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "600",
            color: "gold",
          }}
        >
          Search
        </div>
        <br />
        <div
          className="Category"
          style={{ fontSize: "16px", position: "relative" }}
        >
          <div className="title1" style={{ color: "gold" }}>
            Category
          </div>
          <br />
          {/* <input
            className="categoryLabels"
            style={{
              border: "1px solid gray",
              width: "90%",
              height: "2rem",
              borderRadius: "10px",
              marginTop: "0.5rem",
              backgroundColor: "white",
              padding: "0.5rem",
              color: "black",
            }}
            placeholder="Add Labels"
            // onFocus={setShowCont(true)}
          />

          {/* {showCont && ( */}
          {/* <div className="results-container">
            {results.map((item) => {
              return (
                <div key={item.id} className="item">
                  {item.name}
                </div>
              );
            })}
          </div> */}
          {/* )}  */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {category === "Food" ? (
              <div
                className="label"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => categoryClick("Food")}
              >
                Food
              </div>
            ) : (
              <div className="label" onClick={() => categoryClick("Food")}>
                Food
              </div>
            )}
            {category === "Transportation" ? (
              <div
                className="label"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => categoryClick("Transportation")}
              >
                Transportation
              </div>
            ) : (
              <div
                className="label"
                onClick={() => categoryClick("Transportation")}
              >
                Transportation
              </div>
            )}
            {category === "Shopping" ? (
              <div
                className="label"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => categoryClick("Shopping")}
              >
                Shopping
              </div>
            ) : (
              <div className="label" onClick={() => categoryClick("Shopping")}>
                Shopping
              </div>
            )}
            {category === "Home" ? (
              <div
                className="label"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => categoryClick("Home")}
              >
                Home
              </div>
            ) : (
              <div className="label" onClick={() => categoryClick("Home")}>
                Home
              </div>
            )}
            {category === "Others" ? (
              <div
                className="label"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => categoryClick("Others")}
              >
                Others
              </div>
            ) : (
              <div className="label" onClick={() => categoryClick("Others")}>
                Others
              </div>
            )}
            {category === "" ? (
              <div
                className="label"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => categoryClick("")}
              >
                All
              </div>
            ) : (
              <div className="label" onClick={() => categoryClick("")}>
                All
              </div>
            )}
          </div>
        </div>
        <br />
        <div className="type">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "16px", color: "gold" }}>Type</div>
            <div
              className="clear"
              style={{ fontSize: "10px", color: "gray" }}
              onClick={() => handleClick(2)}
            >
              Clear
            </div>
          </div>
          <br />
          <div>
            {type === 0 ? (
              <div
                className="Expense"
                style={{
                  border: "1px solid gold",
                  width: "30%",
                  fontSize: "18px",
                  borderRadius: "10px",
                  marginTop: "0.5rem",
                  margin: "auto",
                  padding: "0.5rem",
                  textAlign: "center",
                  backgroundColor: "red",
                  color: "white",
                  transition: "all 0.3s",
                }}
                onClick={() => handleClick(0)}
              >
                Expense
              </div>
            ) : (
              <div
                className="Expense"
                style={{
                  border: "1px solid gold",
                  width: "30%",
                  fontSize: "18px",
                  borderRadius: "10px",
                  marginTop: "0.5rem",
                  margin: "auto",
                  padding: "0.5rem",
                  textAlign: "center",
                  transition: "all 0.3s",
                  color: "white",
                }}
                onClick={() => handleClick(0)}
              >
                Expense
              </div>
            )}
            {/* <div
              className="Expense"
              style={{
                border: "1px solid black",
                width: "30%",
                fontSize: "18px",
                borderRadius: "10px",
                marginTop: "0.5rem",
                margin: "auto",
                padding: "0.5rem",
                textAlign: "center",
                transition: "all 0.3s",
              }}
              onClick={()=>handleClick("Expense")}
            >
              Expense
            </div> */}
            <br />
            {type === 1 ? (
              <div
                className="Income"
                style={{
                  border: "1px solid gold",
                  width: "30%",
                  fontSize: "18px",
                  borderRadius: "10px",
                  marginTop: "0.5rem",
                  margin: "auto",
                  padding: "0.5rem",
                  textAlign: "center",
                  backgroundColor: "green",
                  color: "white",
                  transition: "all 0.3s",
                }}
                onClick={() => handleClick(1)}
              >
                Income
              </div>
            ) : (
              <div
                className="Income"
                style={{
                  border: "1px solid gold",
                  width: "30%",
                  fontSize: "18px",
                  borderRadius: "10px",
                  marginTop: "0.5rem",
                  margin: "auto",
                  padding: "0.5rem",
                  textAlign: "center",
                  color: "white",
                  transition: "all 0.3s",
                }}
                onClick={() => handleClick(1)}
              >
                Income
              </div>
            )}
            <br />
          </div>
        </div>
        <br />
        <div className="calendar">
          <div style={{ color: "gold" }}>Calendar</div>
          <br />
          <Calendar onChange={onChange} value={date} />
          {console.log(date)}
          {date.toDateString()}
          {date.getMonth()}
        </div>
      </div>
      <div>
        {" "}
        <div style={{ minHeight: "50vh" }}>
          <TransactionSlide filter={filter} cards={records} />
        </div>
        <div
          style={{
            paddingRight: "1rem",
            marginRight: "1rem",
            marginTop: "2rem",
          }}
        >
          <Input
            date={date.getDate()}
            month={date.getMonth()}
            year={date.getFullYear()}
          />
        </div>
      </div>
    </div>
  );
}
