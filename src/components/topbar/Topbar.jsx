
import { Link } from "react-router-dom";
import "./topbar.css";


function Topbar() {
  return (
    <div className="topba d-flex flex-row-reverse">
      {/* <div className="sectA">
           <i className="icon fa-brands fa-square-facebook"></i>
           <i class=" icon fa-brands fa-square-instagram"></i>
           <i class="icon fa-brands fa-square-twitter"></i>
           <i class="icon fa-brands fa-pinterest"></i>
           </div> */}

      {/* <div className="offcanvas offcanvas-end" id="demo">
        <div className="offcanvas-header modal-header">
          <h1 className="offcanvas-title">Categories</h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body sectB">
          <Link
            className=" btn mt-3 item text-dark d-block "
          >
            Tech
          </Link>


          <Link className=" btn mt-3 item text-dark d-block" href="">
            {" "}
            Sport
          </Link>


          <Link className=" btn mt-3 item text-dark d-block">
            Entertainment
          </Link>


          <Link href="" className="btn mt-3 item text-dark d-block">
            Nature
          </Link>


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

    /* <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm">
          <div className="container-fluid">
          <a className="navbar-brand text-info fw-bold" href="#">
          <h3 className="fw-bold">BlogApp</h3>
        </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active "
                    aria-current="page"
                    to="/"
                  >
                    
                    Home
                  </a>
                </li>
                <li className="nav-item">
                                <a className="nav-link" to="/products">Products</a>
                            </li> 

                 <li className="nav-item">
                                <a className="nav-link" to="/about">About</a>
                            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                contact
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Politics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sports
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nature
                  </a>
                </li>
              </ul>
            </li>
           
            
              </ul>

            

              <div className="buttons">
                <a to="/login" className="btn btn btn-outline-dark ">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </a>

                <a to="/signup" className="btn btn btn-outline-dark ms-2">
                  <i className="fa-solid fa-user-plus"></i> Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav> */
    //  </div>
  );
}

export default Topbar;
