import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import Footer from '../others/Footer'


const AdminDashboard = (props) => {
    return (
        <div className="background">
            <div className="container">

                <Header changeUser = {props.changeUser}  />

<CreateTask/>

<AllTask/>
               
               <Footer/>


            </div>
        </div>
    )
}

export default AdminDashboard
