//kuvage välja tootajad array ["", "", "", "",] eesnimed ja kuvage välja vähemalt 6

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
import React, {useState, useRef} from 'react'
import tootajadFailist from "../../data/tootajad.json";
import { Link } from 'react-router-dom';

function Tootajad() {
 
  const otsinguRef = useRef();
 

  
   // Sorteeri
  // 1. A-Z
  // 2. Z-A
  // 3. Tähed kasvavalt
  // 4. Tähed kahanevalt
  // 5. Teine täht A-Z
// Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on neljas täht "i"
  // 5. 'M' tähega algavad
  // 6. Huvitav: Paarisarv tähti

  // Reset nupp

  //---------------------

  //faili tõstmine, nii siin, kui ka haldas
  // halda failis pane tähele, et kustutaksid ja lisaksid faili
  //.slice() <--- mälukoha katkestamiseks (koopia tegemiseks), 
  //                et ei muudaks kogemata originaali

  const [tootajad, muudaTootajad] = useState(tootajadFailist.slice());

  const reset = () => {
    muudaTootajad(tootajadFailist.slice());
  }  
  
  const sorteeriAZ= () => {
    tootajad.sort((a,b) => a.eesnimi.localeCompare(b.eesnimi, "et"));
    muudaTootajad(tootajad.slice());
  }

  const sorteeriZA= () => {
    tootajad.sort((a,b) => b.eesnimi.localeCompare(a.eesnimi, "et"));
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tootajad.sort((a,b) => a.eesnimi.length - b.eesnimi.length);
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tootajad.sort((a,b) => b.eesnimi.length - a.eesnimi.length);
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTeineTaht = () => {
    tootajad.sort((a,b) => a.eesnimi[1].localeCompare(b.eesnimi[1], "et"));
    muudaTootajad(tootajad.slice());
  }


  const filtreeriTahemarkeTapselt3 = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.length === 3);
    muudaTootajad(vastus);
  }

  const filtreeriTahemarkeRohkemKui5 = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.length >=5);
    muudaTootajad(vastus);
  }

  const filtreeriKesSisalabAiLyhendit = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.includes("ai"));
    muudaTootajad(vastus);
  }

  const filtreeriKellelNeljasTahtI = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi[5] === "i" || tootaja.eesnimi[5] === "I");
    muudaTootajad(vastus);
  }

  const filtreeriKellelEsimeneTahtM = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.startsWith("M") || tootaja.eesnimi.startsWith("m"));
    muudaTootajad(vastus);
  }

  const filtreeriKellelPaarisarvTahti = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.length % 2 === 0);
    muudaTootajad(vastus);
  }
  
  const arvutaTootajateEesnimeTahedKokku = () => {
    let summa = 0;
    tootajad.forEach(tootaja => summa = summa + tootaja.eesnimi.length);
    return summa;
   }

 

 // const uuenda = () => {
 //   uuendaTootajad([]);
 // }
  const otsiTootajatest  = () => {
  const vastus = tootajadFailist.filter(tootajad => 
      String(tootajad.eesnimi).includes(otsinguRef.current.value));
      muudaTootajad(vastus);
  }

  return (
    <div>
        <div>Otsing</div>
        {/* <input type="text" ref={otsinguRef} onChange={otsiTootajatest} /> */}
        <input ref={otsinguRef} onChange={otsiTootajatest} type= "text" />
        <br /><br />
        

       <br />
       <button onClick={reset}>Reset</button>
       <br />
       <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
       <button onClick={sorteeriZA}>Sorteeri Z-A</button>
       <br />
       <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
       <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
       <br />
       <button onClick={sorteeriTeineTaht}>Sorteeri teine täht</button>
       <br /><br />

       <button onClick={filtreeriTahemarkeTapselt3}>Filtreeri 3-tähelised</button>
       <button onClick={filtreeriTahemarkeRohkemKui5}>Filtreeri 5-tähelised ja suuremad</button>
       <br />
       <button onClick={filtreeriKesSisalabAiLyhendit}>Filtreeri kes sisaldab "ai" lühendit</button>
       <button onClick={filtreeriKellelNeljasTahtI}>Filtreeri kellel on neljas täht "i" </button>
       <button onClick={filtreeriKellelEsimeneTahtM}>Filtreeri kes algab M-tähega</button>
       <br />
       <button onClick={filtreeriKellelPaarisarvTahti}>Filteeri paarisarv tähti</button>
       <br />
      
      <div> {tootajad.length} töötajat</div>
      {tootajad.length > 0 && <button onClick={() => muudaTootajad([])}>Tühjenda</button>}
      {tootajad.length === 0 && <div>Ühtegi töötajat pole!</div>}

      {/* <button onClick={uuenda}>Tühjenda</button> */}
      
      
      {tootajad.map((tootaja, index) => 
        <div key={tootaja.eesnimi}>
         {tootaja.eesnimi} - {tootaja.telefon} - {tootaja.email}
         <Link to={"/tootaja/" + index}>
          <button>Vt lähemalt</button>
         </Link>
        </div> )}

        <div>{arvutaTootajateEesnimeTahedKokku()} tk</div>
       
    </div>
  )
}

export default Tootajad