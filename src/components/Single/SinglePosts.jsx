import React from "react";
import "./SinglePosts.css";
import Comments from "../Comments/Comments";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function SinglePosts() {
//  const {id} = useParams()
//  console.log(id);
const location = useLocation()
// console.log(location.pathname.split("/")[2]);
const id = location.pathname.split("/")[2];

 const BLOG_API = "https://blog-9i5d.onrender.com";
  const [post, setPost] = useState({})


  useEffect(() => {
    const getPosts = async () => {
      try {
        
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setPost(data.blog);
        console.log(data);

      } catch (error) {
        console.log(error)
        
            
      }

     
    };
    getPosts()
  }, [id]);



  return (
    <div>
      {/* {post.map((value, index) =>  */}
      <div  className="singlePosts d-flex justify-content-center">
        <div className="singlePostRapper">
          <img src="/advert.jpeg" className="singlePostImage d-flex" alt="" />
          <h1 className="singlePostTitle text-center">
          {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-sharp fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>

          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              By <b>{post.author}</b>
            </span>
            <span className="singlePostDate">{new Date(post.updatedAt).toDateString()}</span>
          </div>

          <p className="singlePostDesc">
            {post.story}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            autem atque, laudantium non esse, eos repudiandae saepe ex
            architecto enim eaque recusandae? Voluptate, corrupti! Expedita
            autem dolor iusto dignissimos. Dolorem.<p>Read more</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            autem atque, laudantium non esse, eos repudiandae saepe ex
            architecto enim eaque recusandae? Voluptate, corrupti! Expedita
            autem dolor iusto dignissimos. Dolorem. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quos, autem atque, laudantium non
            esse, eos repudiandae saepe ex architecto enim eaque recusandae?
            Voluptate, corrupti! Expedita autem dolor iusto dignissimos.
            Dolorem. */}
          </p>
          <br />
          <hr />
          <Comments 
     commentsUrl="http://127.0.0.1:5173/"
     currentUserId="1"
     />

        </div>
        <hr />
       
      </div>
    {/* )} */}
    </div>
  );
}

export default SinglePosts;
