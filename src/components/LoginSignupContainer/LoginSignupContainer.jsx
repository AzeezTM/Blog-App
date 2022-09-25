import React, {  useRef,useState } from 'react'
import Signup from '../signup/Signup'
import "./LoginSignupContainer.css"
import Login from '../Login/Login'

function LoginSignupContainer() {

    const [login, setLogin] = useState(true)
    // const [signup, setSignup] = useState(false)
 
    const loginSignupContainerRef = useRef(null);

    const handleClick = () => {
        setLogin(!login);

        loginSignupContainerRef.current.classList.toggle("active");
    }
 
  return (
    <div className='login-signup-container' ref={loginSignupContainerRef}>
        <Login /> 
          <div className="side-div">
            <button onClick={handleClick}> {login ? "SignUp" : "Login"} </button>
          </div>

        <Signup />
    </div>
  )
}

export default LoginSignupContainer
