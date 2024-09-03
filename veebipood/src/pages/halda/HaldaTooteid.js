import React, {useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"

function HaldaTooteid() {

  const [tooted, uuendaTooted] = useState (tootedFailist.slice());
  const toodeRef = useRef();

  const kustuta = (index) => {
      tootedFailist.splice(index,1);
      uuendaTooted(tootedFailist.slice());
     }
 
  const lisa = () => {
      tootedFailist.push(toodeRef.current.value);
      uuendaTooted(tootedFailist.slice());
     }


  return (
    <div>
      <label>Tooted</label> <br />
      <input ref={toodeRef}  type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      
      {tooted.map((nimi, index) => 
        <div>
          {nimi} 
          <button onClick={() => kustuta(index)}>x</button> 
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