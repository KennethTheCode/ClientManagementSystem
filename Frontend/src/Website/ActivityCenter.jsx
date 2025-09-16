import React from 'react';

function ActivityCenter() {
  // Example activity data (you can fetch this later from a backend)
  const activities = [
    { title: 'Project Update', description: 'I created the website', date: 'August 26, 8:52PM' },
    { title: 'Team Meeting', description: 'Discussed next sprint goals', date: 'August 27, 2:00PM' },
    { title: 'Bug Fix', description: 'Fixed login issue', date: 'August 28, 10:30AM' },
  ];

  return (
    <div className='w-[50%] h-full'>
      <h2 className='text-white mb-4'>Activity Center</h2>
      
      {activities.map((activity, index) => (
        <div
          key={index}
          className='w-[85%] h-20 bg-stone-800 rounded flex items-center justify-between p-5 border border-stone-700 mb-3'
        >
          <div>
            <h5 className='text-white'>{activity.title}</h5>
            <h4 className='text-white'>{activity.description}</h4>
          </div>
          <div>
            <h4 className='text-white'>{activity.date}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityCenter;
