import React, { Component } from "react";
import axios from 'axios';

import EmpKey from '../keys/employee_list_key'
// import { Outlet, Link } from "react-router-dom";
// import View from './/ViewEmployee';



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

     //Get Employee By ID
     getEmployeeDataByID = (id) => {
        axios.get(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
            console.log(res.data)
        })
    }

    getEmployees() {
        return this.state.employees.map((employee) =>{
            return <EmpKey employees={employee} key={employee.id} />;
        })
    }

    //Get User By ID
    deleteUserDataByID = (id) => {
        axios.delete(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
            console.log(res.data)
            let employeeList = this.state.employees.filter(u => {
                return u.id !== id
            })

            this.setState({...this.state, employees: employeeList})
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
                            this.getEmployees()
                        }
                        </tbody> 
                    </table>
                </div>
                
                {/* <Outlet /> */}
            </>
        )
    } 
}

