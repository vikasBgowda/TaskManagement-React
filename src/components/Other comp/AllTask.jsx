import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {

const [UserData, setUserData]=useContext(AuthContext);

  return (
    <div className='mt-5 p-5 rounded h-[33%]  bg-[#1c1c1c]' >

        <div className='bg-emerald-400 py-2 px-4 flex justify-between rounded mb-2 font-semibold text-white  '>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h2 className='text-lg font-medium w-1/5 '>New Task</h2>
            <h2 className='text-lg font-medium w-1/5 '>Active Task</h2>
            <h2 className='text-lg font-medium w-1/5 '>Completed</h2>
            <h2 className='text-lg font-medium w-1/5 '>Failed</h2>
        </div>

        <div id = 'TotalTaskList' className='overflow-auto h-[100%]'>  
        {UserData.map(function(elem,idx){
            return   <div key={idx} className='border-2 border-white py-2 px-4 flex justify-between rounded mb-2  '>
            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
            <h2 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.newTask}</h2>
            <h2 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.active}</h2>
            <h2 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h2>
            <h2 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h2>
        </div>
        })}
        </div>   
</div>
  )
}

export default AllTask