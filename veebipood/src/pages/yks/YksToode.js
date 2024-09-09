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
  
  
  return (
    <div>
      <div>Järjekorranumber, mis on URLis: {tooteIndex} </div>
      <div>Toode, millele klikiti: {leitud} </div>
      <div>Toote omadused...</div>
      <div>Toote lisaja süsteemist: {} </div>
    </div>
  )
}

export default YksToode