import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import axios from "axios";
import { useEffect } from "react";
import * as GrIcons from "react-icons/gr";
import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'

import {getComments as getCommentsApi,} from "../api";
import { Context } from "../../Context/Contex";
import { useContext } from "react";

function Post() {
  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true);
  const [backendComments, setBackendComments] = useState([]);
 const {user} = useContext(Context)

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
        const data = 0
        setPost(data);
        console.log(error);
        setLoading(false);
        

      } finally {
        setLoading(false);
      }
    };
    showPosts();

    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

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
        <div className="d-flex loading-post d-block w-100 justify-content-center bg-danker">
          <div className="d-flex loading-post w-50">
            <div className="spinner-grow m-3 text-success "></div>
            <div className="spinner-grow m-3 text-warning"></div>
            <div className="spinner-grow m-3 text-primary"></div>
          </div>
          <div className="d-flex loading-post w-50">
            <div className="spinner-grow m-3 text-success "></div>
            <div className="spinner-grow m-3 text-warning"></div>
            <div className="spinner-grow m-3 text-primary"></div>
          </div>
        </div>
      )}

      {!loading &&
        post.length > 0 &&
        post.map(
          (value, index) => {
            // let id = '633c2156a8a1eeccb3f5871c'
            const { _id, image } = value;
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(image.data.data))
            );
            return (
              <div key={index} className="post bg-white">
                <img
                  className="posting"
                  // src={blogimg}
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
                    <strong className="">{like.length -2} Like</strong>
                    <strong className=""><span>{backendComments.length}</span> Comment</strong>
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
                    {user ? 
                     <Link to={`/post/${index}`} className="btn-comment text-dark bg-light">
                     <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark "></a>{" "}
                     Comment
                   </Link>


                   :

                    <Link to={"signup"} className="btn-comment text-dark bg-light">
                      <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark "></a>{" "}
                      Comment
                    </Link>
          }
                  </nav>
                </div>
              </div>
            );
          }
        )}
      {
        !loading && post <= 0 &&
        <div>
          <h1 className="alert alert-info p-2 ">Check your internet connection...📡</h1>
        </div>

      }

    </div>
  );
}

export default Post;
