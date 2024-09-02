//kuvage välja tootajad array ["", "", "", "",] eesnimed ja kuvage välja vähemalt 6

// mitu tk välja näitatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole
import React, {useState} from 'react'

function Tootajad() {

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