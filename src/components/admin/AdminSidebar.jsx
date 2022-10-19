import React from "react";
import "./adminGeneral.css"
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";

export default function AdminSidebar() {
  const activeLink = "activeText"
  const normalLink = "text"

  const SidebarData =[
    {
        title: "Manage Post",
        path: "/",
        icon: <BsIcons.BsFillFileEarmarkPostFill />
        
    },
    {
        title: "Manage Users",
        path: "/manageuser",
        icon: <CgIcons.CgProfile />
    },
    {
        title: "Manage Topics",
        path: "/managetopic",
        icon: <MdIcons.MdTopic />

    },
    // {
    //     title: "Manage Topics",
    //     path: "/managetopic",

    // },
]

    return(
        // < >
         <React.Fragment>
            <section className="Adminwrapper">
                <div className='text-white side-bar container-fluid'>
                   {
                        SidebarData.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <ul>
                                        <li>

                                            <Link 
                                            to={item.path}
                                            
                                            style={{paddingLeft:"10px", color:"white", fontSize:"18px"}}
                                            className={({isActive})=>
                                            isActive ? activeLink : normalLink
                                            }> {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                   }
                </div>
            </section>
        </React.Fragment>

      
    )
}

