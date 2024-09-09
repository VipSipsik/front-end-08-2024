import React from 'react'
import { useParams } from 'react-router-dom';
import tootajadFailist from "../../data/tootajad.json";
// KODUS: Nagu Esindus, nagu Hind

function YksTootaja() {

  const {index} = useParams();
  const vastus = tootajadFailist[index];
  
  return (
    <div>
      <div>URLs olev muutuja: {index}</div>
      <h2>Töötaja nimi: {vastus} </h2>
      <hr />
      <p>E-mail:</p>
      <p>Telefon: </p>
    </div>
  )
}

export default YksTootaja