import "./footer.css"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer text-start">
          <div className="row primary">
            <div className="column blog">
              <h3 className="text-info">BlogApp</h3>
              <div className="social">
                <i className="fa-brands fa-facebook-square"></i>
                <i className="fa-brands fa-instagram-square"></i>
                <i className="fa-brands fa-twitter-square"></i>
                <i className="fa-brands fa-youtube-square"></i>
                <i className="fa-brands fa-whatsapp-square"></i>
              </div>
            </div>

            <div className="column links">
              <ul>
                <li>
                  <a href="#faq">NEWS</a>
                </li>
                <li>
                  <a href="#cookies-policy">POLITICS</a>
                </li>
                <li>
                  <a href="#terms-of-services">ENTERTAINMENT</a>
                </li>
                <li>
                  <a href="#support">SPORT</a>
                </li>
              </ul>
            </div>

            <div className="column links">
              <ul>

                <li>
                  <a href="#faq">ABOUT US</a>
                </li>
                <li>
                  <a href="#cookies-policy">ADVERTISE</a>
                </li>
                <li>
                  <a href="#terms-of-services">CONTACT US</a>
                </li>
                <li>
                  <a href="#support">RSS</a>
                </li>
                <li>
                  <a href="#support"> FAQ</a>
                </li>
              </ul>

            </div>

            <div className="column links">
              <ul>
                <li>
                  <a href="#faq">F.A.Q</a>
                </li>
                <li>
                  <a href="#cookies-policy">COOKIES POLICY</a>
                </li>
                <li>
                  <a href="#terms-of-services">TERMS OF SERVICE</a>
                </li>
                <li>
                  <a href="#support">SUPPORT</a>
                </li>
              </ul>
            </div>
            <div className="column links">
              <ul>
                <li>
                  <a href="#faq">CAREERS</a>
                </li>
                <li>
                  <a href="#cookies-policy">ARCHIVE</a>
                </li>
                <li>
                  <a href="#terms-of-services">USER AGREEMENT</a>
                </li>
                <li>
                  <a href="#support">COMMENT POLICY</a>
                </li>
                <li>
                  <a href="#support">DMCA POLICY</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row copyright">
            <hr />
            <p >Copyright &copy; 2022 <a className="Name" href="https://github.com/AzeezTM">Dev. ATM,</a> <a className="Name" href="mailto:ismailhabeeboluwatobi995@gmail.com">Dev. MAHISH</a> </p>
          </div>
        </div>
      </div>

    </>
  )
}



export default Footer;