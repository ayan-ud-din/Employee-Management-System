import React, { useState } from 'react'

const Header = (props) => {


  const logOutUser = ()=>{
    localStorage.removeItem('loggedInUser')
  
    props.changeUser(null)
  }
  
  



  return (
    <div className='header my-3'>
<span><h3>Hello ,</h3>
<p>{props.data ? props.data.firstName : 'Admin'}</p> </span>


<button onClick={logOutUser}>
  <span className='text'  >logout  </span>
   <span className='icon'><i className="fa fa-sign-out" aria-hidden="true"></i>
   </span> 
</button>
    </div>
  )
}

export default Header
