import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './component/Register'
import View from './component/View'
import Update from './component/Update'
import Delete from './component/Delete'


function App() {
  

  return (
    <div style={{border:'5px solid red',padding:'10px'}}>
      <h1 style={{color:'red'}}>CRUD FUNCTION</h1>
      <Register/><br/>
      <View/><br/>
      <Delete/>
      <Update/><br/>
     
      
    </div>
  )
}

export default App
