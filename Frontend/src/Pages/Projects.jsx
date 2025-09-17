import React, { useEffect, useState } from 'react'
import Dashboard from '../Website/dashboard'

function Projects() {
    const [clients, setClients] = useState([]);
    const userId = localStorage.getItem('userId');

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
        <div className='w-[98%] mx-auto bg-stone-800 h-[65vh] rounded-lg'>
            <div className='bg-gradient-to-l from-stone-900 to-lime-950/10 w-[13vh] h-[65vh] p-2 flex-col overflow-y-auto'>
                <div className='p-1 rounded  mx-auto w-[95%]'>
                    <p className='text-white text-center mb-1'>👤 CLIENTS</p>
                </div>
                {clients.map((client, index) =>(
                <div key={client._id || index}className='bg-stone-800 w-full h-[5vh]  mb-2 rounded text-white flex items-center justify-center text-center hover:bg-stone-700 transition-colors duration-100'><p>{client.clientName}</p></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects