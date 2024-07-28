import { React, useState } from "react";
import "../sidebar/assets/css/styles.css";
import logout from "./assets/logout.png";
import dashboard from "./assets/dashboard.png";
import asset from "./assets/asset.png";
import banknotes from "./assets/banknotes.png";
import person from "./assets/person.png";
import profile from "./assets/Profile-Male-PNG.png";

export default function Sidebar() {
  //   const [activeSec, setActiveSec] = useState(1);
  const handleClick = (x) => {
    localStorage.setItem("dashboard-item", x);
  };
  let style = { backgroundColor: "#0C5DF4" };
  return (
    <>
      <div className="l-navbar expander" id="navbar">
        <nav className="nav">
          <div>
            <div className="nav__brand desktop_only">
              {/* <ion-icon name="menu-outline" class="nav__toggle" id="nav-toggle"></ion-icon> */}
              {/* <img
                src="/src/assets/menu.png"
                alt=""
                className="nav__toggle"
                id="nav-toggle"
              /> */}
              <a href="#" className="nav__logo">
                SpendStream
              </a>
            </div>
            <a href="#" className="nav_link active desktop_only">
              <div className="user_img">
                <img src={profile} alt="user-profile" className="user_img" />
              </div>
            </a>
            <div
              className="username desktop_only"
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              {localStorage.getItem("username")}
            </div>
            <br className="desktop_only" />
            <br className="desktop_only" />

            <div className="nav__list">
              <a href="#" class="nav__link mobile_only">
                {/* <ion-icon name="person-outline" class="nav__icon"></ion-icon> */}
                <img src={person} alt className="nav__icon" />
              </a>
              {localStorage.getItem("dashboard-item") === "1" ? (
                <a
                  href="/"
                  className="nav__link"
                  onClick={() => handleClick(1)}
                  style={style}
                >
                  {/* <ion-icon name="home-outline" class="nav__icon"></ion-icon> */}
                  <img src={dashboard} alt className="nav__icon" />
                  <span className="nav__name">Dashboard</span>
                </a>
              ) : (
                <a
                  href="/"
                  className="nav__link"
                  onClick={() => handleClick(1)}
                >
                  {/* <ion-icon name="home-outline" class="nav__icon"></ion-icon> */}
                  <img src={dashboard} alt className="nav__icon" />
                  <span className="nav__name">Dashboard</span>
                </a>
              )}
              {localStorage.getItem("dashboard-item") === "2" ? (
                <a
                  href="/transaction-records"
                  className="nav__link"
                  onClick={() => handleClick(2)}
                  style={style}
                >
                  {/* <ion-icon name="cash-outline" class="nav__icon"></ion-icon> */}
                  <img src={banknotes} alt className="nav__icon" />
                  <span className="nav__name">Incomes and Expenses</span>
                </a>
              ) : (
                <a
                  href="/transaction-records"
                  className="nav__link"
                  onClick={() => handleClick(2)}
                >
                  {/* <ion-icon name="cash-outline" class="nav__icon"></ion-icon> */}
                  <img src={banknotes} alt className="nav__icon" />
                  <span className="nav__name">Incomes and Expenses</span>
                </a>
              )}

              {/* <div className="nav__link collapse"> */}
              {/* <ion-icon name="home-outline" class="nav__icon"></ion-icon> */}
              {/* <img src="/src/assets/asset.png" alt className="nav__icon" />
                <span className="nav__name">Assets and Goals</span>
              </div> */}

              {localStorage.getItem("dashboard-item") === "3" ? (
                <a
                  href="/assets-and-goals"
                  className="nav__link"
                  onClick={() => handleClick(3)}
                  style={style}
                >
                  {/* <ion-icon name="cash-outline" class="nav__icon"></ion-icon> */}
                  <img src={asset} alt className="nav__icon" />
                  <span className="nav__name">Assets and Goals</span>
                </a>
              ) : (
                <a
                  href="/assets-and-goals"
                  className="nav__link"
                  onClick={() => handleClick(3)}
                >
                  {/* <ion-icon name="cash-outline" class="nav__icon"></ion-icon> */}
                  <img src={asset} alt className="nav__icon" />
                  <span className="nav__name">Assets and Goals</span>
                </a>
              )}

              {/* <a href="#" class="nav__link">
                <ion-icon
                  name="stats-chart-outline"
                  class="nav__icon"
                ></ion-icon>
                <span class="nav__name">Analytics</span>
              </a> */}
              {/* {localStorage.getItem("dashboard-item") === "4" ? (
                <a
                  href="/settings"
                  class="nav__link"
                  onClick={() => handleClick(4)}
                  style={style}
                > */}
              {/* <ion-icon name="settings-outline" class="nav__icon"></ion-icon> */}
              {/* <img
                    src="/src/assets/settings.png"
                    alt=""
                    className="nav__icon"
                  />
                  <span class="nav__name">Settings</span>
                </a>
              ) : (
                <a
                  href="/settings"
                  class="nav__link"
                  onClick={() => handleClick(4)}
                > */}
              {/* <ion-icon name="settings-outline" class="nav__icon"></ion-icon> */}
              {/* <img
                    src="/src/assets/settings.png"
                    alt=""
                    className="nav__icon"
                  />
                  <span class="nav__name">Settings</span>
                </a>
              )} */}
              <a
                href="https://spend-stream-home.vercel.app/"
                className="nav__link"
              >
                {/* <ion-icon name="log-out-outline" class="nav__icon"></ion-icon> */}
                <img src={logout} alt className="nav__icon" />
                <span className="nav__name">Log Out</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
