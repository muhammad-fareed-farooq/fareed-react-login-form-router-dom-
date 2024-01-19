import React from 'react'
import { Link } from 'react-router-dom'

const Home_Component = () => {
  return (
    <div className='btn'>
        <div  style={{display:"flex", justifyContent :"center",alignItems:"center", height:"98dvh" }}>
   

        <h1> <Link style={{all:"unset"}} to="/Signup"><button style={{all:"unset",padding:"8px" , fontSize:"35px",color:"black", border:"1px solid black" , backgroundColor:"AppWorkspace" , fontFamily:"Arial",cursor:"pointer" }}>SignUp</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></h1>



<h1><Link style={{all:"unset"}} to="/Signin"><button style={{all:"unset",padding:"8px" , fontSize:"35px", color:"black",border:"1px solid black" , backgroundColor:"AppWorkspace" , fontFamily:"Arial",cursor:"pointer" }}>SignIn</button></Link></h1>

</div>
    </div>
  )
}

export {Home_Component}
