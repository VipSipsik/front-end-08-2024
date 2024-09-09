import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedFailist from '../../data/keskused.json';

function YksEsindus() {
  // mis pandi kooloni sisse URLis?
  const {index} = useParams(); 
  
  // esindused faili seest pean järjekorranumbriga võtma õige esinduse
  const vastus = esindusedFailist[index];
  
  // jrknumbriga leidmisega seotud näited:
  // a[1].localeCompare(b[1])
  // keskus[2] === "i"
  return (
    <div>
      <div>URLs olev muutuja: {index}</div>  
      <h2>Esinduse nimi: {vastus} </h2>
      <hr />
      <p>E-mail:</p>
      <p>Telefon:</p>
    </div>
  )
}

export default YksEsindus