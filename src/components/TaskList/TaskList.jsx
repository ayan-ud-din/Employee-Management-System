import React from 'react'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'

const TaskList = ({data}) => {
  return (<>
    
      
      <div className="tasklist-heading">
        <h2>Latest Tasks</h2>
        </div>
        
        <div className='tasklist'>

{data.tasks.map((elem,idx)=>{

if(elem.active){ return <AcceptTask  key={idx} data={elem} />};


if(elem.failed){
   return<FailedTask  key={idx} data={elem}  />}
if(elem.completed){
   return<CompleteTask key={idx} data={elem}  />
}
 


if(elem.newTask){
  return<NewTask key={idx} data={elem}  />
}
  

 })} 

    </div>
    </>
  )
}

export default TaskList
