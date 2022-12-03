import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import '../css/pages.css';


export default function UserLogin() {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [userName, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: userName,
      password: password,
    }
    try {
      const res = await axios.post(`https://comp3123-101328279-assignment2.herokuapp.com/api/user`, newUser)      //not working correctly
      console.log(res.data)
      if (res.status === false) {
        setUserName('')
        setPassword('')
        setSuccess(false)
        
      }
      setSuccess(true)


    }
    catch (err) {
      if (!err.res) {
        setErrMsg('No server response')
      }
      else if (err.res?.status === 400) {
        setErrMsg('Missing username or password')
      }
      else if (err.res?.status === 401) {
        setErrMsg('Unaquthorized')
      }
      else {
        setErrMsg('Login Failed')
      }

      errRef.current.focus();
    }


  }


  return (
    <>
      {
        success ? (
          <section>
            <Navigate to='/list' replace={true} />
          </section>

        ) : (
          <div className="user-login">
            <section>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            </section >
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={userName}
                  ref={userRef}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username" required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" required
                />
              </div>
              <br />
              <div className='button-div'>
                <button type="submit" className="btn btn-success">Login</button>
                <Link to='/signup'><button type="submit" className="btn btn-danger cancel ">Sign Up</button></Link>
              </div>
            </form>
          </div >

        )
      }
    </>
  )
}

