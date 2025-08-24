import React from 'react'
import Systemlogo from '../Images/Systemlogo.png'

function Navbar() {
  return (
    <div>
       <div className='bg-stone-800 w-[85%] h-[8vh] mx-auto rounded-full flex items-center  px-5 border border-stone-700 shadow-2xl'>
        <div className='w-[30vh] h-10 flex items-center justify-start'>
            <img src={Systemlogo} ></img>
        </div>
        <div className='w-[80vh] h-10 mr-110'>
            <ul className='flex items-center justify-center gap-15 h-full'>
                <li><a>About us</a></li>
                <li><a>Contacts</a></li>
                <li><a>Offers</a></li>
                <li><a>Docs</a></li>
                <li><a>Blogs</a></li>
            </ul>
        </div>
        <div className='w-[20vh] h-10 flex items-center justify-center gap-5'>
            <a>Log in</a>
            <button className='bg-green-500 w-[9vh] h-8 rounded-xl'><a>Signup</a></button>
        </div>

       </div>
    </div>
  )
}

export default Navbar