import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import ManagementSystem from './Pages/Home/ManagementSystem';
import ManagementBenefit from './Pages/Home/ManagementBenefit';

function App() {
  return (
    <div className="">

      <Navbar></Navbar>
      <ManagementSystem></ManagementSystem>
      <ManagementBenefit></ManagementBenefit>

    </div>
  );
}

export default App;
