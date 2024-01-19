import React from 'react'
import { Link } from 'react-router-dom'

const Sign_up_Component = () => {
  return (
    <form className="form">
    <p className="title">Sign_Up </p>
    <p className="message">Signup now and get full access to our app. </p>
      
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>LastnAme</span>
        </label>
    
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <Link className='ok' to="/Signin"> <button className="submit">Submit</button></Link>
   <Link style={{fontSize:"20px"}} to="/Signin">SignIn</Link>
  
</form>
  )
}

export {Sign_up_Component}