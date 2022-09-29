import React from "react";
import "./Post.css";
import { useState } from "react";

function Post() {
  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true)
  console.log(selects)

  
  
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
        <img className="posting" src="/advert.jpeg" alt="" />
        <div className="postinfo">
          <div className="postcats">
            <span className="postcats text-info">Politics</span>
            {/* <span className="postcats">Nature</span> */}
          </div>
          <span className="posttitle fw-bold">
            Lorem ipsum dolor sit amet consectetur
          </span>
          <span className="posted">1 hour ago</span>
          <p className="postdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolore, ea optio, repellendus eius explicabo iusto adipisci nesciunt
            possimus ipsa temporibus nihil, at ab voluptate assumenda
            doloremque? Ducimus, eius! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur dolore, ea optio, repellendus eius
            explicabo iusto adipisci nesciunt possimus ipsa temporibus nihil, at
            ab voluptate assumenda doloremque? Ducimus, eius! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur dolore, ea optio,
            repellendus eius explicabo iusto adipisci nesciunt possimus ipsa
            temporibus nihil, at ab voluptate assumenda doloremque? Ducimus,
            eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur dolore, ea optio, repellendus eius explicabo iusto
            adipisci nesciunt possimus ipsa temporibus nihil, at ab voluptate
            assumenda doloremque? Ducimus, eius!
          </p>
          <nav className="like ">

            <div className="likes ">
              <button id="changeLike" className="rounded-pill narbar">
                <button onClick={eve => addLikes(eve, "❤️")}>❤️</button>
                <button onClick={eve => addLikes(eve, "👍")}>👍</button>
                <button onClick={eve => addLikes(eve, "😂")}>😂</button>
                <button onClick={eve => addLikes(eve, "😘")}>😘</button>
                <button onClick={eve => addLikes(eve, "😡")}>😡</button>
              </button>
              <button className="likeB">{like} Like</button>
            </div>
            {selects == false && <strong>{like.length-1}Likes</strong>}
            <button className="comment text-light">
            <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-light "></a> Comment

            </button>
          </nav>

        </div>
      </div>
    </div>
  );
}

export default Post;
