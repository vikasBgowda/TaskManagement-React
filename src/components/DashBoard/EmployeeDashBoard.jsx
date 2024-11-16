import React from 'react'
import Header from '../Other comp/Header'
import TaskList from '../Other comp/TaskList'
import TotalTaskList from '../../TaskList/TotalTaskList'
const EmployeeDashBoard = (props) => {

  return (
    <>
    <div className='p-10  h-screen'>
        <Header changeUser={props.changeUser} userData={props.userData}/>
        <TaskList userData={props.userData}/>
        <TotalTaskList userData={props.userData} />
    </div>

    </>
  )
}

export default EmployeeDashBoard