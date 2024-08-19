import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Kontakt from './pages/Kontakt';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht';
import { useRef, useState } from 'react';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
  if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + " Mirjam ,Oled sisselogitud");
  } else {
    muudaSonum("Vale parool");
  }
}

const logiValja = () => {
  muudaSisselogitud("ei");
  muudaSonum("");
}

  return (
    <div className="App">
      <div>{sonum}</div>
    { sisselogitud === ("ei") && <div>
      <label>Kasutajanimi</label> <br />
      <input ref={kasutajaNimiRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
    </div>}


      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja}  >Logi välja</button>}
      <br /><br />


      <div>--SIIN ON VARASEM KODUTÖÖ--</div>

      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>

      <Link to="/meist">
        <button>Meist</button>
      </Link>

      <Link to="/seaded">
        <button>Seadetesse</button>
      </Link>

      <Link to="/leht">
        <button>Leht</button>
      </Link>
    
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="leht" element={ <Leht /> } />
      </Routes>
    </div>
  );
}

export default App;
