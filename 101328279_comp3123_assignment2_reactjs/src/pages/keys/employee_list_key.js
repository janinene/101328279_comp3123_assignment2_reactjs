import React from 'react'
import {  Link } from "react-router-dom";

export default function employee_list_key(props) {
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
                    <Link to={"/list/" + props.employees.id}>
                        <button type="submit" className="btn btn-danger cancel">Delete</button>             
                    </Link>                     
                    
                </td>
            </tr>
        </>                                                                                                                                          
    )
  
}
