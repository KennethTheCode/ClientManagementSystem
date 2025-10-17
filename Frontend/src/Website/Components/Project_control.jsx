import {React, useState} from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


function Project_control({ activity, userId, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/user/${userId}/activity/${activity._id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        onDelete(activity._id);  
      } else {
        alert("Delete failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-2  text-stone-200">
      <button className="bg-red-500 rounded-full w-[20px] h-[20px] flex justify-center pt-1 items-center hover:bg-red-700 transition-colors duration-200 cursor-pointer" onClick={setShowModal}><h4><span style={{ fontSize: "15px" }} class="material-symbols-outlined">close_small</span></h4></button>
      {showModal &&(
        <div className='bg-stone-950/60 fixed inset-0 z-50 flex items-center justify-center'>
          <div className='bg-stone-800 w-[50vh] h-[20vh] rounded-xl text-center p-3 border border-stone-700'>
            <h3>Are you sure you want to delete this project?</h3>
            <div className='text-center flex gap-10 justify-center w-full h-13 mt-3'>
              <p>Client Name: <span><h4>{activity.clientName}</h4></span></p>
              <p>Project Name: <span><h4>{activity.projectName}</h4></span></p>
              <p>Progress: <span><h4>{activity.progress}%</h4></span></p>
            </div>
            <div className='mt-3 flex items-center justify-center gap-10'>
              <button className="bg-green-500 rounded-[3px] w-[15vh] h-[30px] flex justify-center pt-1 items-center hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={handleDelete}><p>Yes</p></button>
              <button className="bg-red-500 rounded-[3px] w-[15vh] h-[30px] flex justify-center pt-1 items-center hover:bg-red-700 transition-colors duration-200 cursor-pointer" onClick={() => setShowModal(false)}><p>No</p></button>
            </div>
          </div>
        </div>
      )}

      <button className="bg-yellow-500 rounded-full w-[20px] h-[20px] flex justify-center items-center hover:bg-yellow-700 transition-colors duration-200 cursor-pointer" onClick={setShowModal2}><span style={{ fontSize: "17px" }} class="material-symbols-outlined">expand_content</span></button>
      {showModal2 &&(
        <div className='bg-red-500 fixed inset-0 z-50 bg-stone-950/60 flex items-center justify-center'>
          <div className='bg-stone-800 border border-stone-700 w-[70vh]'>
            <div className='p-2 border-b border-stone-700 mx-auto w-[97%]'>
            <div className='flex items-center justify-between'>

              <h1>{activity.projectName}</h1>
              <div className='pb-6'>
                <button className="bg-yellow-500 rounded-full w-[20px] h-[20px] flex justify-center items-center hover:bg-yellow-700 transition-colors duration-200 cursor-pointer" onClick={() => setShowModal2(false)}><span style={{fontSize: "17px"}}class="material-symbols-outlined">remove</span></button>
              </div>
            </div>
            <h2>For: {activity.clientName}</h2>
            </div>
            <div className='flex px-4 gap-5 mt-2'>
              <h5>Contact: {activity.contact}</h5>
              <h5>Address: 1932 F. Varona St</h5>
              <h5 className='text-green-400 font-light'>Deadline: {activity.deadline.slice(0, 10)}</h5>

            </div>

            <h2 className='px-4 mt-2 mb-1'>Revenue: P{activity.revenue}.00</h2>

            <div className='flex justify-center items-center gap-[20vh] bg-stone-900 w-[95%] mx-auto rounded-t-lg  pt-2'>
              <div className='text-center flex flex-col '>
                <h2 className='text-white'>Progress</h2>
                <h3>{activity.progress}%</h3>
              </div>
               <div className='text-center flex flex-col '>
                <h2 className='text-white'>Payment</h2>
                <h3>{activity.progress}%</h3>
              </div>
            </div>
             <div className='flex items-center justify-center rounded-b-lg mb-2 gap-30 bg-stone-900 mx-auto w-[95%] pb-3'>
                        {/* Progress Gauge */}
                        <Gauge
                          width={170}
                          height={170}
                          min={0}
                          max={100}
                          value={activity.progress}  
                          cornerRadius="50%"
                          sx={(theme) => ({
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 0,
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

                        {/* Payment Gauge */}
                        <Gauge
                          width={170}
                          height={170}
                          min={0}
                          max={100}
                          value={25}  
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
                                               
               </div>
               <div className='px-4 mt-3 flex flex-col gap-3 mb-3'>
                <div className='bg-stone-900 p-3 w-[full] h-50 rounded-lg'>
                  <h5>{activity.projectDescription}</h5>
                </div>
            </div>
          </div>
        </div>
      )}
      <button className="bg-green-500 rounded-full pt-[px] w-[20px] h-[20px] hover:bg-green-700 transition-colors duration-100 cursor-pointer"><span style={{ fontSize: "13px" }} class="material-symbols-outlined">edit</span></button>
    </div>
  );
}

export default Project_control;
