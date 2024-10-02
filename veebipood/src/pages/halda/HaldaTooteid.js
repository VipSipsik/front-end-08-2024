import React, {useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';
//import { ToastContainer, toast } from 'react-toastify';

function HaldaTooteid() {

  const [tooted, uuendaTooted] = useState (tootedFailist.slice());
//  const toodeRef = useRef();
   const otsinguRef = useRef();


  const kustuta = (index) => {
      tootedFailist.splice(index,1);
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
         <td><b>{toode.keskus}</b></td>
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