import React, {useState} from 'react'

function HaldaTooteid() {

  const [tooted, uuendaTooted] = useState (["Pirn", "Maasikas", "Õun", "Vaarikas", "Ploom", "Kreek","Kurk","Tomat"])


  return (
    <div>
      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      
      { tooted.map(nimi => <div>{nimi}</div> )}
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