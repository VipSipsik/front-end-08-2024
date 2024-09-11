import React, {useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';

function HaldaTooteid() {

  const [tooted, uuendaTooted] = useState (tootedFailist.slice());
//  const toodeRef = useRef();
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

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


  return (
    <div>
      <label>Toote nimetus</label> <br />
      <input ref={nimiRef}  type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef}  type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef}  type="text" /> <br />
      <label>Toote olemasolu</label> <br />
      <input ref={aktiivneRef}  type="text" /> <br />
      
      <button onClick={lisa}>Lisa</button> <br />

      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      
      {tooted.map((toode, index) => 
        <div key={index}>
         {index}. {toode.nimi} - {toode.hind} - {toode.pilt} - {toode.aktiivne}
          <button onClick={() => kustuta(index)}>x</button>       
          <Link to={"/muuda-toode/" + index}>
            <button>Muuda</button> 
          </Link>
        </div>)}
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