import React from 'react'
import Dashboard from './dashboard';
import ActivityCenter from './ActivityCenter';

function Mainpage() {
  return (
    <div>
        <Dashboard/>
        <div className='w-full h-[71vh] p-5 flex gap-5'>
             <ActivityCenter/>
             <ActivityCenter/>
             
             
        </div>
    </div>
  )
}

export default Mainpage