import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import * as GrIcons from "react-icons/gr";


function Post({post}) {
  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true)
  console.log(selects)
  // const [post, setPost] = useState({})


// function Post( {post} ) {
//   {post.map((po, index) => {
//     const {_id, image} = po
//     const base64String = btoa(
//       String.fromCharCode(...new Uint8Array(image))
//     )
//    })}

  
  
  
  function addLikes(adde, param) {
    // console.log(param)
    like = param;
    setLike(like)
    selects = false
    setSelect(selects)
    console.log(selects)
    

  }

  return (
    <div className="display-post d-flex justify-content-center">
      <div className="post">
      
      <img className="posting" src="./card1.jpg" alt="" /> 
        <div className="postinfo">
          <div className="postcats">
           
            <span className="postcats">{post.category}</span>
        
          </div>
          <span className="posttitle fw-bold">
         
            {post.title}
          </span>
          <span className="posted">{new Date(post.updatedAt).toDateString()}</span>
          <p className="postdesc">
         
           
            <Link to={`/post/${post._id}`} className="text-dark">
            {post.story}
            </Link>
          </p>
          <nav className="like ">

            <div className="likes ">
              <button id="changeLike" className="rounded-pill bg-light">
              {/* <GiIcons.GrLike/> */}
                <button onClick={eve => addLikes(eve, "❤️")}>❤️</button>
                <button onClick={eve => addLikes(eve, "👍")}>👍</button>
                <button onClick={eve => addLikes(eve, "😂")}>😂</button>
                <button onClick={eve => addLikes(eve, "😘")}>😘</button>
                <button onClick={eve => addLikes(eve, "😡")}>😡</button>
              </button>
              <button className="likeB bg-light">{like}<GrIcons.GrLike/></button>
            </div>
            {selects == false && <strong>{like.length-1} likes</strong>}
            <button className="comment text-dark bg-light">
            <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark"></a> Comment

            </button>
          </nav>

        </div>
      </div>

     
    </div>
  );
}

export default Post;
