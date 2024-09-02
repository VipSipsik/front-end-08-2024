//kuvage välja tootajad array ["", "", "", "",] eesnimed ja kuvage välja vähemalt 6

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
import React, {useState} from 'react'

function Tootajad() {

   // Sorteeri
  // 1. A-Z
  // 2. Z-A
  // 3. Tähed kasvavalt
  // 4. Tähed kahanevalt
  // 5. Teine täht A-Z
// Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on neljas täht "i"
  // 5. 'M' tähega algavad
  // 6. Huvitav: Paarisarv tähti

  // Reset nupp

  //---------------------

  //faili tõstmine, nii siin, kui ka haldas
  // halda failis pane tähele, et kustutaksid ja lisaksid faili
  //.slice() <--- mälikoha katkestamiseks (koopia tegemiseks), 
  //                et ei muudaks kogemata originaali

  const [tootajad, uuendaTootajad] = useState(["Kaarel", "Maarek", "Kaspar",
                                               "Toomas", "Karl", "Gustav"]);

 // const uuenda = () => {
 //   uuendaTootajad([]);
 // }

  return (
    <div>

      <div> {tootajad.length} töötajat</div>
      {tootajad.length > 0 && <button onClick={() => uuendaTootajad([])}>Tühjenda</button>}
      {tootajad.length === 0 && <div>Ühtegi töötajat pole!</div>}

      {/* <button onClick={uuenda}>Tühjenda</button> */}
      { tootajad.map(nimi => <div>{nimi}</div> )}
    </div>
  )
}

export default Tootajad