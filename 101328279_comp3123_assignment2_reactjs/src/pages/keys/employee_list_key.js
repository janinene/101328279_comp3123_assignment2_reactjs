import React from 'react'
import {  Link } from "react-router-dom";
import axios from 'axios';

export default function employee_list_key(props) {
    
    // Get User By ID
    const deleteUserDataByID = (id) => {
        // let { id } = useParams();
        axios.delete(`https://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
            console.log(res.data)
            let employList = [props.employees.first_name,props.employees.last_name,props.employees.email]
            let employeeList = employList.filter(u => {
                return u.id !== id

            })

            this.setState({employees: employeeList})
            
        })
    }


    
  return (   
        <>   
            <tr>
                <td>{props.employees.first_name}</td>
                <td>{props.employees.last_name}</td>
                <td>{props.employees.email}</td>
                <td>
                    <Link to={"/view/" +props.employees.id}>
                        <button type="submit" className="btn btn-primary">View </button>                   
                    </Link>
                    <Link to={"/edit/"+props.employees.id}>
                        <button type="submit" className="btn btn-success cancel">Edit</button>                  
                    </Link> 
                             
                    <Link to={"/list/"}>                                                                                              {/* to refresh the page v */}
                        <button type="submit" className="btn btn-danger cancel" onClick={ (e) => {deleteUserDataByID(props.employees.id); window.location.reload(false); }}>Delete</button>        
                    </Link>                     
                    
                </td>
            </tr>
        </>                                                                                                                                          
    )
  
}
