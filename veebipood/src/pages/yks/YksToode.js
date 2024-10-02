import React from 'react'
import { useParams } from 'react-router-dom';
import tootedFailist from "../../data/tooted.json";

// KODUS: Nagu Esindus, nagu Hind

// {"BMW" ..........}
// [
// {"nimi": "BMW", "hind": 35000, "pilt": "URL.jpg", "aktiivne": true}
// {"nimi": "Bentley", "hind": 85000, "pilt": "URL.jpg", "aktiivne": true}
// ]

// Tooted.js -> panna võti juurde, et ei kuvaks errorit.
// HaldaTooted.js -> tootaja.VÕTI
// YksToode.js -> leitud.VÕTI  /   vastus.VÕTI
// MuudaToode.js

// Early return, , kui URLs on vale params

// Lisamised lisavad objektina

function YksToode() {
  const {tooteIndex} = useParams();
  const leitud = tootedFailist[tooteIndex];
  
  if (leitud === undefined) {
    // kui on tingimused täidetud, siis siin kohal HTMLi väljakuvamine lõppeb
     return <div>
      <img src="https://hiiumaa.ecoop.ee/assets/img/icon-sad-empty-cart.svg" alt="" />
      </div>
    }

  return (
    <div>
      <div>Index in URL: {tooteIndex} </div>
      <div>Product selected: {leitud.nimi} </div>
      <div>Toote hind: {leitud.hind} </div>
      <div>Toote pilt: <img className='toote-pilt' src={`/images/${leitud.pilt}`} alt=""/> </div>   
      <div>Toode aktiivne: {leitud.aktiivne} </div>
      <div>Toote lisaja süsteemist: {} </div>
    </div>
  )
}

export default YksToode