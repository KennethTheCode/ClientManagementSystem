import React from 'react'
import { useNavigate } from 'react-router-dom';


function ViewProjects() {
    const navigate = useNavigate();
  return (
    <div>
        <button
        onClick={() => navigate('/projects')}
         type="submit"
         className='bg-lime-600 text-white w-full p-1 rounded mb-5 hover:bg-lime-700 transition-colors duration-200'><p>View All</p></button> 
    </div>
  )
}

export default ViewProjects