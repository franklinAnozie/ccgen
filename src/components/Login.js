import React from 'react'
import { useRegContext } from '../context/regContext'

const Login = () => {

  const { 
    suppliedDetails, 
    setSuppliedDetails, 
    loginUser
} = useRegContext()

  return (
    <div className="cols">
        <form action="retrieve.html" method="get" id="user-login" onSubmit={(e)=>loginUser(e)}>
            <div className="row">
                <label htmlFor="user-name">User Name: </label>
                <input type="text" id="user-name" name="user-name" required onChange={(e) => {setSuppliedDetails({...suppliedDetails, username: e.target.value})}}/>
            </div>
            <div className="row">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required onChange={(e) => {setSuppliedDetails({...suppliedDetails, password: e.target.value})}}/>
            </div>
            <div className="row">
                <button type="submit" className="btn btn-primary" id="login">Log In</button>
            </div>
        </form>
    </div>
  )
}

export default Login