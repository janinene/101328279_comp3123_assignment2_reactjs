import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Add_Employee extends Component {
    render() {
        return (
            <div className="add-employee">
                <h1>Add Employee</h1>
    
                <form>
                    <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                name="first_name" 
                                // value={this.state.first_name}
                                // onChange={this.onChangeFirstName}
                                placeholder="First Name" required
                            />
                    </div>
                    <br />
                    <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="lastName" 
                                name="last_name" 
                                // value={this.state.last_name}
                                // onChange={this.onChangeLastName}
                                placeholder="Last Name" required
                            />
                    </div>
                    <br />
                    <div className="form-group">
                            <label htmlFor="emailAddress">Email ID:</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="emailAddress"
                                name="email"
                                // value={this.state.email}
                                // onChange={this.onChangeEmail}
                                placeholder="Email Address" required
                            />
                    </div>
                    <br />
                    <div className='button-div'>
                        {/* <button type="submit" className="btn btn-success" onClick={this.saveEmployee}>Save</button> */}
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="submit" className="btn btn-danger cancel">Cancel</button>
                    </div>                        
                </form>
            </div>
            
          
        )
    }
}