// BMW, Bentley, Nobe, Nissan, Toyota, Tesla

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
  
import React, {useState, useRef} from 'react'
import ostukorvJSON from "../../data/ostukorv.json"
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';

function Tooted() {

  const [tooted, uuendaTooted] = useState(tootedFailist.slice());
  const toodeRef = useRef();
  const otsinguRef = useRef();

  const lisaOstukorvi = (uusToode) => {
    ostukorvJSON.push(uusToode);
    // ei pea HTMLi uuendama, sest ostukorvi nimekiri ei pea siin HTMLis 
    // uuenema

    // hot-toast või toastify hüpikaken koos sisuga "Ostukorvi lisatud!"
  }
  
  const reset = () => {
    uuendaTooted(tootedFailist.slice());
  }

  const lisaVormist = () => {
    tootedFailist.push({"nimi": toodeRef.current.value, "lisaja": "Vorm"}); 
    uuendaTooted(tootedFailist.slice());
  }

  const sorteeriAZ= () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA= () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
   uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tooted.sort((a,b) => a.nimi.length - b.nimi.length);
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tooted.sort((a,b) => b.nimi.length - a.nimi.length);
    uuendaTooted(tooted.slice());
  }

  // const filtreeriAlgavadB = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriAlgavadN = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriAlgavadT = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
  //   uuendaTooted(vastus);
  // }

 const filtreeriAlgav = (taht) => {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith(taht));
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

  const arvutaHinnadKokku = () => {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
   }

   const arvutaToodeteNimetusteTahedKokku = () => {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.nimi.length);
    return summa;
   }

   const otsiToodetest  = () => {
   const vastus = tootedFailist.filter(tooted => 
        String(tooted.nimi).includes(otsinguRef.current.value));
        uuendaTooted(vastus);
    }

  return (
    <div>
      <div>Otsing</div>
      <input ref={otsinguRef} onChange={otsiToodetest} type= "text" />
      <br /><br />

      <br />
      <button onClick={reset}>Reset</button>
      <br /><br />

      <label>Toode</label> <br />
      <input ref={toodeRef} type="text" /> <br />
      <button onClick={lisaVormist}>Sisesta</button>
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
      {tooted.map((toode, index) => 
       <div key={toode.nimi}>
        {toode.nimi} - {toode.hind} - {toode.pilt} - {toode.aktiivne}
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        <Link to={"/toode/" + index}>
          <button>Vt lähemalt</button>
        </Link>
        
       </div> )}

       <h3>{arvutaHinnadKokku()} €</h3>
       <div>{arvutaToodeteNimetusteTahedKokku()} tk</div>

    </div>
  )
}

export default Tooted