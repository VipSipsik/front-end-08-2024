import React, {useState, useRef} from 'react'

function HaldaTootajaid() {

  const [tootajad, uuendaTootajad] = useState(["Kaarel", "Maarek", 
    "Kaspar", "Toomas", "Karl", "Gustav"]);

    const nimiRef = useRef();

    const kustuta = (index) => {
      tootajad.splice(index,1);
      uuendaTootajad(tootajad.slice());
    }

    const lisa = () => {
      tootajad.push(nimiRef.current.value);
      uuendaTootajad(tootajad.slice());
    }


  return (
    <div>

        <label>Töötajad</label> <br />
        <input ref={nimiRef}  type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br />

      <div> {tootajad.length} töötajat</div>
      {tootajad.length > 0 && <button onClick={() => uuendaTootajad([])}>Tühjenda</button>}
      {tootajad.length === 0 && <div>Ühtegi töötajat pole!</div>}

      {tootajad.map((nimi, index) => 
         <div>
          {nimi} 
            <button onClick={() => kustuta(index)}>x</button> 
         </div>)}
      
    </div>
  )
}

export default HaldaTootajaid

// kuva välja täpselt nagu Tootajad.js vaates v
// võimalda läbi vormi lisada
// võimalda kustutada
// võimalda lõppu juurde lisada
// näita koguarvu
// tühjenda