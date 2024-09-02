// BMW, Bentley, Nobe, Nissan, Toyota, Tesla

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
  
import React, {useState} from 'react'

function Tooted() {

  const [tooted, uuendaTooted] = useState(["BMW", "Bentley", "Nobe", "Nissan", "Toyota", "Tesla"]);

  return (
    <div>
      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      {/* <button onClick={uuenda}>Tühjenda</button> */}
      { tooted.map(toode => <div>{toode}</div> )}
    </div>
  )
}

export default Tooted