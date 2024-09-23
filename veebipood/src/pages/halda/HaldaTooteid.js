import React, {useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';
//import { ToastContainer, toast } from 'react-toastify';

function HaldaTooteid() {

  const [tooted, uuendaTooted] = useState (tootedFailist.slice());
//  const toodeRef = useRef();
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const otsinguRef = useRef();

  const kustuta = (index) => {
      tootedFailist.splice(index,1);
      uuendaTooted(tootedFailist.slice());
  }
 
  const lisa = () => {
      tootedFailist.push(
      {
        "nimi": nimiRef.current.value,
        "hind": hindRef.current.value,
        "pilt": piltRef.current.value,
        "aktiivne": aktiivneRef.current.value
      }
    );
      uuendaTooted(tootedFailist.slice());
  }

  const otsiToodetest = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.includes(otsinguRef.current.value));
    uuendaTooted(vastus);
  }

  return (
    <div>
      <div>Otsing</div>
      <input ref={otsinguRef} onChange={otsiToodetest} type= "text" />
        <br /><br />
      <label>Toote nimetus</label> <br />
      <input ref={nimiRef}  type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef}  type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef}  type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef}  type="text" /> <br />
      
      <button onClick={lisa}>Lisa</button> <br />

      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      <table className="halda">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Hind</th>
            <th>Pilt</th>
            <th>Tegevused</th>
          </tr>
        </thead>
        <tbody>

      {tooted.map((toode, index) => 
        <tr key={index}>
         <td>{index}.</td>
         <td>{toode.nimi}</td>
         <td>{toode.hind}</td>
         <td><img className='toote-pilt' src={`/images/${toode.pilt}`} alt=""/> 
         </td>
         <td>
          <button onClick={() => kustuta(index)}>x</button>       
          <Link to={"/muuda-toode/" + index}>
            <button>Muuda</button> 
          </Link>
         </td>
        </tr>)}
          
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooteid


// kuva välja täpselt nagu Tootajad.js vaates v
// võimalda läbi vormi lisada
// võimalda kustutada
// võimalda lõppu juurde lisada
// näita koguarvu
// tühjenda