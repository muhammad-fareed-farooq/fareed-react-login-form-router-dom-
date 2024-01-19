import React from 'react'
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Sign_up_Component } from './Components/Sign_up_Component'
import {Sign_In_Component} from "./Components/Sign_In_Component"
import { Home_Component } from './Components/Home_Component'
import {Web_Page_Component} from './Components/Web_Page_Component'


const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home_Component/>} />
        <Route path='Signup' element ={<Sign_up_Component/>}/>
        <Route path='Signin' element ={<Sign_In_Component/>}/>
        <Route path='Webpage' element= {<Web_Page_Component/>}/>

      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
