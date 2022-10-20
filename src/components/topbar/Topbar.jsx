import * as GrIcons from "react-icons/gr";

import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import { Link } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";
import { useEffect } from "react";


function Topbar() {

  const [cat, setCat] = useState([]);
  



  const BLOG_API = "https://blog-9i5d.onrender.com";

  useEffect(() => {
    const showPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setCat(data.blog);
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



  const filterBlog = (cate) => {
    const updateList = cat.filter((x) =>x.category === cate);
    setPost(updateList);

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

    </div>


  



  );
}

export default Topbar;
