import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import "./Home.css";
import Topbar from "../topbar/Topbar";

function Home() {
  return (
    <>
      <div className="">
        <div className="posterPag">
          <div className="posterNav ">
            <div className="firstdiv">
              {/* <span><i className="barIcon fa-solid fa-bars"></i></span> */}

              {/* <div className="drpdown"> */}
              {/* <span><i className="barIcon fa-solid fa-bars"></i></span> */}

              <div class="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    <i className="barIcon fa-solid fa-bars"></i>
                  </span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      Home
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      About
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              {/* </div> */}

              <div className="loginDiv">
                <span className="login">Login</span>
              </div>
            </div>

            <h1 className="pageTitle text-center fw-bold mt-5">
              <i>The Ants of The Mind</i>
            </h1>
            <Topbar />
          </div>
        </div>
        <Posts />
      </div>
    </>
  );
}

export default Home;
