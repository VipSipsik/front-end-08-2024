import React from 'react'
import { useParams } from 'react-router-dom';
import tootajadFailist from "../../data/tootajad.json";
// KODUS: Nagu Esindus, nagu Hind

// {"eesnimi":"", "telefon":"", "email":""}
// võtmes mitte kasutada: tühik, punkt, sidekriips, kõiksugused märgid
// AINULT tähti, numbreid, alumist kriipsu. OMNIVA nt: A0_NAME

// Tootajad.js -> panna võti juurde, et ei kuvaks errorit 
// Haldatootajad.js -> tootaja.VÕTI
// Ykstootaja.js -> (leitud.VÕTI / vastus.VÕTI)
// Muudatootaja.js

//Objects are not valid as a React child (found: object with keys {eesnimi, telefon, email})
// vahepeal tuleb valge leht. Parem klõps -> inspect -> console ja seesama veateade võib olla seal

// Early return, , kui URLs on vale params

// Lisamised lisavad objektina

function YksTootaja() {

  const {index} = useParams();
  const vastus = tootajadFailist[index];
  
  if (vastus === undefined) {
    return <div>
      <img src="https://hiiumaa.ecoop.ee/assets/img/icon-sad-empty-cart.svg" alt=""/>
    </div>
  }

  return (
    <div>
      <div>URLs olev muutuja: {index}</div>
      <h2>Töötaja nimi: {vastus.eesnimi} </h2>
      <hr />
      <p>Telefon: {vastus.telefon} </p>
      <p>E-mail: {vastus.email} </p>
      
    </div>
  )
}

export default YksTootaja