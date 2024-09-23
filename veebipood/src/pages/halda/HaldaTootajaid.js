import React, {useState, useRef} from 'react'
import tootajadFailist from "../../data/tootajad.json";
import { Link } from 'react-router-dom';

function HaldaTootajaid() {

  const [tootajad, uuendaTootajad] = useState(tootajadFailist.slice());
  const eesnimiRef = useRef();
  const telefonRef = useRef();
  const emailRef = useRef();
  const otsinguRef = useRef();

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

  const otsiTootajatest = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.includes(otsinguRef.current.value));
    uuendaTootajad(vastus);
  }

  return (
    <div>
        <div>Otsing</div>
        <input ref={otsinguRef} onChange={otsiTootajatest} type= "text" />
        <br /><br />

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

      <table classname="halda">
        <thead>
          <tr>
            <th>ID</th>
            <th>Eesnimi</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Tegevused</th>
          </tr>
        </thead>
         <tbody>
    
      {tootajad.map((tootaja, index) => 
          <tr key={index}>
           <td>{index}.</td>
           <td>{tootaja.eesnimi}</td> 
           <td>{tootaja.telefon}</td> 
           <td>{tootaja.email}</td> 
           <td>
            <button onClick={() => kustuta(index)}>x</button> 
            <Link to={"/muuda-tootaja/" + index}>
            <button>Muuda</button>
            </Link>
           </td>
          </tr>)}
         </tbody>
      </table>
      
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