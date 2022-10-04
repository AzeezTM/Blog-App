import React from "react";
import "./SinglePosts.css";
import Comments from "../Comments/Comments";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function SinglePosts() {
  const location = useLocation()
  // const id = location.pathname.split("/")[2];

  const BLOG_API = "https://blog-9i5d.onrender.com";
  const [post, setPost] = useState([])

  const { id } = useParams()
  const [loadin, setLoadin] = useState(true)
  useEffect(() => {
    // console.log(id)
    const getPosts = async () => {
      try {
        setLoadin(true)

        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        let main = data.blog[`${id}`]
        post.push(main)
        setPost(post);
        console.log(post);
        // console.log(data.blog[`${id}`]);


      } catch (error) {
        console.log(error)
        console.log("wahala")
        // setLoadin(false)


      } finally {
        setLoadin(false)

      }


    };
    getPosts()
  }, [id]);



  return (
    <div>
      {loadin && <div className="justify-content-center not">
        <span className="spinner-grow text-success "></span>
        <span className="spinner-grow text-warning"></span>
        <span className="spinner-grow text-primary"></span>
      </div>}
      {!loadin && post.length > 0 && post.map((value, index) =>
        <div key={index} className="singlePosts d-flex justify-content-center">
          <div className="singlePostRapper">
            <img src="/advert.jpeg" className="singlePostImage d-flex" alt="" />
            <h1 className="singlePostTitle text-center">
              {value.title}
              <div className="singlePostEdit">
                <i className="singlePostIcon fa-sharp fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                By <b>{value.author}</b>
              </span>
              <span className="singlePostDate">{new Date(value.updatedAt).toDateString()}</span>
            </div>

            <p className="singlePostDesc">
              {value.story}

            </p>
            <br />
            <hr />
            <Comments
              commentsUrl="http://127.0.0.1:5173/"
              currentUserId="1"
            />

          </div>
          <hr />
          {
            !loadin && post.length < 0 &&

            <div>
              <h1 className=" text-danger p-5">pls check your internet connection</h1>
            </div>

          }

        </div>
      )
      }
    </div>
  );
}

export default SinglePosts;
