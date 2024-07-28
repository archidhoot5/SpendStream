import React from "react";
import chatbot from "../assets/chatbot.png";
import "./Chatbot.css";

export default function Chatbot() {
  return (
    <>
      <div>
        <a href="https://spendstream.pythonanywhere.com/" target="_blank">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
              background: "white",
              //   margin: "1rem",
              marginBottom: "1rem",
              marginLeft: "2.5rem",
              //   padding: "1rem",
              borderRadius: "50%",
            }}
          >
            <img
              src={chatbot}
              alt=""
              style={{ width: "3vw", margin: "1rem" }}
              className="img"
            />
          </div>
        </a>
        <div className="desc">Chat with BudgIT</div>
      </div>
    </>
  );
}
