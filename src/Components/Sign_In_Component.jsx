import React from 'react'
import { Link } from 'react-router-dom'

const Sign_In_Component = () => {
  return (
    <form className="form">
    <p className="title">log_in </p>
    <p className="message">Signin now and get full access to our app. </p>
                 
    <label>
        <input  className="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <Link to="/Webpage"><button className="submit">Submit</button></Link>
   <Link style={{fontSize:"20px" }} to="/Signup">SignUp</Link>

    
</form>
  )
}

export {Sign_In_Component}
