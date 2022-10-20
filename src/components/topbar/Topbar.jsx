import * as GrIcons from "react-icons/gr";

import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import { Link } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card, Input } from 'semantic-ui-react'
// import ".Post/post.css";
import { getComments as getCommentsApi, } from "../api";


function Topbar() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [loading, setLoading] = useState(true);


  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true);
  const [backendComments, setBackendComments] = useState([]);



  useEffect(() => {
    const showPosts = async () => {
      try {
        // setLoading(true);
        const { data } = await axios.get(`https://blog-9i5d.onrender.com/blog-post`);
        setAPIData(data.blog);
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
    like = param;
    setLike(like);
    selects = false;
    setSelect(selects);
    console.log(selects);
  }


  const searchItems = (pa,searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== 'all') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(APIData)
    }
}




  return (
    <div className=" ">
      <div className="topbar">

        <div className=" div nav-pills">
          <div className="sectB">
            <button className="btn item text-light"
              onClick={eve => searchItems(eve, "all")}>All</button>
            <button className="btn item text-light"
              onClick={eve => searchItems(eve, "tech")}>Tech</button>
            <button className="btn item text-light"
              onClick={eve => searchItems(eve, "sport")}>Sport</button>
            <button className="btn item text-light"
              onClick={eve => searchItems(eve, "entertainment")}>Entertainment</button>
            <button className="btn item text-light"
              onClick={eve => searchItems(eve, "nature")}>Nature</button>

          </div>
        </div>
      </div>
      <div className="d-flex p-3 kkk">
        <div className="sideba" >
          <div className="">{searchInput.length > 0 && filteredResults.length == 0 &&
                <h3>No {searchInput} found</h3> 
          }
          </div>
        </div>


        <Card.Group className="" itemsPerRow={3} style={{ marginTop: 20 }}>
          {loading && (
            <div className="d-flex loading-post d-block w-100 display-post bg-danker">
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
           
          {
            searchInput.length > 0 ? (
              filteredResults.map((value, index) => {
                let id = '633c2156a8a1eeccb3f5871c'
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
                      {selects == false && (
                        <div className="d-flex justify-content-between w-100">
                          <strong className="">{like.length - 2} Like</strong>
                          <strong className=""><span>{backendComments.length}</span> Comment</strong>
                        </div>
                      )}

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
                )
                
              }
              
              )
              
            ) : (
              APIData.map((value, index) => {
                let id = '633c2156a8a1eeccb3f5871c'
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
                        <strong className="">{like.length - 2} Like</strong>
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

                        <button className="btn-comment text-dark bg-light">
                          <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark "></a>{" "}
                          Comment
                        </button>
                      </nav>
                    </div>
                  </div>
                )
              })
            )
          }
         
          {
            !loading && APIData <= 0 &&
            <div>
              <h1 className="alert alert-info p-2 ">Check your internet connection...📡</h1>
            </div>

          }
        </Card.Group>
        <div className="sideba" ></div>
      </div>
    </div>

  );
}
// export {filteredResults}
export default Topbar;
