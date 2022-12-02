import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import '../css/pages.css';

export default function EditEmployee() {
    let navigate = useNavigate();       //use for cancel button
    let { id } = useParams();
    const [employee, setEmployee] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })

    const {first_name, last_name, email} = employee

    useEffect( () => {
        getEmployee()
    }, [])
    
    //Get Employee By ID
    const getEmployee = async () => {
        await axios.get(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
           setEmployee(res.data)
            // console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    let onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`, employee)
        .then(res => {
            console.log(res.data)
        })
        .catch((error) => console.log(error))
    }

    const onEmployeeChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    return (
        <div className="add-employee">
            <h1>Edit Employee</h1>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="first_name" 
                            value={first_name}
                            onChange={(e) => onEmployeeChange(e)}
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
                            value={last_name}
                            onChange={(e) => onEmployeeChange(e)}
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
                            value={email}
                            onChange={(e) => onEmployeeChange(e)}
                            placeholder="Email Address" required
                        />
                </div>
                <br />
                <div className='button-div'>
                    <button type="submit" className="btn btn-secondary cancel" onClick={() => navigate(-1)}>Back</button>
                    <button type="submit" className="btn btn-success cancel">Save</button>
                </div>                        
            </form>
        </div>
    )
}
