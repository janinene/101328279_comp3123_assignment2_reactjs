import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";      // to add bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import Navigation from './pages/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>} >
            <Route index element={<Home/>} />
            <Route path="list"element={<EmployeeList/>} />
            <Route path="add" element={<AddEmployee/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;
