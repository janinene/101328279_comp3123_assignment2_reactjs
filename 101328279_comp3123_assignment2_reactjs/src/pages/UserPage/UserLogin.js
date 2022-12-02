import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";


export default class UserLogin extends Component {
  render() {
    return (
      <>
        <div className="user-login">
                <h1>User Login</h1>  
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
                        <button type="submit" className="btn btn-success">Login</button>
                        <Link className='sign-up' to='/signup'><button type="submit" className="btn btn-danger sign-up">Sign Up</button></Link>
                        {/* <button type="submit" className="btn btn-danger cancel">Cancel</button> */}
                    </div>                        
                </form>
            </div>

            <Outlet />
      </>
    )
  }
}
