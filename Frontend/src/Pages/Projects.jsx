import React, { use, useEffect, useState } from 'react'
import Dashboard from '../Website/dashboard'
import Project_control from '../Website/Components/Project_control';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';



function Projects() {
    const [clients, setClients] = useState([]);
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
    
     useEffect(() => {
        async function fetchActivities() {
          const res = await fetch(`http://127.0.0.1:8000/client/${userId}`);
          if (res.ok) {
            const data = await res.json();
            setClients(data.clients);
          }
        }
        if (userId) fetchActivities();
      }, [userId]);

  return (
    <div>
        <Dashboard/>
        <div className='w-[98%] mx-auto bg-stone-800 h-[65vh] rounded-lg flex'>
            <div className='bg-stone-900  w-[13vh] h-[65vh] p-2 flex-col overflow-y-auto'>
                <div className='p-1 rounded  mx-auto w-[95%]'>
                    <p className='text-white text-center mb-1'>👤 CLIENTS</p>
                </div>
                {clients.map((client, index) =>(
                <div key={client._id || index} className='bg-stone-800 w-full h-[5vh]  mb-2 rounded text-white flex items-center justify-center text-center hover:bg-stone-700 transition-colors duration-100'><p>{client.clientName}</p></div>
                ))}
                
            </div>
            <div className=' w-full h-[65vh] p-3 flex flex-col gap-3 grid grid-cols-5 overflow-y-auto'>
             {activities.map((activity, index) => (
  <div key={activity._id || index} className='bg-stone-900 border border-stone-700 w-[30vh] h-[35vh] rounded'>
    <div className='w-[95%] h-12 flex justify-between items-center mx-auto p-2 border-b border-stone-700'>
      <h6>{activity.clientName}</h6>
      <div className='w-20 flex items-center justify-center'>
        <Project_control />
      </div>
    </div>
    <div className='w-full p-3'>
      <h3>{activity.projectName}</h3>
      <div className='w-full flex gap-5 items-center p-1'>
        <p className='text-white'>P{activity.revenue}.00</p>
        <p className='text-green-300 font-thin'>Due: {activity.deadline.slice(0, 10)}</p>
      </div>

      <div className='bg-stone-800 w-full h-[10vh] flex items-center justify-center rounded mb-2 gap-5'>
        {/* Progress Gauge */}
        <Gauge
          width={100}
          height={100}
          min={0}
          max={100}
          value={activity.progress}   // ✅ dynamically set from map
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              color: '#fff'
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: '#73ff00ff',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
        <div>
          <p>Progress</p>
          <h3>{activity.progress}%</h3>
        </div>    

        {/* Payment Gauge */}
        <Gauge
          width={100}
          height={100}
          min={0}
          max={100}
          value={25}   // ✅ for now static, or replace with activity.paymentProgress
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 0,
              color: '#fff'
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: '#ffa200ff',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
        <div>
          <p>Payment</p>
          <h3>25%</h3>
        </div>                         
      </div>

      <div className='w-full h-[10vh] p-1 flex overflow-y-auto'>
        <p>{activity.projectDescription}</p>
      </div>
    </div>
  </div>
))}

            </div>
        </div>
    </div>
  )
}

export default Projects