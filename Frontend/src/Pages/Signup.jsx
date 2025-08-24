import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Systemlogo from '../Images/Systemlogo.png'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
  return (
    
    <div>
        <Navbar2/>
        <div className='h-[80vh] flex items-center justify-center'>
            <div className='h-[85vh] w-[45vh] mt-20 bg-stone-800 rounded border border-stone-800 shadow-xl pt-3'>
                <div className='w-[23vh] h-[5vh] flex justify-center items-center mx-auto'>
                    <img src={Systemlogo}></img>
                </div>
                <div className=' w-full h-[10vh] flex items-center justify-center flex-col'>
                    <h2>SIGN UP TO Simpli<span className='text-lime-600'>Go</span></h2>
                    <p className='text-white'>Already have a SimpliGo account? <span className='text-lime-200 underline' onClick={() => navigate('/home')}>Log in</span></p>
                </div>
                <div className=' h-[55vh] w-[90%] p-3 border-b border-stone-700 mx-auto mb-7'> 
                    <form> 
                        <h5>Username or Email</h5>
                        <input className='w-full h-11 border border-stone-700 mt-3 rounded placeholder-stone-500 text-white p-2 mb-5'
                        type="text"
                        placeholder="Enter your username or email">
                        </input>

                        <h5>Password</h5>
                        <input className='w-full h-11 border border-stone-700 mt-3 rounded placeholder-stone-500 text-white p-2 mb-5'
                        type="password"
                        placeholder="Enter password">
                        </input>

                        <h5>Birhtday</h5>
                        <input className='w-full h-11 border border-stone-700 mt-3 rounded placeholder-stone-500 text-white p-2 mb-5'
                        type="date"
                        placeholder="Enter Birthday">
                        </input>

                        <h5>Address</h5>
                        <input className='w-full h-11 border border-stone-700 mt-3 rounded placeholder-stone-500 text-white p-2 mb-5'
                        type="text"
                        placeholder="Enter Address">
                        </input>
                        <button className='bg-lime-600 text-white w-full h-10 rounded mt-3 mb-3'><p>Create account</p></button>  
                    </form>
                </div>

                <div className='w-full h-10 flex items-center justify-center flex-col mt-5 gap-2 p-6'>
                    <p className='text-white'>Or, if you created your SimpliGo account with Google:</p>
                    <button className='border border-white p-2 w-full rounded'><p className='text-white'>Continue with Google</p></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Signup