import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div> 
    <div className='flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl p-5'>
        <div className='flex justify-between items-center p-1'>
          <h3 className='bg-red-400 px-2 py-1 rounded text-sm font-bold text-white border-2 border-black'>{data.category}</h3>
          <h2>{data.taskDate}</h2>
        </div>
        <h2 className='text-2xl mt-3 font-semibold'> {data.title}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-center items-center mt-3 '>
        <button className='bg-red-500 hover:bg-red-400  font-semibold text-white px-2 py-1  rounded border-2 items-center border-black'>Failed </button>
      </div>  
    </div>

    </div>
  )
}

export default FailedTask