import { Outlet, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";      // to add bootstrap
import EmployeeList from './pages/EmployeePage/EmployeeList';
import AddEmployee from './pages/EmployeePage/AddEmployee';
import Navigation from './pages/EmployeePage/Navigation';
import Home from './pages/EmployeePage/Home';
import View from './pages/EmployeePage/ViewEmployee';
import Edit from './pages/EmployeePage/EditEmployee';
import UserLogin from './pages/UserPage/UserLogin';
import SignUp from './pages/UserPage/SignUp';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" index element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigation />} >
          <Route path="home" element={<Home />} />
          <Route path="list" element={<EmployeeList />} />
          <Route path="view/:id" element={<View />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );

}

export default App;
