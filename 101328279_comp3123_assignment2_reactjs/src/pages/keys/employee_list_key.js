import React from 'react'

export default function employee_list_key({employees}) {
  return (   
        <>
            <td>{employees.id}</td>    
            <td>{employees.first_name}</td>    
            <td>{employees.last_name}</td>    
            <td>{employees.email}</td>    
        </>                                                                                                                                          
    )
  
}
