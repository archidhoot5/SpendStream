import React from "react";
import salary from "../assets/salary.png";
import ecommerce from "../assets/ecommerce.png";
import shop from "../assets/shop.png";
import credit from "../assets/credit.png";

export default function IncomeSource() {
  let style = {
    // width: "80%",
    margin: "1rem",
  };
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
  };
  let style2 = {
    fontSize: "16px",
    fontWeight: "600",
    color: "gold",
  };
  let style3 = {
    fontSize: "12px",
    fontWeight: "200",
    color: "gold",
  };
  let style4 = {
    // marginBottom: "1rem",
    padding: "0rem 1rem 0rem 1rem",
    // paddingTop: "0rem",
    // paddinBotton: "0rem",
    fontSize: "12px",
    display: "flex",
    flex: "1",
    flexWrap: "wrap",
    // width: "100%",
    columnGap: "5%",
    justifyContent: "space-between",
  };
  let style5 = {
    color: "white",
    fontSize: "11px",
  };
  let style6 = {
    fontSize: "14px",
    fontWeight: "500",
    color: "gold",
  };
  let style7 = {
    width: "35%",
    height: "60%",
    marginRight: "0.75rem",
  };
  let style8 = {
    width: "40%",
    display: "flex",
    // justifyContent: "space-between",
    marginBottom: "0.75rem",
  };
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  let date = new Date();
  let income = [];
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
  return (
    <div style={style}>
      <div style={style1}>
        <div style={style2}>Income Source</div>
        <div style={style3}>View all</div>
      </div>
      <hr />
      <div style={style4}>
        <div style={style8}>
          <img src={salary} alt="" style={style7} />
          <div>
            <div style={style5}>Salary</div>
            <div style={style6}>Rs {income[0]}</div>
          </div>
        </div>
        <div style={style8}>
          <img src={ecommerce} alt="" style={style7} />
          <div>
            <div style={style5}>E-Commerce</div>
            <div style={style6}>Rs {income[1]}</div>
          </div>
        </div>
        <div style={style8}>
          <img src={shop} alt="" style={style7} />
          <div>
            <div style={style5}>My Shop</div>
            <div style={style6}>Rs {income[2]}</div>
          </div>
        </div>
        <div style={style8}>
          <img src={credit} alt="" style={style7} />
          <div>
            <div style={style5}>Credit</div>
            <div style={style6}>Rs {income[3]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
