import React, {useState, useRef} from 'react'

function HaldaTooteid() {

  const [tooted, uuendaTooted] = useState (["BMW", "Bentley", "Nobe", "Nissan", "Toyota", "Tesla"])
  const toodeRef = useRef();

  const kustuta = (index) => {
      tooted.splice(index,1);
      uuendaTooted(tooted.slice());
     }
 
  const lisa = () => {
      tooted.push(toodeRef.current.value);
      uuendaTooted(tooted.slice());
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