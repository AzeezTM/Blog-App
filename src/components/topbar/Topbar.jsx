
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
    <div className="topbar">
     
      <div className="div nav-pills">
        <div className="sectB">

                    <Link className="btn1 item text-light"
                    onClick={() => setPost(cat)}>All</Link>
                    <Link className="btn1 item text-light"
                     onClick={() => filterBlog("tech")}>Tech</Link>
                    <Link className="btn1 item text-light"
                     onClick={() => filterBlog("sport")}>Sport</Link>
                    <Link className="btn1 item text-light"
                     onClick={() => filterBlog("entertainment")}>Entertainment</Link>
                    <Link className="btn1 item text-light"
                     onClick={() => filterBlog ("nature")}>Nature</Link>
                
          
        </div>
      </div>

   
        
    </div>

  
  );
}

export default Topbar;
