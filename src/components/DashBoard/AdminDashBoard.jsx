import React from 'react'
import Header from '../Other comp/Header'
import CreateTask from '../Other comp/CreateTask'
import AllTask from '../Other comp/AllTask'

const AdminDashBoard = (props) => {

  return (
    <div className='h-screen w-full p-10 bg-black'>
        <Header changeUser={props.changeUser} userData={props.userData}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashBoard