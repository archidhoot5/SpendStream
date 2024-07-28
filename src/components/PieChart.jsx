import React from "react";
import { Doughnut } from "react-chartjs-2";
export default function PieChart({ data }) {
  let style = {
    margin: "1rem",
    // backgroundColor: "beige",
    // paddingLeft: "4rem",
  };
  return (
    <div className="dabba" style={style}>
      <div style={{ fontSize: "16px", fontWeight: "600" }}>Balance Graph</div>
      <hr />
      <Doughnut
        data={{
          labels: data.map((data) => data.label),
          datasets: [
            {
              data: data.map((data) => data.value),
              backgroundColor: ["gold", "blue", "green", "red", "black"],
              borderRadius: 5,
            },
          ],
        }}
        isResponsive:true
      />
    </div>
  );
}
