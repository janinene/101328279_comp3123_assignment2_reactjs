import React, { Component } from 'react'
import {  Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
        <>
            <div className="user-login">
                    <h1>Sign Login</h1>
        
                    <form>
                        <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name="username" 
                                    // value={this.state.first_name}
                                    // onChange={this.onChangeEvent}
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
                                    // value={this.state.last_name}
                                    // onChange={this.onChangeEvent}
                                    placeholder="Password" required
                                />
                        </div>
                        <br />
                        <div className='button-div'>
                            <button type="submit" className="btn btn-success">Sign Up</button>
                            <Link className='sign-up' to='/login'><button type="submit" className="btn btn-danger cancel">Cancel</button></Link>
                        </div>                        
                    </form>
            </div>
        </>
    )
  }
}
