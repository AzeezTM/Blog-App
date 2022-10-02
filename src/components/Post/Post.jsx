import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios"
import { useEffect } from "react";
import axios from "axios";



function Post() {
  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true)
  // console.log(selects)
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  const BLOG_API = "https://blog-9i5d.onrender.com";
  const SEARCH_API = BLOG_API + "/blog-post";



  useEffect(() => {
    const showPosts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setPost(data.blog);
        console.log(data);

      } catch (error) {
        console.log(error)
        setLoading(false)
        
      } finally {
        setLoading(false)
      }

    };
    showPosts()
  }, []);

  function addLikes(adde, param) {
    // console.log(param)
    like = param;
    setLike(like)
    selects = false
    setSelect(selects)
    console.log(selects)


  }

  return (

    <div className="display-post d-flex justify-content-center ">
      {loading && <div>
        <span className="spinner-grow text-success"></span>
        <span className="spinner-grow text-warning"></span>
        <span className="spinner-grow text-primary"></span>
        </div>}

      {!loading && post.length > 0 && post.map((value, index) =>

        <div key={index} className="post">


          <img className="posting" src={"./card1.jpg"} alt="" />
          <div className="postinfo">
            <div className="postcats">

              <span className="postcats">{value.category}</span>

            </div>
            <span className="posttitle fw-bold">

              {post.title}
            </span>
            <span className="posted">{new Date(value.updatedAt).toDateString()}</span>
            <p className="postdesc">

              {post.story}
              <Link to={`/post/${value._id}`} className="text-dark">
                Read more
              </Link>
            </p>
            <nav id='' className="like ">

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
              {selects == false && <strong>{like.length - 1}Likes</strong>}
              <button className="comment text-light">
                <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-light "></a> Comment

              </button>
            </nav>

          </div>
        </div>

      )}
      {
       !loading &&  post.length  <= 0 &&

        <div>
          <h1 className="alert alert-warning p-5">No user yet</h1>
        </div>

      }

    </div>
  );
}

export default Post;
