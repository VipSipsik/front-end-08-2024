import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Avaleht from '../src/pages/Avaleht';
import HaldaJooke from '../src/pages/HaldaJooke';
import LisaJook from '../src/pages/LisaJook';

function App() {
  
  return (
    <div className="App">
      
     
     <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/halda-jooke">
        <button>Halda jooke</button>
      </Link>

      <Link to="/lisa-jook">
        <button>Lisa jook</button>
      </Link>

      <Routes>
       <Route path="/" element={ <Avaleht /> } />
       <Route path="halda-jooke" element={ <HaldaJooke /> } />
       <Route path="lisa-jook" element={ <LisaJook /> } />
      </Routes>
    
    </div>
  );
}

export default App;
