import React from 'react'
import Systemlogo from '../Images/Systemlogo.png'
import {Link, useNavigate} from 'react-router-dom';


function Poster() {
    const navigate = useNavigate();
  return (
    <div className='h-[70vh] flex items-center justify-center pt-5'>
        <div className='w-[100vh] h-[70%] items-center'>
            <div className='w-[30%] h-[5vh] mx-auto'>
                <div className='w-[100%] h-[5vh] flex items-center justify-center'>
                    <img src={Systemlogo} className='h-auto w-auto z-[1]'></img>
                </div>
            </div>
            <div className='flex justify-center text-center flex-col'>
                <h1 className='font-bebas'>CLIENT MANAGEMENT SYSTEM</h1>
                <h1>READABLE, MINIMAL, PRODUCTIVE</h1>
                <h6>Organize projects faster. Be the productive hero in your team.</h6>
            </div>
            <div className='flex flex-col justify-center items-center mt-5 h-30 '>
                <input 
                className='mb-5 w-[75%] h-11 border border-stone-700 rounded-full px-5  placeholder-stone-500' 
                placeholder='Enter personal Email' 
                type="text"
                />
                <button className='bg-green-600 w-[20%] h-[4vh] rounded-xl' onClick={() => navigate('/login')}><h6>Start Free Trial</h6></button>
            </div>
        </div>

    </div>
  )
}

export default Poster