import React, { Component } from "react";
import axios from 'axios';
import '../css/pages.css';
import { Link } from "react-router-dom";

const INITIAL_VALUE = {
    first_name : "",
    last_name : "",
    email: ""
}

export default class Add_Employee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {...INITIAL_VALUE}
    }


    onChangeEvent = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createNewEmployee = async (e) => {
        e.preventDefault();
        const newEmployee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        }
        await axios.post(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/add`, newEmployee )
        .then(res => { 
            console.log(res.status); 
            if (res.status === 200)
                alert('Employee Added')
            // console.log(res.data);
        })
        .catch(error => {
            console.log(error)
            alert('Employee Not Added. Your email already exists')
        })
    }

    clearForm = (event) => {
        event.preventDefault()
        this.setState({...INITIAL_VALUE})
    }

    render() {
        return (
            <div className="add-employee">
                <h1>Add Employee</h1>
    
                <form onSubmit={this.createNewEmployee}>
                    <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                name="first_name" 
                                value={this.state.first_name}
                                onChange={this.onChangeEvent}
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
                                value={this.state.last_name}
                                onChange={this.onChangeEvent}
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
                                value={this.state.email}
                                onChange={this.onChangeEvent}
                                placeholder="Email Address" required
                            />
                    </div>
                    <br />
                    <div className='button-div'>
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="reset" className="btn btn-danger cancel" value='Reset' onClick={(e) => this.clearForm(e)}>Reset</button> 
                        <Link to='/list'><button type="submit" className="btn btn-secondary cancel ">Back</button></Link>
                    </div>                        
                </form>
            </div>
            
          
        )
    }
}