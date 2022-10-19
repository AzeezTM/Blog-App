import "./footer.css"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 

function Footer() {
    return (
        <div className="">
          <section className="footer-hero">
            <p>Get connected with us on social networks</p>

            <div>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>  
          </section>

         <section>
           <div className="footer">
            <div className="footer text-start">   
              <div className="row primary">
                <div className="column blog">
                  <h3 className="text-info">The Arts Of The Mind</h3>
        <img src="./mascot-logo.jpg" className="card-img" alt="background" />

                </div>

           <div className="column links">
            <h4>Categories</h4>
            <ul>
              <li> <a href="#faq">NEWS</a> </li>
              <li> <a href="#cookies-policy">POLITICS</a> </li>
              <li> <a href="#terms-of-services">ENTERTAINMENT</a> </li>
              <li> <a href="#support">SPORT</a> </li>
              <li> <a href="#support">TECH</a> </li>
            </ul>
           </div>
           
           {/* <div className="column links">
              <ul>         
                <li> <a href="#faq">ABOUT US</a> </li>
                <li> <a href="#cookies-policy">ADVERTISE</a> </li>
                <li> <a href="#terms-of-services">CONTACT US</a> </li>
                <li> <a href="#support">RSS</a> </li>
                <li> <a href="#support"> FAQ </a> </li>
              </ul>
           </div>
            */}
           
           <div className="column links">
           <h4>Useful Links</h4>
            <ul>
               <li> <a href="#faq">F.A.Q</a> </li>
               <li> <a href="#cookies-policy">COOKIES POLICY</a> </li>
               <li> <a href="#terms-of-services">TERMS OF SERVICE</a> </li>
               <li> <a href="#support">SUPPORT</a> </li>
               <li> <a href="#support">CONTACT</a> </li>
             </ul>
           </div>

           <div className="column links">
           <h4>Policies</h4>
            <ul>
              <li> <a href="#faq">CAREERS</a> </li>
              <li> <a href="#cookies-policy">ARCHIVE</a> </li>
              <li> <a href="#terms-of-services">USER AGREEMENT</a> </li>
              <li> <a href="#support">COMMENT POLICY</a> </li>
              <li> <a href="#support">DMCA POLICY</a> </li>
            </ul>
           </div>
        
          </div>
           
          <hr />
           <div className="copyright">
            <p className="text-info"> &copy; Copyright Dev Team</p>
           </div>
           
                               
      </div>
    </div>

 </section>




     





        </div>
    
   
   
  )
}

      

export default Footer ;