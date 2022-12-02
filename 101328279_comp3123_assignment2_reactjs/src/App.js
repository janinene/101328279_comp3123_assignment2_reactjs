import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";      // to add bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      {/* <UserLogin /> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation/>} >
              <Route index element={<Home/>} />
              <Route path="list" element={<EmployeeList/>} />
              <Route path="view/:id" element={<View/>} />
              <Route path="edit/:id" element={<Edit/>} />
              <Route path="add" element={<AddEmployee/>} />
            </Route>
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UserLogin/>} />
          <Route path="signup"element={<SignUp/>} />
            <Route path="/" element={<Navigation/>} >
              <Route index element={<Home/>} />
              <Route path="list"element={<EmployeeList/>} />
              <Route path="add" element={<AddEmployee/>} />
            </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
  
}

export default App;
