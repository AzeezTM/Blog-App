import "./topbar.css"

function Topbar  () {
   




    return ( 
    //       <div className="topbar"> 
          
    //       <div className="sectA">
    //        <i class="icon fa-brands fa-square-facebook"></i>
    //        <i class=" icon fa-brands fa-square-instagram"></i>
    //        <i class="icon fa-brands fa-square-twitter"></i>
    //        <i class="icon fa-brands fa-pinterest"></i>    
    //        </div>
    //        <div className="sectB">
    //            <nav >
    //            <a className="btn1 item" href=""> Home</a>
    //            </nav>
    //            <nav >
    //            <a className=" btn1 item" href=""> About</a>
    //            </nav>
    //            <nav >
    //             <a href="" className=" btn1 item">Contact</a>
    //            </nav>
              
    //        </div>
 
    //        <div className="sectC">
          
    //             <a href="" className="btn item"> Sign-Up</a>
    //            <a href="" className="btn item"> Login
    //            <i class=" fa-solid fa-right-to-bracket"></i>
    //            </a>
    //            <span className="icon">
    //              <i class="item  fa-solid fa-user" ></i>
    //                 Profile
    //            </span>
    //        </div>
           
          
    //    </div>





    //New Navbar

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="text-info">Blog</span> App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog Posts
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Politics</a></li>
            <li><a className="dropdown-item" href="#">Sports</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Nature</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
     
      {/* <div className="buttons">
                <Link to="/login" className=" ">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Link>

                <Link to="/signup" className=" ms-2">
                  <i className="fa-solid fa-user-plus"></i> Sign Up
                </Link>
              </div> */}
    </div>
  </div>
</nav>
         
     );
}

export default Topbar ;