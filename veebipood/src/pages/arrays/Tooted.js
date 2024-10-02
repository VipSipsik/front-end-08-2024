// BMW, Bentley, Nobe, Nissan, Toyota, Tesla

// mitu tk välja näitatakse
// tühjendamine
// kui on tühi, siis anna sõnumiga teada, et ühtegi pole

import React, { useState, useRef } from 'react'
// import ostukorvJSON from "../../data/ostukorv.json"
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';

function Tooted() {

  const [tooted, uuendaTooted] = useState(tootedFailist.slice());
  const toodeRef = useRef();
  const otsinguRef = useRef();

  const lisaOstukorvi = (uusToode) => {
    //ostukorvJSON.push(uusToode);
    const ostukorvLocalS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorvLocalS.push(uusToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLocalS));

    // localStorage-sse Array panemiseks:
    // 1. võtma vanad väärtused localStoragest ( localStorage.getItem )
    // 1.b kui vanasid väärtusi pole, siis võta tühi array ( || [] )
    // 2. võtma jutumärgid võetud väärtusel maha ( JSON.parse() )
    // 3. lisama ühe toote array'sse juurde ( .push() )
    // 4. panema jutumärgid array ümber tagasi ( JSON.stringify() )
    // 5. panema localStorage-sse tagasi ( localStorage.setItem() )

    // ei pea HTMLi uuendama, sest ostukorvi nimekiri ei pea siin HTMLis 
    // uuenema

    // hot-toast või toastify hüpikaken koos sisuga "Ostukorvi lisatud!"
  }

  const reset = () => {
    uuendaTooted(tootedFailist.slice());
  }

  const lisaVormist = () => {
    tootedFailist.push({ "nimi": toodeRef.current.value, "lisaja": "Vorm" });
    uuendaTooted(tootedFailist.slice());
  }

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKasvavalt = () => {
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
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

  const otsiToodetest = () => {
    const vastus = tootedFailist.filter(tooted =>
      String(tooted.nimi).includes(otsinguRef.current.value));
    uuendaTooted(vastus);
  }

  // .sort --> jätab alles sama koguse, aga teises järjekorras, muutmist ei toimu
  // .filter --> jätab alles vähendatud koguse, samas järjekorras, muutmist ei toimu
  // .map --> jätab alles sama kogus, samas järjekorras, aga igaüks muudetud

  //  const muudaKoigiNimiSuureksPikk = () =>{
  //   const vastus = tootedFailist.map(toode => ({
  //     nimi: toode.nimi.toUpperCase(),
  //     hind: toode.hind,
  //     pilt: toode.pilt,
  //     aktiivne: toode.aktiivne
  //   }));
  // uuendaTooted(vastus);
  //  }

  const muudaKoigiNimiSuureks = () => {
    const vastus = tootedFailist.map(toode => ({
      ...toode,
      nimi: toode.nimi.toUpperCase(),
    }));
    uuendaTooted(vastus);
  }

  //uuendaTooted([...tooted]); // koopia tegemiseks nagu .slice()
  //kui koopiat ei tee, siis toimub muteerumine (originaali kallale minek) 
  //      ehk muutus ilma et tuleksid uued väärtused
  //      kood näeb seda kui lihtsat muudatust ja vaatab, 
  //      et selle pärast pole vaja HTMLi muutma minna

  // muteerivad (muudavad originaali):
  // .push()
  // .splice()
  // .sort()

  // ei muuda originaalset --> tema ette peab panema uue muutuja
  // .filter()
  // .map()
  // const vastus =


  return (
    <div>
      <div>Otsing</div>
      <input ref={otsinguRef} onChange={otsiToodetest} type="text" />
      <br /><br />

      {/* <button onClick={muudaKoigiNimiSuureksPikk}>Muuda kõigi nimi suurteks tähtedeks</button> */}
      <button onClick={muudaKoigiNimiSuureks}>Muuda kõigi nimi suurteks tähtedeks</button>
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
          <img className={toode.aktiivne ? 'toote-pilt' : "pilt-mitteaktiivne"} src={`/images/${toode.pilt}`} alt="" />
          {toode.nimi} - {toode.hind} - {toode.aktiivne}
          {toode.aktiivne === true && <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>}
          <Link to={"/toode/" + index}>
            <button>Vt lähemalt</button>
          </Link>

        </div>)}

      <h3>{arvutaHinnadKokku()} €</h3>
      <div>{arvutaToodeteNimetusteTahedKokku()} tk</div>

    </div>
  )
}

export default Tooted