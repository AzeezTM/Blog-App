import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
    
    const Admin = [
        {
          title: "Manage Posts",
          path: "/",
        //   icon: <AiIcons.AiFillHome/>,
          className: "link"
        },
      
      
        {
          title: "Manage Users",
          path: "/addUser",
        //   icon: <CgIcons.CgProfile/>,
          className: "link"
        },
      
        {
          title: "Manage Topics",
          path: "/addTopic",
        //   icon: < FaIcons.FaSignInAlt/>,
          className: "link"
        },
      ];

    return(
        < >
        <div className="side-bar container-fluid">

          <ul>
            <li>
                <Link onClick={Admin} className="link" to="#" >Manage Posts</Link>
            </li>
            <li>
                <Link onClick={Admin} className="link" >Manage Users</Link>
            </li>
            <li>
                <Link onClick={Admin} className="link"  >Manage Topics</Link>
            </li>
        </ul>
        </div>
        </>
    )
}