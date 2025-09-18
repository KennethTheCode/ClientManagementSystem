import React, { useState } from 'react';

function Add_activity() {
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem('userId');

  const [form, setForm] = useState({
    user_id: userId,
    projectName: '',
    clientName: '',
    contact: '',
    revenue: '',
    deadline: '',
    projectDescription: '',
    progress:''
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Always get the latest userId from localStorage
      const userId = localStorage.getItem('userId');
      const payload = { ...form, user_id: userId,
         projectName: form.projectName,
          clientName: form.clientName,
          contact: form.contact,
          revenue: form.revenue,
          deadline: form.deadline,
          progress: form.progress,
          projectDescription: form.projectDescription};

      const res = await fetch("http://127.0.0.1:8000/activities", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload)
      });
        console.log(payload);

      if (res.ok) {
        setShowModal(false);
        // Optionally clear form or refresh activities here
      } else {
        alert("Activity creation failed!");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  return (
    <div>
        <button className='border-b border-stone-700 w-[11vh] p-1 pb-2 hover:bg-stone-600 transition-colors duration-200 rounded' onClick={setShowModal}><p className='text-white'>New Project</p></button>

      {showModal && (
        <div className="fixed inset-0 bg-stone-950/60 flex items-center justify-center z-50">
          <div className="bg-stone-800 border border-stone-700 rounded p-6 w-[55vh] shadow-lg text-white">
            <div className='flex justify-between items-center mb-5'>
              <h3 className="mb-4 text-lg font-bold">New Project</h3>
              <button className="bg-lime-600 text-white w-7 rounded-full" onClick={() => setShowModal(false)}><h6>x</h6></button>
            </div>
            <form onSubmit={handleSubmit}>
            <h6>Project Name</h6>
            <input
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                placeholder='Enter Project Name'
                type='text'
                onChange={handleInput}
                name='projectName'
                value={form.projectName}/>

            <h6>Client Name</h6>
            <input
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                placeholder='Enter Client Name'
                type='text'
                onChange={handleInput}
                name='clientName'
                value={form.clientName}/>

            <h6>Contact</h6>
            <input
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                placeholder='Enter Contact'
                type='text'
                onChange={handleInput}
                name='contact'
                value={form.contact}/>

            <h6>Revenue</h6>
            <input
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                placeholder='Enter Revenue'
                type='number'
                onChange={handleInput}
                name='revenue'
                value={form.revenue}/>

            <h6>Deadline</h6>
            <input
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                placeholder='Enter Deadline'
                type='date'
                onChange={handleInput}
                name='deadline'
                value={form.deadline}/>

            <h6>Progress</h6>
            <input
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                placeholder='Enter Progress'
                type='number'
                onChange={handleInput}
                name='progress'
                value={form.progress}/>

            <h6>Project Description</h6>
            <textarea
                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4 h-[20vh]'
                placeholder='Enter Project Description'
                type='text'
                onChange={handleInput}
                name='projectDescription'
                value={form.projectDescription}/>

            <button className="mt-4 bg-lime-600 text-white px-4 py-2 rounded" type='submit'><h6>Submit</h6></button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Add_activity;