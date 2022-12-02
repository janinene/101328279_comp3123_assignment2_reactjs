import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";      // to add bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>  
      {/* <UserLogin /> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation/>} >
              <Route index element={<Home/>} />
              <Route path="list"element={<EmployeeList/>} />
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
