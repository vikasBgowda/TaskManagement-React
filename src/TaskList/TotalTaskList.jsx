import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from '../components/Other comp/CompletedTask'
import FailedTask from '../components/Other comp/FailedTask'

const TotalTaskList = ({userData}) => {

  return (

    <div id='TotalTaskList' className='h-[55%] flex items-centre justify-start overflow-x-auto  gap-5 w-full  mt-10 py-10 '>
      { userData.tasks.map((elem,idx)=>{
        
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return  <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompletedTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return  <FailedTask key={idx} data={elem}/>
        }

          
         
      })}

    </div>  

  )
}

export default TotalTaskList 