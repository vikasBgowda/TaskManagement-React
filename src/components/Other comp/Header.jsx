import React, { useState } from 'react'

const Header = (props) => {

  let Name=props.userData.firstName

  if(!props.userData.firstName){
    Name='Admin'
  }

  const LogOutUser=()=>{
    localStorage.setItem('LoggedInUser','');
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <>
        <div className='flex items-center justify-between text-white'>
            <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{Name} 👏 </span> </h1>
            <button onClick={LogOutUser} className='bg-red-500 text-white border rounded-xl px-5 py-2 outline-none text-lg font-medium'>Log Out</button>
        </div>
    </>
  )
}

export default Header