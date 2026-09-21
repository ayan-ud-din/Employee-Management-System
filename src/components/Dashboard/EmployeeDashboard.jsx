import React from 'react'
import Header from '../others/Header'
import Footer from '../others/Footer'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  
  return (
    <div className='background '>

      <div className='container'>
<Header changeUser = {props.changeUser}  data={props.data} />

<TaskListNumbers  data={props.data} />

<TaskList data={props.data} />


<Footer data={props.data}  />
</div>
    </div>
  )
}

export default EmployeeDashboard
