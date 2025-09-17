import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home'
import Signup from './Pages/Signup';
import Mainpage from './Website/Mainpage';
import Projects from './Pages/Projects';
import New_Client from './Website/Components/New_Client';


function App() {
  return (
    <div className='bg-gradient-to-t from-stone-900 to-stone-950/97 h-screen pt-4'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/mainpage" element={<Mainpage/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/newclient" element={<New_Client/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
