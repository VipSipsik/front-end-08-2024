// import logo from './logo.svg'; - välja kommenteerimine ctr Ä-väljakommenteerimine sisse/välja 
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

// kui on võimalus importida mitu asja, siis on {}
// kui on võimalus importida ainult ühte asja, siis on ilma {}

function App() {
  return (
    <div className="App">
      {/* HTMLis välja kommenteerimine ctrl + ä */}


      <Link to="avaleht">
      <img className="pilt" src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="" />
      </Link>

      <Link to="kinkekaart">
        <button className="nupp">Osta kinkekaart</button>
      </Link>

      <Link to="esindused">
        <button className="nupp">Vaata ,meie esindusi</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa uus toode</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>



{/* localhost:3000/avaleht ---> siis näidatakse teksti "Olen avalehel" */}

      <Routes>
        <Route path='avaleht' element={ <div>Olen avalehel</div> } />
        <Route path='kinkekaart' element={ <div>Olen kinkekaart</div> } />
        <Route path='esindused' element={ <div>Olen esindused</div> } />
        <Route path='lisa-toode' element={ <div>Olen lisa-toode</div> } />
        <Route path='ostukorv' element={ <div>Olen ostukorv</div> } />
      </Routes>

      FOOTER


    </div>
  );
}

export default App;
