import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// suure tähega ja rohelised
// HTMLs tuleb kõik importida
// "SMTH is not defined." kui pole imporditud

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

  const lisaRedbull = () => {
   // muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
   ostukorv.push("Red bull");
   muudaOstukorv(ostukorv.slice());
  }

  const lisaVichy = () => {
   //  muudaOstukorv(["Coca", "Fanta", "Sprite", "Vichy"])
   ostukorv.push("Vichy");
   muudaOstukorv(ostukorv.slice());
  }
    // Seda sulgu täites ütlen, et saan selle sisu muutuja kätte onClick sulgude seest
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);
    muudaOstukorv(ostukorv.slice());
   }
          // kui tuleb sulgude seest tühjus/sõna, siis konventeerib 0-ks ja 0 on jrk esimene - tuleb saata nr
   const kustuta = (index) => {
   ostukorv.splice(index,1);
   muudaOstukorv(ostukorv.slice());
   }

  return (
   <div>
      <div>Kokku: {ostukorv.length} tk</div>

      <button onClick={lisaRedbull}>Lisa lõppu Red bull juurde</button>
      <button onClick={lisaVichy}>Lisa lõppu Vichy juurde</button>

      {ostukorv.length > 0 && <button onClick={() => muudaOstukorv([])}>Tühjenda</button>}
      
    {/* 3x: ["Coca", "Fanta", "Sprite"].map( => )
        1. ["Coca", "Fanta", "Sprite"].map("Coca" => <div>Coca</div> )
        2. ["Coca", "Fanta", "Sprite"].map("Fanta" => <div>Fanta</div> )
        3. ["Coca", "Fanta", "Sprite"].map("Sprite" => <div>Sprite</div> )
        */}

    <div>{ostukorv.map((toode, index) =>
      <div>
        {toode} 
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