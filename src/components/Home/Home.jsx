import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import "./Home.css";
import Topbar from "../topbar/Topbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SideBar from "../Sidebar/SideBar";
import { useEffect } from "react";
import axios from "axios";




function Home() {
  const BLOG_API =   "https://blog-9i5d.onrender.com"
  const SEARCH_API = BLOG_API + "/blog-post";

  const [posts, setPosts] = useState([]);
  //new API = "https://blog-9i5d.onrender.com"
useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get(
        ("https://blog-9i5d.onrender.com/blog-post")
      // ("https://active-info.onrender.com/blog-post")
        // (`${BLOG_API}/blog-post`)
      );
      setPosts(data.blog);
      console.log(data);
      console.log(posts);
    }
  
    fetchBlogs();
  }, []);  



  
  return (
    <>
      <div className="posterPag">
        
        <div className="posterNav ">
          <div>
            <SideBar />
          </div>

          <h1 className="pageTitle text-center  fw-bold mt-4">
            <i>The Ants of The Mind</i>
          </h1>
          <Topbar />
        </div>
     
        <Posts posts={posts} />

        {/* <h1>{posts.title}</h1> */}
      </div>
    </>
  );
}

export default Home;
