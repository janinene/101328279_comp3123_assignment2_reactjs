import React, { Component } from "react";
import axios from 'axios';
// import EmpKey from './keys/employee_list_key'
// import { Link } from "react-router-dom";

export default class Employee_List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        axios.get(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee`)
        .then(res => {
            // console.log(res.data);                  //for testing list
            const employees = res.data;
            this.setState({ employees });
        })
    }

    render() {
        return (
            <>
                <div className='employee-list'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Employee Email</th>
                                <th scope="col">Label</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map((employee) => (
                            <>                                                    
                            <tr>  
                                <td>{employee.first_name}</td>    
                                <td>{employee.last_name}</td>    
                                <td>{employee.email}</td>   
                                <td>
                                    <button type="submit" className="btn btn-success">Update</button>
                                    <button type="submit" className="btn btn-danger cancel">Delete</button>
                                </td>   
                            </tr>                                                                                             
                            </>                        
                        ))
                        }
                        </tbody> 
                    </table>
                </div>
                
            </>
        )
    } 
}