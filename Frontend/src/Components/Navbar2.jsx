import React from 'react'
import Systemlogo from '../Images/Systemlogo.png'
import {Link, useNavigate} from 'react-router-dom'


function Navbar2() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='w-[98%] h-8 flex items-center justify-between pr-8 mx-auto'>
            <div className='w-[17vh] h-10 flex justify-center items-center'>
                <img src={Systemlogo} onClick={() => navigate('/home')}></img>
            </div>
            <div className='w-[17vh] h-10 flex justify-center items-center'>
                <ul className='flex gap-5'>
                    <li><h6>English</h6></li>
                    <li><h6>English</h6></li>
                    <li><h6>English</h6></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar2