import React from 'react'
import Systemlogo from '../Images/Systemlogo.png'

function dashboard() {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='h-20 flex flex-col justify-center p-4 mb-5'>
                <h2>Welcome back! 👋</h2>
                <h6>Here's what's happening</h6>
            </div>
            <div className='w-[15%] h-20 flex items-center'>
                    <img src={Systemlogo}></img>
            </div>
        
        </div>
        
        <div className='grid grid-cols-4 gap-4 p-4 '>
            <div className='bg-stone-800 h-25 rounded-lg p-4 border border-stone-700'>
                <p className='text-white'>Number of Clients</p>
                <h2 className='text-white'>10</h2>
            </div>
               <div className='bg-stone-800 h-25 rounded-lg p-4 border border-stone-700'>
                <p className='text-white'>Number of Projects</p>
                <h2 className='text-white'>10</h2>
            </div>
               <div className='bg-stone-800 h-25 rounded-lg p-4 border border-stone-700'>
                <p className='text-white'>Total Revenue</p>
                <h2 className='text-white'>10</h2>
            </div>
            <div className='bg-stone-800 h-25 rounded-lg p-4 border border-stone-700'>
                <p className='text-white'>This month</p>
                <h2 className='text-white'>10</h2>
            </div>
        </div>
        <div className='w-[98%] h-[5vh] flex p-2 mx-auto gap-3'>
            <button className='border-b border-stone-700 w-[11vh]'><p className='text-white'>Add Client</p></button>
            <button className='border-b border-stone-700 w-[11vh]'><p className='text-white'>New Project</p></button>
            <button className='border-b border-stone-700 w-[11vh]'><p className='text-white'>View Analytics</p></button>
        </div>
    </div>
  )
}

export default dashboard