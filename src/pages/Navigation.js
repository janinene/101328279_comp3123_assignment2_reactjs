import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/navigation_pages.css';

export default function Navigation(){
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ul-div" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to='/list'>Employee List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/add'>Add Employee</Link>
                </li>
                
                </ul>
            </div>
        </nav>
  
        <Outlet />
      </>
    )
  };


  
