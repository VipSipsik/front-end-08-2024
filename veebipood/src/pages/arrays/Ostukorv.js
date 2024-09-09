import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../../data/ostukorv.json"

// suure tähega ja rohelised
// HTMLs tuleb kõik importida
// "SMTH is not defined." kui pole imporditud

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState(ostukorvFailist.slice());

  const lisaRedbull = () => {
   // muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
   ostukorvFailist.push("Red bull");
   muudaOstukorv(ostukorvFailist.slice());
  }

  const lisaVichy = () => {
   //  muudaOstukorv(["Coca", "Fanta", "Sprite", "Vichy"])
   ostukorvFailist.push("Vichy");
   muudaOstukorv(ostukorvFailist.slice());
  }
    // Seda sulgu täites ütlen, et saan selle sisu muutuja kätte onClick sulgude seest
  const lisa = (uusToode) => {
    ostukorvFailist.push(uusToode);
    muudaOstukorv(ostukorvFailist.slice());
   }
          // kui tuleb sulgude seest tühjus/sõna, siis konventeerib 0-ks ja 0 on jrk esimene - tuleb saata nr
   const kustuta = (index) => {
    ostukorvFailist.splice(index,1);
   muudaOstukorv(ostukorvFailist.slice());
   }

   const tyhjenda = () => {
    ostukorvFailist.splice(0); // alates 0-st, lõpuni välja kustutab
    muudaOstukorv(ostukorvFailist.slice());
   }

  return (
   <div>
      <div>Kokku: {ostukorv.length} tk</div>

      <button onClick={lisaRedbull}>Lisa lõppu Red bull juurde</button>
      <button onClick={lisaVichy}>Lisa lõppu Vichy juurde</button>

      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      
    {/* 3x: ["Coca", "Fanta", "Sprite"].map( => )
        1. ["Coca", "Fanta", "Sprite"].map("Coca" => <div>Coca</div> )
        2. ["Coca", "Fanta", "Sprite"].map("Fanta" => <div>Fanta</div> )
        3. ["Coca", "Fanta", "Sprite"].map("Sprite" => <div>Sprite</div> )
        */}

    <div>{ostukorv.map((toode, index) =>
      <div key={index}>
       {index}. {toode} 
        <button onClick={() => lisa(toode)}>Lisa lõppu</button> 
        <button onClick={() => kustuta(index)}>x</button>
      </div>)}
    </div>

      {ostukorv.length === 0 && 
      <div>
        <div>Ostukorv on tühi</div>
        <Link to="/avaleht">Mine avalehele</Link>
      </div>}

      
   </div>
  )
}

export default Ostukorv