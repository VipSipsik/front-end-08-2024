import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Kontakt from './pages/Kontakt';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Months from './pages/months';
import Animals from './pages/Animals';
import Words from './pages/words';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();
  const logiSisse = () => {
 // if (paroolRef.current.value === "123"){
 //   muudaSisselogitud("jah");
 //   muudaSonum(kasutajaNimiRef.current.value + " Mirjam ,Oled sisselogitud!");
 //   toast.success("Sõnum");
 //   return;
 // }
 // toast.error("Sõnum");
 // muudaSonum("Vale parool");
  const parool = paroolRef.current.value;
 
  if (parool.length < 8) {
    toast.error("Parool peab olema vähemalt 8 tähepärki");
    return;
  }

  if (parool === parool.toLowerCase()) {
    toast.error("Paroolis peab olema vähemalt üks SUUR tähemärk");
    return;
  }

  if (parool.includes("%") !== true){ // Alternatiiv condition !parool.includes("%")
    toast.error("Parool peab sisaldama %");
    return;
  }

  toast.success("Sisselogitud");
  return;
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

      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
        />


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

      <Link to="/loader">
        <button>Loader</button>
      </Link>

      <Link to="/months">
        <button>Months</button>
      </Link>

      <Link to="/animals">
        <button>Animals</button>
      </Link>

      <Link to="/words">
        <button>Words</button>
      </Link>

      <Link to="/books">
        <button>Books</button>
      </Link>

      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link>
    
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="leht" element={ <Leht /> } />
        <Route path="loader" element={ <Loader /> } />
        <Route path="months" element={ <Months /> } />
        <Route path="animals" element={ <Animals /> } />
        <Route path="words" element={ <Words /> } />
        <Route path="books" element={ <Books /> } />
        <Route path="numbrid" element={ <Numbrid /> } />
      </Routes>
    </div>
  );
}

export default App;
