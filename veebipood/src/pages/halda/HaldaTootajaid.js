import React, {useState, useRef} from 'react'
import tootajadFailist from "../../data/tootajad.json";
import { Link } from 'react-router-dom';

function HaldaTootajaid() {

  const [tootajad, uuendaTootajad] = useState(tootajadFailist.slice());
  const eesnimiRef = useRef();
  const telefonRef = useRef();
  const emailRef = useRef();

  const kustuta = (index) => {
    tootajadFailist.splice(index,1);
    uuendaTootajad(tootajadFailist.slice());
  }

  const lisa = () => {
   tootajadFailist.push(
    {
     "eesnimi": eesnimiRef.current.value,
     "telefon": telefonRef.current.value,
     "email": emailRef.current.value
    }
   );
    uuendaTootajad(tootajadFailist.slice());
  }


  return (
    <div>

        <label>Töötaja eesnimi</label> <br />
        <input ref={eesnimiRef}  type="text" /> <br />
        <label>Töötaja telefoninumber</label> <br />
        <input ref={telefonRef}  type="text" /> <br />
        <label>Töötaja email</label> <br />
        <input ref={emailRef}  type="text" /> <br />
        
        <button onClick={lisa}>Lisa</button> <br />

      <div> {tootajad.length} töötajat</div>
      {tootajad.length > 0 && <button onClick={() => uuendaTootajad([])}>Tühjenda</button>}
      {tootajad.length === 0 && <div>Ühtegi töötajat pole!</div>}

      {tootajad.map((tootaja, index) => 
         <div key={index}>
         {index}. {tootaja.eesnimi} - {tootaja.telefon} - {tootaja.email}
            <button onClick={() => kustuta(index)}>x</button> 
            <Link to={"/muuda-tootaja/" + index}>
            <button>Muuda</button>
            </Link>
         </div>)}
      
    </div>
  )
}

export default HaldaTootajaid

// kuva välja täpselt nagu Tootajad.js vaates v
// võimalda läbi vormi lisada
// võimalda kustutada
// võimalda lõppu juurde lisada
// näita koguarvu
// tühjenda