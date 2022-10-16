
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

      <div className="container-fluid mx-end">
      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" class="btn btn-outline-info dropdown-toggle">Categories</button>
      </div> */}

    </div>


  

    //New Navbar

    // //  <div className="navm">
    // /* <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand text-info" href="#">
    //       BlogApp
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse d-flex justify-content-space-between" id="navbarSupportedContent">
    //       <div className="tu">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             contact
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Blog Posts
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Politics
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Sports
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Nature
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //       <a className="nav-link disabled">Disabled</a>
    //     </li>
    //       </ul>
    //       </div>

    //       <div className="buttons">
    //         <button to="/login" className=" btn btn-light">
    //           <i className="fa-solid fa-right-to-bracket"></i> Login
    //         </button>

    //         <button to="/signup" className="btn btn-light ms-2">
    //           <i className="fa-solid fa-user-plus"></i> Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav> */

  );
}

export default Topbar;
