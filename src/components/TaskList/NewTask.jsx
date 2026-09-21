import React from 'react'

const NewTask = ({data}) => {
  return (
      <div>
      
<div className="main-task container">

<div className="upper-sec">
<button style={{ background: "rgba(9, 0, 178, 0.35)", color: "rgb(3, 24, 255)" }}
>New</button>
<p>{data.taskDate}</p>
</div>

<div className="mid-sec">

  <h2>{data.taskTitle}</h2>
  <p>{data.taskDescription} </p>
</div>


<div className="lower-sec">
<button >{data.category}</button>
<p>→</p>
</div>

</div>
    </div>
 
  )
}



export default NewTask
