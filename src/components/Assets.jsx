import React from "react";

export default function Assets() {
  let style = {
    marginLeft: "1rem",
    marginRight: "1rem",
    paddingTop: "1rem",
    fontWeight: "600",
    marginBottom: "0rem",
    width: "80%",
  };
  let style2 = {
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    // padding: "1rem",
    paddingTop: "0rem",
    // paddingBottom: "1.5rem",
    fontSize: "12px",
    display: "flex",
    flex: "1",
    flexWrap: "wrap",
    // width: "80%",
    columnGap: "5%",
    justifyContent: "space-between",
    width: "70%",
  };
  let style3 = {
    color: "gray",
  };
  let style4 = {
    fontWeight: "500",
  };
  let style5 = {
    width: "50%",
    height: "40%",
    marginTop: "1rem",
    background: "aliceblue",
    borderRadius: "20px",
  };

  return (
    <>
      <div style={style5}>
        <div style={style}>
          Assets
          <hr />
        </div>
        <div style={style2}>
          <div>
            <div style={style3}>Gold</div>
            <div style={style4}>Rs {localStorage.getItem("gold")}</div>
          </div>
          <div>
            <div style={style3}>WareHouse</div>
            <div style={style4}>Rs {localStorage.getItem("ware")}</div>
          </div>
        </div>
        <div style={style2}>
          <div>
            <div style={style3}>Stock</div>
            <div style={style4}>Rs {localStorage.getItem("stock")}</div>
          </div>
          <div>
            <div style={style3}>Land</div>
            <div style={style4}>Rs {localStorage.getItem("land")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
