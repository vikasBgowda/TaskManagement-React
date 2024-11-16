import React, { useState ,useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
    const [TaskTitle, setTaskTitle] = useState('')
    const [TaskDescription, setTaskDescription] = useState('')
    const [date, setDate] = useState('')
    const [category, setcategory] = useState('')
    const [AssignTo, setAssignTo] = useState('')
    const [UserData, setUserData]=useContext(AuthContext);

    const [NewTask, setNewTask] = useState({})

    const submitHandler =(e)=>{
        e.preventDefault();

        setNewTask({taskTitle:TaskTitle,taskDescription:TaskDescription,taskDate:date,category,active:false,newTask:true,failed:false,completed:false})

        const user=UserData;

        user.forEach(function(elem) {
            if(AssignTo==elem.firstName){
                elem.tasks.push(NewTask)
                elem.taskCounts.newTask=elem.taskCounts.newTask+1
            }
        });
        setUserData(user)
        console.log(UserData)
        // setAssignTo('')
        // setDate('')
        // setTaskDescription('')
        // setTaskTitle('')
        // setcategory('')
    }
    


 
  return (
        <div className='text-white p-5 mt-7 rounded bg-[#1C1C1C] '>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between ' >
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={TaskTitle}
                    onChange={(e)=>setTaskTitle(e.target.value)}
                    className='text-sm py-3 px-5 w-1/2 rounded outline-none bg-transparent border-[1px] border-x-gray-400 mb-4' type='text' placeholder='Enter title'></input>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input 
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    className='text-sm py-3 px-5 w-1/2 rounded outline-none bg-transparent border-[1px] border-x-gray-400 mb-4' type='date'></input>                   
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5' >Assign To</h3>
                    <input 
                    value={AssignTo}
                    onChange={(e)=>setAssignTo(e.target.value)}
                    className='text-sm py-3 px-5 w-1/2 rounded outline-none bg-transparent border-[1px] border-x-gray-400 mb-4' type="text" placeholder='Employee ID' />                   
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={category}
                    onChange={(e)=>setcategory(e.target.value)} 
                    className='text-sm py-3 px-5 w-1/2 rounded outline-none bg-transparent border-[1px] border-x-gray-400 mb-4' type="text" placeholder=' Desgin , Development etc' />
                </div>

            </div>
            <div className='w-1/2 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value={TaskDescription}
                onChange={(e)=>setTaskDescription(e.target.value)}
                 className='w-1/2 text-sm py-1 px-2  rounded outline-none bg-transparent border-[1px] border-x-gray-400 mb-4' cols='30' rows='8'></textarea>                    
                <button className='w-1/2 bg-emerald-500 rounded-xl text-sm py-3 px-5 hover:bg-emerald-600'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask