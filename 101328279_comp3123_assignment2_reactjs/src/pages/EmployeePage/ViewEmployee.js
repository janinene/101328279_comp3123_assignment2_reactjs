import React, { Component } from 'react'
import axios from 'axios';
// import { Outlet, Link } from "react-router-dom";
import '../css/pages.css';



export default class ViewEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    componentDidMount(){
        this.getEmployeeById()
    }

    //Get Employee By ID
    getEmployeeById = (id) => {
        axios.get(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
            console.log(res.data)
        })
    }
  render() {
    return (
        <>
            <h1>ViewEmployee</h1>
            
            {/* <h1>{employee.first_name}</h1> */}
        </>
      
    )
  }
}
