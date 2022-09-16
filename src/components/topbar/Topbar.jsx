import "./topbar.css"

function Topbar  () {
   




    return ( 
          <div className="topbar"> 
          
          <div className="sectA">
           <i class="icon fa-brands fa-square-facebook"></i>
           <i class=" icon fa-brands fa-square-instagram"></i>
           <i class="icon fa-brands fa-square-twitter"></i>
           <i class="icon fa-brands fa-pinterest"></i>    
           </div>
           <div className="sectB">
               <nav >
               <a className="btn1 item" href=""> Home</a>
               </nav>
               <nav >
               <a className=" btn1 item" href=""> About</a>
               </nav>
               <nav >
                <a href="" className=" btn1 item">Contact</a>
               </nav>
              
           </div>
 
           <div className="sectC">
          
                <a href="" className="btn item"> Sign-Up</a>
               <a href="" className="btn item"> Login
               <i class=" fa-solid fa-right-to-bracket"></i>
               </a>
               <span className="icon">
                 <i class="item  fa-solid fa-user" ></i>
                    Profile
               </span>
           </div>
           
          
       </div>
         
     );
}

export default Topbar ;