import React, { useEffect, useRef, useState } from "react";
import "./FilterSlide.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TransactionSlide from "./TransactionSlide";
import App from "../App";
import records from "../data/records.json";

export default function FilterSlide() {
  //   const [showCont, setShowCont] = useState(false);
  let style = {
    border: "2px solid gray",
    borderRadius: "15px",
    width: "25%",
    padding: "1rem",
  };
  let results = [
    { id: 1, name: "Hello World" },
    { id: 2, name: "Hello World" },
    { id: 3, name: "Hello World" },
    { id: 4, name: "Hello World" },
    { id: 5, name: "Hello World" },
    { id: 6, name: "Hello World" },
  ];

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  let filter = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  const handleClick = () => {
    console.log("Hello");
    console.log(filter.date);
    // <App filter={filter} />;
    console.log("Hello");
  };

  const [cards, setCard] = useState([]);
  function addCard() {
    records.map((record) =>
      record.date === filter.date ? setCard(cards.push(record)) : ""
    );
    <TransactionSlide filter={filter} cards={cards} />;
    console.log("ok");
  }
  return (
    <>
      <div style={style}>
        <div
          className="title"
          style={{ textAlign: "center", fontSize: "30px", fontWeight: "600" }}
        >
          Search
        </div>
        <br />
        <div
          className="Category"
          style={{ fontSize: "16px", position: "relative" }}
        >
          <div className="title1">Category</div>
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
            <div className="label">A</div>
            <div className="label">B</div>
            <div className="label">C</div>
            <div className="label">D</div>
          </div>
        </div>
        <br />
        <div className="type">
          <div style={{ fontSize: "16px" }}>Type</div>
          <div>
            <div
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
            >
              Expense
            </div>
            <br />
            <div
              className="Income"
              style={{
                border: "1px solid black",
                width: "30%",
                fontSize: "18px",
                borderRadius: "10px",
                marginTop: "0.5rem",
                margin: "auto",
                padding: "0.5rem",
                textAlign: "center",
              }}
            >
              Income
            </div>
            <br />
            <div
              className="Both"
              style={{
                border: "1px solid black",
                width: "30%",
                fontSize: "18px",
                borderRadius: "10px",
                marginTop: "0.5rem",
                margin: "auto",
                padding: "0.5rem",
                textAlign: "center",
              }}
            >
              Both
            </div>
          </div>
        </div>
        <br />
        <div className="calendar">
          Calendar
          <Calendar onChange={onChange} value={date} />
          {console.log(date)}
          {/* {date.toDateString()} */}
        </div>
        <button onClick={() => addCard()}>Filter</button>
      </div>
    </>
  );
}
