//kuvage välja tootajad array ["", "", "", "",] eesnimed ja kuvage välja vähemalt 6

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
import React, {useState} from 'react'
import tootajadFailist from "../../data/tootajad.json";
import { Link } from 'react-router-dom';

function Tootajad() {

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
    tootajad.sort((a,b) => a.localeCompare(b, "et"));
    muudaTootajad(tootajad.slice());
  }

  const sorteeriZA= () => {
    tootajad.sort((a,b) => b.localeCompare(a, "et"));
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tootajad.sort((a,b) => a.length - b.length);
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tootajad.sort((a,b) => b.length - a.length);
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTeineTaht = () => {
    tootajad.sort((a,b) => a[1].localeCompare(b[1], "et"));
    muudaTootajad(tootajad.slice());
  }


  const filtreeriTahemarkeTapselt3 = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.length === 3);
    muudaTootajad(vastus);
  }

  const filtreeriTahemarkeRohkemKui5 = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.length >=5);
    muudaTootajad(vastus);
  }

  const filtreeriKesSisalabAiLyhendit = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.includes("ai"));
    muudaTootajad(vastus);
  }

  const filtreeriKellelNeljasTahtI = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja[5] === "i" || tootaja[5] === "I");
    muudaTootajad(vastus);
  }

  const filtreeriKellelEsimeneTahtM = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.startsWith("M") || tootaja.startsWith("m"));
    muudaTootajad(vastus);
  }

  const filtreeriKellelPaarisarvTahti = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.length % 2 === 0);
    muudaTootajad(vastus);
  }


 // const uuenda = () => {
 //   uuendaTootajad([]);
 // }

  return (
    <div>

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
      
      {tootajad.map((nimi, index) => 
        <div key={index}>
         {nimi}
         <Link to={"/tootaja/" + index}>
          <button>Vt lähemalt</button>
         </Link>
        </div> )}
    </div>
  )
}

export default Tootajad