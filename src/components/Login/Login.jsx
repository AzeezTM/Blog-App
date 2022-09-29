import React, { useState } from 'react'
import axios from "axios"
import "./Login.css"

function Login() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("")

  const HandleLogin = async(e) => {
  e.preventDefault();

    email = email.trim();
    password = password.trim();

    if (!email || !password) {
        return alert("Fill In The Empty Fields")
    } else {
        const User = {
            email,
            password, 
        }

        console.log(User);
        try {
            // const url = "https://active-info.onrender.com/login";
            const url = "https://blog-9i5d.onrender.com/login";
            const response = await axios.post(url, User);
            console.log(response);
            console.log(response.data);
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
            console.log(error.response.data);
            console.log(error.response.data.message);

        }
    }

  }

  return (
    <div className='login'>
       <h1>Login</h1>
       <form onSubmit={HandleLogin}>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'> Login </button>
       </form>
    </div>
  )
}

export default Login
