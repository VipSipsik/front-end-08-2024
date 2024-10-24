// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import NavigationBar from './components/NavigationBar.jsx';
import HomePage from './pages/Homepage.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Cart from './pages/Cart.jsx';
import CustomPC from './pages/CustomPC.jsx';
import PreConfiguredPC from './pages/PreConfiguredPC.jsx';

import ComputerCase from './pages/custom/ComputerCase.jsx';
import GPU from './pages/custom/GPU.jsx';
import PSU from './pages/custom/PSU.jsx';
import CPU from './pages/custom/CPU.jsx';
import Cooler from './pages/custom/Cooler.jsx';
import Motherboard from './pages/custom/Motherboard.jsx';
import RAM from './pages/custom/RAM.jsx';
import SSD from './pages/custom/SSD.jsx';


function App() {
  return (
    //<div className="App min-vh-100 d-flex justify-content-center align-items-center">
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavigationBar />

      <div className="container">
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/custom-pc' element={<CustomPC />} />
          <Route path='/pre-configured-pc' element={<PreConfiguredPC />} />

          <Route path='/computer-case' element={<ComputerCase />} />
          <Route path='/gpu' element={<GPU />} />
          <Route path='/psu' element={<PSU />} />
          <Route path='/cpu' element={<CPU />} />
          <Route path='/cooler' element={<Cooler />} />
          <Route path='/motherboard' element={<Motherboard />} />
          <Route path='/ram' element={<RAM />} />
          <Route path='/ssd' element={<SSD />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
