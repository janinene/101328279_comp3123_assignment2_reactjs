import React, {useState} from 'react'
import axios from 'axios';
// import { withRouter } from "react-router";
import { Outlet, Link, useParams } from "react-router-dom";
import '../css/pages.css';


export default function ViewEmployee() {
    const view_table = {
        textAlign: 'center',
        color: 'red'
    }

    let { id } = useParams();
    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")

    //Get Employee By ID
    axios.get(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
            setFirst(res.data.first_name)
            setLast(res.data.last_name)
            setEmail(res.data.email)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    

  return (
    <>
        <div className='view-employee'>
            <h1>ViewEmployee</h1>
            <br />
            <div className='view-container'>
                <table className="view-table">
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>{first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{last_name}</td>
                        </tr>
                        <tr>
                            <td>Email Name:</td>
                            <td>{email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </>
    
  )
}


