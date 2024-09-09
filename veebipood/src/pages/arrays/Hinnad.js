import React, { useRef, useState } from 'react'
import hinnadFailist from "../../data/hinnad.json";
import { Link } from 'react-router-dom';

function Hinnad() {

  const [hinnad, muudaHinnad] = useState (hinnadFailist.slice());
  const hindRef = useRef();
  // mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole

  const reset = () => {
    muudaHinnad(hinnadFailist.slice());
  }

  const lisaLoppu656 = () => {
    hinnad.push(656);
    muudaHinnad(hinnad.slice());
  }
  
  const lisa = (hind) => {
    hinnad.push(hind);
    muudaHinnad(hinnad.slice());
  }

  const kustuta = (jrknr) => {
    hinnad.splice(jrknr, 1); // mitmendat, mitu tk tahan kustutada
    muudaHinnad(hinnad.slice());
  }

  const lisaVormist = () => {
    hinnad.push(hindRef.current.value); 
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort();
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui100 = () => {
    const vastus = hinnadFailist.filter(hind => hind > 100 );
    muudaHinnad(vastus);
  }

  const filtreeriVäiksemadKui50 = () => {
    const vastus = hinnadFailist.filter(hind => hind < 50 );
    muudaHinnad(vastus);
  }

  const filtreeri1SisaldavadNumbrid = () => {
    const vastus = hinnadFailist.filter(hind => String(hind).includes("1") );
    muudaHinnad(vastus);
  }

  return (
    <div>
      <br /><br />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <button onClick={lisaVormist}>Sisesta</button>
      <br /><br />

      

      <br /><br />
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <button onClick={() => kustuta(4)}>Kustuta viies</button>
      <button onClick={() => kustuta(5)}>Kustuta kuues</button>
    
      <div>Kokku: {hinnad.length} tk</div>
      {hinnad.length > 0 && <button onClick={() => muudaHinnad([])}>Tühjenda</button>}
      {hinnad.length === 0 && <div>Ühtegi hinda pole!</div>}
      
      <button onClick={lisaLoppu656}>Lisa lõppu 656</button>

      <br /><br />

      
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>

      <br /><br />
      
      <button onClick={filtreeriSuuremadKui100}>Filtreeri suuremad kui 100</button>
      <button onClick={filtreeriVäiksemadKui50}>Filtreeri väiksemad kui 50</button>
      <button onClick={filtreeri1SisaldavadNumbrid}>Filtreeri 1 sisaldavad numbrid</button>


      <br /><br />
      {hinnad.map((hind, index)=> 
       <div>
        <button onClick={() => lisa(hind)}>{hind}</button>
        {/* esimene kaldkriips -> ära lisa olemasolevale URLile
        Teine kaldkriios -> URL ja muutuja oleksid eraldatud */}
        <Link to={"/hind/" + index}>
          <button>Vt lähemalt</button>
        </Link>
       </div>
    )}
    </div>
  )
}

export default Hinnad