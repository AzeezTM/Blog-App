import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import axios from "axios";
import { useEffect } from "react";
import * as GrIcons from "react-icons/gr";
import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import Topbar from "../topbar/Topbar";

import { getComments as getCommentsApi, } from "../api";

function Post(props) {

  // let [like, setLike] = useState("🤍");
  // let [selects, setSelect] = useState(true);
  // const [backendComments, setBackendComments] = useState([]);


  const [post, setPost] = useState({});
  // const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   const showPosts = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(`${BLOG_API}/blog-post`);
  //       setPost(data.blog);
  //       console.log(data);
  //     } catch (error) {
  //       const data = 0
  //       setPost(data);
  //       console.log(error);
  //       setLoading(false);


  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   showPosts();

  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //   });
  // }, []);


  // function addLikes(adde, param) {
  //   like = param;
  //   setLike(like);
  //   selects = false;
  //   setSelect(selects);
  //   console.log(selects);
  // }


  return (
    <div>
        <Topbar className="display-post"/>

      <div className="display-post d-flex justify-content-center">

      </div>
    </div>
  );
}

export default Post;
