import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const CreateTask = () => {

const [userData,setUserData] =useContext(AuthContext)

    const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [category, setCategory] = useState('')
const [assignTo, setAssignTo] = useState('')
const [Date, setDate] = useState('')




const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    taskTitle: title,
    taskDescription: description,
    taskDate: Date,
    category: category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  };

  const updatedData = userData.map((elem) => {
    if (assignTo === elem.firstName) {
      return {
        ...elem,
        tasks: [...elem.tasks, task],
        taskCounts: {
          ...elem.taskCounts,
          newTask: elem.taskCounts.newTask + 1
        }
      };
    }

    return elem;
  });

  setUserData(updatedData);

  localStorage.setItem('employees', JSON.stringify(updatedData));

  setTitle('');
  setDescription('');
  setCategory('');
  setAssignTo('');
  setDate('');
};


  return (
    <>
    
                <div className="createTask-heading container">
                    <p>Create New Task</p>
                </div>


                <form className="createTask container" onSubmit={(e)=>{
                     submitHandler(e)
                }}>



                    <div className="createTask-leftside ">
                        <div>
                            <p>Task title</p>
                            <input type="text" placeholder='Enter task title'   value= {title} onChange={(e)=>{
                           setTitle(e.target.value)
                            }} />
                        </div>

                        <div>
                            <p>Date</p>
                            <input type="date" value= {Date} onChange={(e)=>{
                           setDate(e.target.value)
                            }}  />
                        </div>

                        {/* <div>
                            <p>Assign to</p>
                            <input type="" placeholder='Employee Name' 
                            value= {assignTo} onChange={(e)=>{
                           setAssignTo(e.target.value)
                            }} />
                        </div> */}

<div className="form-group">
  <label>Assign To</label>

  <select
    value={assignTo}
    onChange={(e) => setAssignTo(e.target.value)}
    required
  >
    <option value="">Select Employee</option>

    {userData?.map((employee) => (
      <option key={employee.id} value={employee.firstName}>
        {employee.firstName}
      </option>
    ))}
  </select>
</div>
                        <div>
                            <p>Category</p>
                            <input type="text" placeholder='Design , Dev , Tech'
                            value= {category} onChange={(e)=>{
                           setCategory(e.target.value)
                            }}  />
                        </div>


                    </div>

                    <div className="createTask-rightside">
                        <p>Description</p>
                        <textarea placeholder='Enter task description'value= {description} onChange={(e)=>{
                           setDescription(e.target.value)
                            }} ></textarea>

                        <button>Create Task</button>

                    </div>

                </form>
    </>
  )
}

export default CreateTask
