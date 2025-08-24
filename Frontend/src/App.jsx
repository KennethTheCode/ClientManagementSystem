import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home'
import Signup from './Pages/Signup';


function App() {
  return (
    <div className='bg-stone-900 h-screen pt-4'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App