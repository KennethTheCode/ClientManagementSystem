import React, { useEffect, useState } from 'react';
import Add_activity from './Components/add_activity';
import ViewProjects from './Components/ViewProjects';

function ActivityCenter() {
  const [activities, setActivities] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    async function fetchActivities() {
      const res = await fetch(`http://127.0.0.1:8000/user/${userId}`);
      if (res.ok) {
        const data = await res.json();
        setActivities(data.activities);
      }
    }
    if (userId) fetchActivities();
  }, [userId]);

  return (
    <div className='w-[50%] h-[65vh] flex flex-col  '>
     <div className='flex items-center gap-3'>
        <h2 className='text-white mb-4'>Activity Center</h2>
        <ViewProjects />
     </div>
    <div className='w-full h-[55vh] border border-stone-800 p-1 rounded overflow-y-auto'>
      {activities.map((activity, index) => (
        <div
          key={activity._id || index}
          className='w-full h-20 bg-stone-800 rounded flex items-center justify-between gap-20 p-5 border border-stone-700 mb-3 
          hover:bg-stone-700 transition-colors duration-100 cursor-pointer'>
          <div className='w-[90%]'>
            <div className='flex gap-2 items-center'>
              <h5 className='text-white'>{activity.projectName}</h5>
              <h4>deadline: {activity.deadline ? activity.deadline.slice(0, 10) : ''}</h4>
            </div>
            <h4 className='text-white mr-5'>{activity.projectDescription}</h4>
          </div>
          <div className='w-[25vh]  '>
            <h4 className='text-white ml-20'>{activity.timestamp ? activity.deadline.slice(0, 10) : ''}</h4>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ActivityCenter;