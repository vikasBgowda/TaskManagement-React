import React from 'react'

const AcceptTask = ({data}) => {

  return (
    <div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center p-1'>
          <h3 className='bg-red-400 px-2 py-1 rounded text-sm font-bold text-white border-2 border-black'>{data.category}</h3>
          <h2>{data.taskDate}</h2>
        </div>
        <h2 className='text-2xl mt-3 font-semibold'> {data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
        <button className='bg-green-500 hover:bg-green-400 text-sm py-1 px-2 rounded border-2 border-black t'>Mark as Completed</button>
        <button className='bg-red-500 hover:bg-red-400 text-sm py-1 px-2 rounded border-2 border-black'>Mark as Failed</button>
      </div>
    </div>
      
    </div>
  )
}

export default AcceptTask