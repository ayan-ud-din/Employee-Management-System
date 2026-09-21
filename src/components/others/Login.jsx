import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")





    const submitHandler = (e) => {

        e.preventDefault()

        handleLogin(email,password)  

        setEmail("")
        setPassword("")

    }


    return (
        <>
        <div className='login'>

            <form className='login-form' onSubmit={(e) => { submitHandler(e) }}
            >


                <div className="login-text">
                    <h2>Welcome back</h2>
                    <p> please log in to your account</p>
                </div>


                <div className="inputs">

                    <input type="email" placeholder='Enter your email' required value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}

                    />

                    <input type="password" placeholder='Enter your password' required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}

                    />


                    <button>Login</button>
                </div>

<div className="demo">
              
              
                <h5 style={{color:'rgba(8, 172, 134, 0.971)'}}><i className="fa-regular fa-circle-user"></i>    Demo email and Password</h5>
            <p> Password : 123</p>
                <p> Admin : admin@me.com</p>
                <p> Employee 1 : employee1@example.com</p>
                <p> Employee 2 : employee2@example.com</p>
                <p> Employee 3 : employee3@example.com</p>
                <p> Employee 4 : employee4@example.com</p>
                <p> Employee 5 : employee5@example.com</p>
            </div>

            </form>

            
</div>
        </>
    )
}

export default Login
