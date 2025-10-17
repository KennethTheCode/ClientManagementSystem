import React, { useState } from 'react';

function New_Client() {
    const [showModal, setShowModal] = useState(false);
    const userId = localStorage.getItem('userId');

    const [form, setForm] = useState({
        user_id: userId,
        clientName: '',
        contact: '',
        address: '',
    });

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('userId');
            const payload = {
                ...form,
                user_id: userId,
                clientName: form.clientName,
                contact: form.contact,
                address: form.address
            };

            const res = await fetch("http://127.0.0.1:8000/clients", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(payload)
            });
            console.log(payload);

            if (res.ok) {
                setShowModal(false);
                window.location.reload();
            } else {
                alert("Client creation failed!");
            }
        } catch (error) {
            alert("Something went wrong.");
        }
    };    

    return (
        <div>
            <button
                onClick={() => setShowModal(true)}
                className='text-white border-b border-stone-700 w-[11vh] p-1 pb-2 hover:bg-stone-600 transition-colors duration-200 rounded'>
                <p>New Client</p>
            </button>
            {showModal && (
                <div className='h-screen fixed inset-0 bg-stone-950/60 z-50 flex items-center justify-center'>
                    <div className='bg-stone-800 border border-stone-700 p-6 rounded w-[55vh]  shadow-lg text-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <h3 className="mb-4 text-lg font-bold">New Client</h3>
                            <button className="bg-lime-600 text-white w-7 rounded-full" onClick={() => setShowModal(false)}><h6>x</h6></button>
                        </div>
                        <form onSubmit={handleSubmit}>
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

                            <h6>Address</h6>
                            <input
                                className='border border-stone-700 w-full rounded mt-3 p-2 placeholder-stone-500 mb-4'
                                placeholder='Enter Address'
                                type='text'
                                onChange={handleInput}
                                name='address'
                                value={form.address}/>

                            <button className="mt-4 bg-lime-600 text-white px-4 py-2 rounded" type='submit'><h6>Submit</h6></button>
                        </form>            
                    </div>
                </div>
            )}
        </div>
    )
}

export default New_Client