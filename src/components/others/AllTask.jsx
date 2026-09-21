import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {


  const [userData , setUserData]= useContext(AuthContext)





  return (
    <>

    <div className="createTask-heading container">
                    <p>All Tasks</p>
                </div>




    <div className='alltask container' >
     
     
      <div className="alltask-task container " id='different'>
        <p><i class="fa-regular fa-user"></i>  Employees</p>
        <p>New </p>
        <p>Active </p>
        <p>Completed</p>
        <p>Failed</p>
      </div>


   
      {userData.map((elem,idx)=>{
       
  return<div className="alltask-task container" key={idx}>
        <p><i class="fa-regular fa-user"></i>  {elem.firstName}</p>
        <p>{elem.taskCounts.newTask}</p>
        <p>{elem.taskCounts.active}</p>
        <p>{elem.taskCounts.completed}</p>
        <p>{elem.taskCounts.failed}</p>
      </div>
      })}








  
      
    </div>
    </>
  )
}

export default AllTask
