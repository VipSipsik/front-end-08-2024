// BMW, Bentley, Nobe, Nissan, Toyota, Tesla

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
  
import React, {useState} from 'react'
import ostukorvJSON from "../../data/ostukorv.json"
function Tooted() {

  const [tooted, uuendaTooted] = useState(["BMW", "Bentley", "Nobe", "Nissan", "Toyota", "Tesla"]);
  
  const lisaOstukorvi = (uusToode) => {
    ostukorvJSON.push(uusToode);
    // ei pea HTMLi uuendama, sest ostukorvi nimekiri ei pea siin HTMLis 
    // uuenema

    // hot-toast või toastify hüpikaken koos sisuga "Ostukorvi lisatud!"
  }


  // Sorteeri
   // 1. A-Z
   // 2. Z-A
   // 3. Tähed kasvavalt
   // 4. kahanevalt
   
// Filtreeri
  // 3 nuppu: Bga algavad, Nga algavad, Tga algavad

  // Reset nupp

  return (
    <div>
      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      {/* <button onClick={uuenda}>Tühjenda</button> */}
      { tooted.map(toode => 
       <div>
        {toode}
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
       </div> )}
    </div>
  )
}

export default Tooted