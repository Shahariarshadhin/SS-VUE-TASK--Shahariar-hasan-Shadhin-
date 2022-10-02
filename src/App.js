
import './App.css';
import Navbar from './Pages/Navbar/Navbar';


import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import staffInfo from './Pages/Home/Dashboard/staffInfo';
import Employee from './Pages/Home/Dashboard/Employee';
import AddMember from './Pages/Home/Dashboard/AddMember';
import Update from './Pages/Home/Dashboard/Update';


function App() {
  return (
    <div className="">

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>
        <Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            {/* <Route index element={<staffInfo></staffInfo>}></Route> */}
            <Route index element={<Employee></Employee>}></Route>
            <Route path="/dashboard/addStaff" element={<AddMember></AddMember>}></Route>
          </Route>
        </Route>
      </Routes>



    </div>
  );
}

export default App;
