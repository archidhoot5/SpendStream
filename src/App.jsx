import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import SideDashboard from "./components/SideDashboard";
import TransactionRecords from "./components/TransactionRecords";
import Assets from "./components/Assets";
import AssetsandGoals from "./components/AssetsandGoals";
import Charts from "./components/Charts";
import Settings from "./components/settings/Settings";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/sidebar/Sidebar";
import Chatbot from "./components/Chatbot";

function App({ filter }) {
  const [count, setCount] = useState(0);
  // localStorage.setItem("dashboard-item", 1);

  const query = window.location.search;
  console.log(query);

  const params = new URLSearchParams(query);
  const username = params.get("user");
  const bb = params.get("bb");
  const gold = params.get("gold");
  const ware = params.get("ware");
  const stock = params.get("stock");
  const land = params.get("land");
  const saving = params.get("saving");
  const income = params.get("income");
  const trialFlag = params.get("trial");
  console.log(gold);
  console.log(ware);
  console.log(stock);
  console.log(land);

  let flag = parseInt(localStorage.getItem("flag")) || 0;
  console.log(flag);
  if (flag === 0) {
    localStorage.setItem("balance", bb);
    localStorage.setItem("username", username);
    localStorage.setItem("gold", gold);
    localStorage.setItem("ware", ware);
    localStorage.setItem("stock", stock);
    localStorage.setItem("land", land);
    localStorage.setItem("saving-goal", saving);
    localStorage.setItem("income-goal", income);
    if (trialFlag !== "1") {
      localStorage.setItem("flag", 1);
    }
  }

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Table />;
      break;
    case "/transaction-records":
      component = <TransactionRecords />;
      localStorage.setItem("dashboard-item", 2);
      break;
    case "/assets-and-goals":
      component = <AssetsandGoals />;
      break;
    case "/settings":
      component = <Settings />;
      break;
  }
  return (
    <>
      <Sidebar />
      {/* <SideDashboard flag={0} /> */}
      {component}
      {/* <TransactionRecords filter={filter} /> */}
      {/* <AssetsandGoals /> */}
      <ToastContainer position="top-right" />
      <div className="chatbot">
        <Chatbot />
      </div>
    </>
  );
}

export default App;
