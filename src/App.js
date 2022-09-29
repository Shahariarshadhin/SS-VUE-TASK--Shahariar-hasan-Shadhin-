import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import ManagementSystem from './Pages/Home/ManagementSystem';
import ManagementBenefit from './Pages/Home/ManagementBenefit';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="">

      <Navbar></Navbar>
      <ManagementSystem></ManagementSystem>
      <ManagementBenefit></ManagementBenefit>
      <Footer></Footer>

    </div>
  );
}

export default App;
