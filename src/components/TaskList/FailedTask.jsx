import React from 'react'

const FailedTask = ({data}) => {
 
  return (
     <div>
      
<div className="main-task container">

<div className="upper-sec">
<button>Failed</button>
<p>{data.taskDate}</p>
</div>

<div className="mid-sec">

  <h2>{data.taskTitle}</h2>
  <p>{data.taskDescription} </p>
</div>


<div className="lower-sec">
<button style={{ background: "rgba(255, 0, 0, 0.2)", color: "rgb(240, 62, 62)" }}
 >{data.category}</button>
<p>→</p>
</div>

</div>
    </div>
  )
}

export default FailedTask
