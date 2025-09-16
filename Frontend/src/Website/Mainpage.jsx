import React from 'react'
import Dashboard from './dashboard';
import ActivityCenter from './ActivityCenter';

function Mainpage() {
  return (
    <div>
        <Dashboard/>
        <div className='w-full h-[71vh] p-5'>
             <ActivityCenter/>
        </div>
    </div>
  )
}

export default Mainpage