import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import "./Home.css";
import Topbar from "../topbar/Topbar";
// import SideBar from "../SideBarData/SideBarData";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { SideBarData } from "../SideBarData/SideBarData";
// import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import { IconContext } from "react-icons"


function Home() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar)



  const SideBarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome/>,
      className: "nav-text"
    },
  
  
    {
      title: "Profile",
      path: "/profile",
      icon: <CgIcons.CgProfile/>,
      className: "nav-text"
    },
  
    {
      title: "Signup",
      path: "/signup",
      icon: < FaIcons.FaSignInAlt/>,
      className: "nav-text"
    },
  ]


  
  return (
    <>
      <div className="posterPag">
        <div className="posterNav ">
          <div className="firstdiv">
            {/* <IconContext.Provider value={{color: "#fff"}}> */}
            
            <div className="sidebar mt-3">
              <div className="icondiv">
              <Link
                to="#"
                className="icon"
              >
                <FaIcons.FaBars onClick={showSidebar} />
               {/* <span><i className="barIcon fa-solid fa-bars"></i></span> */}
              </Link>
              </div>

              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                     <ul className="nav-menu-items" onClick={showSidebar}>
                           <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                            </Link>

                           </li>
                           {SideBarData.map((item, index) => {
                            return(
                              <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>
                                      {item.title}
                                    </span>
                                </Link>

                              </li>
                            )
                           })}
                     </ul>
              </nav>
              {/* </IconContext.Provider> */}
             
            </div>

           
            <div className="loginDiv mt-3">
              {/* <span className="login">Login</span> */}
              <Link className="login">
              Login
              </Link>
            </div>
          </div>

          <h1 className="pageTitle text-center fw-bold mt-4">
            <i>The Ants of The Mind</i>
          </h1>
          <Topbar />
        </div>
        <Posts />
      </div>
    </>
  );
}

export default Home;
