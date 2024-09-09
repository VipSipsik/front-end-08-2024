// import logo from './logo.svg'; - välja kommenteerimine ctr Ä-väljakommenteerimine sisse/välja 
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Avaleht from './pages/usestate/Avaleht';
import Kinkekaart from './pages/useref/Kinkekaart';
import Esindused from './pages/arrays/Esindused';
import LisaToode from './pages/useref/LisaToode';
import Ostukorv from './pages/arrays/Ostukorv';
import NotFound from './pages/usestate/NotFound';
import Menyy from './components/Menyy';
import Seaded from './pages/usestate/Seaded';
import Profiil from './pages/useref/Profiil';
import LogiSisse from './pages/useref/LogiSisse';
import Registreeru from './pages/useref/Registreeru';
import Hinnad from './pages/arrays/Hinnad';
import Tooted from './pages/arrays/Tooted';
import Tootajad from './pages/arrays/Tootajad';

import HaldaEsindusi from './pages/halda/HaldaEsindusi';
import HaldaHindu from './pages/halda/HaldaHindu';
import HaldaTootajaid from './pages/halda/HaldaTootajaid';
import HaldaTooteid from './pages/halda/HaldaTooteid';

import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksKasutaja from './pages/yks/YksKasutaja';
import YksToode from './pages/yks/YksToode';
import YksTootaja from './pages/yks/YksTootaja';

import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaTootaja from './pages/muuda/MuudaTootaja';


// kui on võimalus importida mitu asja, siis on {}
// kui on võimalus importida ainult ühte asja, siis on ilma {}

function App() {
  return (
    <div className="App">
      {/* HTMLis välja kommenteerimine ctrl + ä */}

    <Menyy />

{/* localhost:3000/avaleht ---> siis näidatakse teksti "Olen avalehel" */}

      <Routes>
        <Route path='' element={ <Navigate to="avaleht" /> } />  
        <Route path='avaleht' element={ <Avaleht /> } />
        <Route path='kinkekaart' element={ <Kinkekaart /> } />
        <Route path='esindused' element={ <Esindused /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='seaded' element={ <Seaded /> } />
        <Route path='profiil' element={ <Profiil /> } />
        <Route path='logi-sisse' element={ <LogiSisse /> } />
        <Route path='registreeru' element={ <Registreeru /> } />
        <Route path='hinnad' element={ <Hinnad /> } />
        <Route path='tooted' element={ <Tooted /> } />
        <Route path='tootajad' element={ <Tootajad /> } />
        <Route path='*' element={ <NotFound /> } />

        <Route path='halda-esindusi' element={ <HaldaEsindusi/> } />
        <Route path='halda-hindu' element={ <HaldaHindu /> } />
        <Route path='halda-tootajaid' element={ <HaldaTootajaid /> } />
        <Route path='halda-tooteid' element={ <HaldaTooteid /> } />

        <Route path='esindus/:index' element={ <YksEsindus /> } />
        <Route path='hind/:hinnaIndex' element={ <YksHind/> } />
        <Route path='kasutaja/' element={ <YksKasutaja/> } />
        <Route path='toode/:tooteIndex' element={ <YksToode/> } />
        <Route path='tootaja/:index' element={ <YksTootaja/> } />

        <Route path='muuda-esindus/:jrknr' element={ <MuudaEsindus /> } />
        <Route path='muuda-hind/:index' element={ <MuudaHind/> } />
        <Route path='muuda-toode/:index' element={ <MuudaToode/> } />
        <Route path='muuda-tootaja/:index' element={ <MuudaTootaja/> } />

        
      </Routes>

      {/* FOOTER */}

    </div>
  );
}

export default App;
