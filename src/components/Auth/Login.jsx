import React, { useState } from 'react'

const Login = ({LoginHandler}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const SubmitHandler=(e)=>{
        e.preventDefault();
        LoginHandler(email,password)
        setemail('')
        setpassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black '> 
       
            <div className=' border-2 rounded-xl border-emerald-500 p-20 bg-gray-100 '>
                <div className='flex justify-center items-center pb-12 text-center font-extrabold text-emerald-500 '>
                    <h2  className='font-semibold text-3xl '>User Login</h2>
                </div>
            <form 
            onSubmit={(e)=>{
                SubmitHandler(e);
            }}
            className='flex flex-col  items-center justify-center'>
                <input value={email} onChange={(e)=>{setemail(e.target.value)}} className='  text-emerald-500 text-xl font-normal border-2 border-emerald-500 rounded-full py-3 px-5 bg-transparent outline-none placeholder:text-gray-400' type='email' placeholder='Enter your email'></input>
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}} className='text-emerald-500 text-xl border-2 border-emerald-500 rounded-full py-3 px-5 bg-transparent outline-none mt-7 placeholder:text-gray-400 'type='password' placeholder='Enter Password'></input>
                <div className='text-white flex justify-between items-end  mt-5 '>
                    <div className='justify-start text-emerald-500   mr-14'>
                        <input type='checkbox' ></input>
                        <label htmlFor="Remember" className='ml-1'>Remember</label>
                    </div>
                    <div className='justify-end  ml-14 text-emerald-500'>Forget Password ?</div></div>
                <button className='mt-7 text-white outline-none text-xl rounded-full bg-emerald-400 py-3 px-20 justify-center '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login