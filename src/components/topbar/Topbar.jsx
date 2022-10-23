
import * as GrIcons from "react-icons/gr";
import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import { Link } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";
import { useEffect } from "react";


function Topbar() {

  // const [cat, setCat] = useState([]);
  // const BLOG_API = "https://blog-9i5d.onrender.com";

  // useEffect(() => {
  //   const showPosts = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(`${BLOG_API}/blog-post`);
  //       setCat(data.blog);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   showPosts();

  // }, []);



  // const filterBlog = (cate) => {
  //   const updateList = cat.filter((x) => x.category === cate);
  //   setPost(updateList);

  // }

  return (
    <div className=" ">
      <div className="topbar">
        <div className=" div nav-pills">
          <div className="sectB">
            <Link className="btn item text-light" to={"/post"}>All</Link>
            <Link className="btn item text-light"
              to={"/post/tech"}>Tech</Link>
            <Link className="btn item text-light"
              to={"/post/sport"}>Sport</Link>
            <Link className="btn item text-light"
              to={"/post/entertainment"}>Entertainment</Link>
            <Link className="btn item text-light"
              to={"/post/nature"}>Nature</Link>

          </div>
        </div>
      </div>
      <div className="d-flex p-3 kk">
       
      </div>
    </div>
  );
}
export default Topbar;