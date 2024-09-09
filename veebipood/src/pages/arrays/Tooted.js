// BMW, Bentley, Nobe, Nissan, Toyota, Tesla

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
  
import React, {useState} from 'react'
import ostukorvJSON from "../../data/ostukorv.json"
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';

function Tooted() {

  const [tooted, uuendaTooted] = useState(tootedFailist.slice());
  
  const lisaOstukorvi = (uusToode) => {
    ostukorvJSON.push(uusToode);
    // ei pea HTMLi uuendama, sest ostukorvi nimekiri ei pea siin HTMLis 
    // uuenema

    // hot-toast või toastify hüpikaken koos sisuga "Ostukorvi lisatud!"
  }
  
  const reset = () => {
    uuendaTooted(tootedFailist.slice());
  }

  const sorteeriAZ= () => {
    tooted.sort((a,b) => a.localeCompare(b, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA= () => {
    tooted.sort((a,b) => b.localeCompare(a, "et"));
   uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tooted.sort((a,b) => a.length - b.length);
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tooted.sort((a,b) => b.length - a.length);
    uuendaTooted(tooted.slice());
  }

  // const filtreeriAlgavadB = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("B"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriAlgavadN = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("N"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriAlgavadT = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("T"));
  //   uuendaTooted(vastus);
  // }

 const filtreeriAlgav = (taht) => {
  const vastus = tootedFailist.filter(toode => toode.startsWith(taht));
  uuendaTooted(vastus);
 } 

  // Sorteeri
   // 1. A-Z
   // 2. Z-A
   // 3. Tähed kasvavalt
   // 4. kahanevalt
   
// Filtreeri
  // 3 nuppu: Bga algavad, Nga algavad, Tga algavad

  // Reset nupp

  return (
    <div>
      <br />
      <button onClick={reset}>Reset</button>
      <br /><br />

      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <br />
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri kahanevalt</button>
      <br /><br />
      <button onClick={() => filtreeriAlgav("B")}>Filtreeri Bga algavad</button>
      <button onClick={() => filtreeriAlgav("N")}>Nga algavad</button>
      <button onClick={() => filtreeriAlgav("T")}>Tga algavad</button>
     
     {/* kui on sulg () lõpus --> see tähendab, et pean mingile muutuja selle funktsiooni sees
                            andma väärtust
        siis peab olema ka () => alguses*/}

      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      {/* <button onClick={uuenda}>Tühjenda</button> */}
      { tooted.map((toode, index) => 
       <div key={index}>
        {toode}
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        <Link to={"/toode/" + index}>
          <button>Vt lähemalt</button>
        </Link>
        
       </div> )}
    </div>
  )
}

export default Tooted