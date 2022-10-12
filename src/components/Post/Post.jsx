import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import axios from "axios";
import { useEffect } from "react";
import * as GrIcons from "react-icons/gr";
function Post() {
  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true);

  // console.log(selects)
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const BLOG_API = "https://blog-9i5d.onrender.com";

  useEffect(() => {
    const showPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setPost(data.blog);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    showPosts();
  }, []);

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
    setLike(like);
    selects = false;
    setSelect(selects);
    console.log(selects);
  }


  return (
    <div className="display-post d-flex justify-content-center">
      {loading && (
        <div className="d-flex loading-post">
          <div className="spinner-grow text-success mx-auto"></div>
          <div className="spinner-grow text-warning"></div>
          <div className="spinner-grow text-primary"></div>
        </div>
      )}

      {!loading &&
        post.length > 0 &&
        post.map(
          (value, index) => {
            let id = '633c2156a8a1eeccb3f5871c'
            const { _id, image } = value;
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(image.data.data))
            );
            return (
              <div key={index} className="post">
                <img
                  className="posting"
                  src={`data:image/png;base64,${base64String}`}
                  alt=""
                />
                <div className="postinfo">
                  <div className="post-p">
                    <div className="postcats w-100">
                      <span className="postcats">{value.category}</span>
                    </div>

                  </div>
                  <span className="posttitle fw-bold w-100">{value.title}</span>
                  <span className="posted w-100">
                    {new Date(value.updatedAt).toDateString()}
                  </span>
                  <p className="postdesc">
                    <Link to={`/post/${index}`} className="text-dark">
                      {value.story}
                    </Link>
                  </p>
                  {/* {selects == false && ( */}
                  <div className="d-flex justify-content-between w-100">
                    <strong className="w-25">{like.length - 1} Like</strong>
                    <strong className="w-25">0 Comment</strong>
                  </div>
                  {/* )} */}

                  <nav id="" className="like">
                    <div className="likes ">
                      <button id="changeLike" className="rounded-pill narbar">
                        <button onClick={(eve) => addLikes(eve, "❤️")}>
                          ❤️
                        </button>
                        <button onClick={(eve) => addLikes(eve, "👍")}>
                          👍
                        </button>
                        <button onClick={(eve) => addLikes(eve, "😂")}>
                          😂
                        </button>
                        <button onClick={(eve) => addLikes(eve, "😘")}>
                          😘
                        </button>
                        <button onClick={(eve) => addLikes(eve, "😡")}>
                          😡
                        </button>
                      </button>
                      <button className="likeB btn-likeB bg-light">
                        {like}
                      </button>
                    </div>

                    <button className="btn-comment text-dark bg-light">
                      <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark "></a>{" "}
                      Comment
                    </button>
                  </nav>
                </div>
              </div>
            );
          }
          // {
          //  !loading &&  post.length  <= 0 &&

          //   <div>
          //     <h1 className="alert alert-warning p-5">pls check your internet connection</h1>
          //   </div>

          // }
        )}
    </div>
  );
}

export default Post;
