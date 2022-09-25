import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div className='signup'>
    <h1>Sign Up</h1>
    <form>
     <input type="email" placeholder='Email' />
     <input type="password" placeholder='Password' />
     <input type="password" placeholder='Confirm Password' />
     <button type='submit'>Sign Up </button>
    </form>
 </div>
  )
}

export default Signup
