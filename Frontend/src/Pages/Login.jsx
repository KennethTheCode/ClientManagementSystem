import {React, useState} from 'react'
import Navbar2 from '../Components/Navbar2'
import Systemlogo from '../Images/Systemlogo.png'
import {Link, useNavigate} from 'react-router-dom'



function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await fetch(`http://127.0.0.1:8000/login/`,{
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(form)
            });
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('userId', data.data.id);
                console.log(data)
                navigate("/mainpage");
            } else {
                alert("Sign up failed")
            }
        } catch (error) {
            alert("Something went wrong.")
        }
    };

  return (
    <div>
        <Navbar2/>
        <div className='h-[80vh] flex items-center justify-center'>
            <div className='h-[66vh] w-[45vh] bg-stone-800 rounded border border-stone-800 shadow-xl pt-3'>
                <div className='w-[23vh] h-[5vh] flex justify-center items-center mx-auto'>
                    <img src={Systemlogo}></img>
                </div>
                <div className=' w-full h-[10vh] flex items-center justify-center flex-col'>
                    <h2>LOG IN TO Simpli<span className='text-lime-600'>Go</span></h2>
                    <p className='text-white'>Need a SimpliGo account? <span className='text-lime-200 underline' onClick={() => navigate('/signup')}>Create an account</span></p>
                </div>
                <div className=' h-[35vh] w-[90%] p-3 border-b border-stone-700 mx-auto mb-7'> 
                    <form onSubmit={handleSubmit}> 
                        <h5>Username or Email</h5>
                        <input className='w-full h-11 border border-stone-700 mt-3 rounded placeholder-stone-500 text-white p-2 mb-5'
                        type="text"
                        placeholder="Enter your username or email"
                        name="email"
                        onChange={handleInput}>
                        </input>

                        <h5>Password</h5>
                        <input className='w-full h-11 border border-stone-700 mt-3 rounded placeholder-stone-500 text-white p-2 mb-5'
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleInput}>
                        </input>
                        <button className='bg-lime-600 text-white w-full h-10 rounded mt-3'><p>LOG IN</p></button>
                        <p className='underline pt-1 text-lime-200'>Forgot password?</p>
                    </form>
                </div>

                <div className='w-full h-10 flex items-center justify-center flex-col mt-3 gap-2 p-6'>
                    <p className='text-white'>Or, if you created your SimpliGo account with Google:</p>
                    <button className='border border-white p-2 w-full rounded'><p className='text-white'>Continue with Google</p></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login