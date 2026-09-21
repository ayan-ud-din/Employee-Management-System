import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
      
<div className="main-task container">

<div className="upper-sec">
<button  style={{ background: "rgba(226, 251, 6, 0.32)", color: "rgb(218, 218, 9)" }}
>Accepted</button>
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

export default AcceptTask
