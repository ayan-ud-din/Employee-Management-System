import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div>

      <div className="main-task container">

        <div className="upper-sec">
          <button style={{ background: "rgba(0, 178, 68, 0.38)", color: "rgb(0, 178, 68)" }}>  Completed</button>
          <p>{data.taskDate}</p>
        </div>

        <div className="mid-sec">

          <h2>{data.taskTitle}</h2>
          <p>{data.taskDescription} </p>
        </div>


        <div className="lower-sec">
          <button>{data.category}</button>
          <p>→</p>
        </div>

      </div>
    </div>
  )
}

export default CompleteTask
