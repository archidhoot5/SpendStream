import React, { useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import { color } from "chart.js/helpers";
// import records from "../data/records.json";

export default function TransactionSlide({ filter, cards }) {
  let style = {
    width: "100%",
    // border: "2px solid gray",
    border: "2px solid gold",
    borderRadius: "10px",
    overflowY: "scroll",
    maxHeight: "75vh",
    // scrollbarBackground: "none",
    scrollbarWidth: "thin",
  };
  // const [total, setTotal] = useState(0);
  const sum = async (val) => {
    setTotal(total + val);
  };

  const [newRecords, setNewRecords] = useState([]);
  // const [cards, setCard] = useState([]);

  // function addCard() {
  //   records.map((record) =>
  //     record.date === filter.date ? setCard[cards.push(record)] : ""
  //   );
  // }
  // useEffect(() => {
  //   records.map((record) => setTotal((total += record.value)));
  // }, []);
  {
    // records.map((record) => setTotal(total + record.value));
  }
  console.log("This is transaction slide");

  // records.map((record) =>
  //   filter.date === record.date &&
  //   filter.month + 1 === record.month &&
  //   filter.year === record.year &&
  //   (filter.type === 2 ? true : filter.type === record.InorOut) &&
  //   (filter.category === "" ? true : filter.category === record.type)
  //     ? setTotal(total + record.value)
  //     : ""
  // );
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  const [flag, setFlag] = useState(false);
  const [cnt, setCnt] = useState(0);
  localStorage.setItem("total", 0);
  const [pos, setPos] = useState(true);
  return (
    <>
      <div className="section" style={style}>
        <div
          style={{
            fontSize: "30px",
            textAlign: "center",
            padding: "1rem",
            fontWeight: "600",
            color: "gold",
          }}
        >
          Transactions
        </div>
        <div className="cards" style={{ padding: "1rem" }}>
          {console.log("Filter Date:", filter.date)}
          {console.log(filter.type)}
          {console.log(rec)}
          {rec.map((record) =>
            filter.date === record.date &&
            filter.month + 1 === record.month &&
            filter.year === record.year &&
            (filter.type === 2 ? true : filter.type === record.InorOut) &&
            (filter.category === ""
              ? true
              : filter.category === record.type) ? (
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
            ) : (
              // () => setFlag(true))
              // setNewRecords(newRecords.push(record)))
              ""
            )
          )}

          {console.log(cnt)}

          {rec.map((record) =>
            filter.date === record.date &&
            filter.month + 1 === record.month &&
            filter.year === record.year &&
            (filter.type === 2 ? true : filter.type === record.InorOut) &&
            (filter.category === "" ? true : filter.category === record.type)
              ? record.InorOut
                ? localStorage.setItem(
                    "total",
                    parseInt(localStorage.getItem("total")) + record.value
                  )
                : localStorage.setItem(
                    "total",
                    parseInt(localStorage.getItem("total")) - record.value
                  )
              : ""
          )}
          {console.log(parseInt(localStorage.getItem("total")))}
          {parseInt(localStorage.getItem("total")) < 0
            ? () => setPos(false)
            : () => setPos(true)}
          {console.log(pos)}
          {/* {setTotal(
            records.reduce((total, record) =>
              filter.date === record.date &&
              filter.month + 1 === record.month &&
              filter.year === record.year &&
              (filter.type === 2 ? true : filter.type === record.InorOut) &&
              (filter.category === "" ? true : filter.category === record.type)
                ? setTotal(total + record.value)
                : ""
            ),
            0
          )} */}
          {/* <ExpenseCard
            data={{
              date: 12,
              month: "02",
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
              month: "02",
              year: 2024,
              type: "Food",
              title: "Fast Food",
              value: 500,
              InorOut: false,
            }}
          />
          <ExpenseCard
            data={{
              date: 12,
              month: "02",
              year: 2024,
              type: "Food",
              title: "Fast Food",
              value: 500,
              InorOut: false,
            }}
          />
          <ExpenseCard
            data={{
              date: 12,
              month: "02",
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
              month: "02",
              year: 2024,
              type: "Food",
              title: "Fast Food",
              value: 500,
              InorOut: false,
            }}
          />
          <ExpenseCard
            data={{
              date: 12,
              month: "02",
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
              month: "02",
              year: 2024,
              type: "Food",
              title: "Fast Food",
              value: 500,
              InorOut: false,
            }}
          />
          <ExpenseCard
            data={{
              date: 12,
              month: "02",
              year: 2024,
              type: "Food",
              title: "Fast Food",
              value: 500,
              InorOut: false,
            }}
          />
          <ExpenseCard
            data={{
              date: 12,
              month: "02",
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
              month: "02",
              year: 2024,
              type: "Food",
              title: "Fast Food",
              value: 500,
              InorOut: false,
            }}
          /> */}
        </div>
        <div
          className="Total"
          style={{
            fontSize: "20px",
            textAlign: "end",
            padding: "1rem",
            color: "white",
          }}
        >
          Total :{" "}
          <span
            style={
              parseInt(localStorage.getItem("total")) > 0
                ? { color: "gold" }
                : { color: "red" }
            }
          >
            {"Rs "}
            {localStorage.getItem("total")}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
