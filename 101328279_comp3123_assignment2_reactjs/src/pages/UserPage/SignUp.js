import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import '../css/pages.css';

export default function SignUp() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const createNewUser = async (e) => {
        e.preventDefault();
        const newUser = {
            username: userName,
            password: password,
            email: email
        }
        await axios.post(`https://comp3123-101328279-assignment2.herokuapp.com/api/user/signup`, newUser)
            .then(res => {
                console.log(res.status);
                if (res.status === 200)
                    alert('User Added')
                // console.log(res.data);
            })
            .catch(error => {
                console.log(error)
                alert('User Not Added. Your email or username already exists')
            })
    }

    return (
        <>
            <div className="user-login">
                <h1>Sign Up</h1>
                <form onSubmit={createNewUser}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address" required
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={userName}
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
                        <button type="submit" className="btn btn-success">Sign Up</button>
                        <Link to='/login'><button type="submit" className="btn btn-secondary cancel ">Back</button></Link>
                    </div>
                </form>
            </div>

            {/* <Outlet /> */}
        </>
    )
}

