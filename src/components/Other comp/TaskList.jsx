import React from 'react'

const TaskList = ({userData}) => {
  return (
    <div>
        <div id='TotalTaskList' className='flex mt-10 justify-between gap-5 screen  overflow-x-auto' >
            <div className='flex-shrink-0 rounded-xl p-5 h-full w-[250px] bg-blue-400 '>
                <h2 className='text-2xl font-semibold'>{userData.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Active</h3>
            </div>

            <div className='flex-shrink-0 rounded-xl p-5 h-full w-[250px] bg-green-400 '>
                <h2 className='text-2xl font-semibold'>{userData.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='flex-shrink-0 rounded-xl p-5 h-full w-[250px] bg-red-400 '>
                <h2 className='text-2xl font-semibold'>{userData.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed</h3>
            </div>
            <div className='flex-shrink-0 rounded-xl p-5 h-full w-[250px] bg-yellow-400 '>
                <h2 className='text-2xl font-bold'>{userData.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed </h3>
            </div>
        </div>

    </div>
  )
}

export default TaskList