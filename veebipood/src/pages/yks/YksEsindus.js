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

  // kui ei leia õiget üles, siis tuleb vastuse koha peale tühjus
  // kui on string(Ülemiste) -> siis näitas tühjana

  // kui on objekt ({"nimi": "Ülemiste"}) -> siis viskab errori
  // errori (veateate) leian üles lehel tehes: parem klõps -> inspect -> console
 
  if (vastus === undefined) {
  // kui on tingimused täidetud, siis siin kohal HTMLi väljakuvamine lõppeb
   return <div>
    <img src="https://hiiumaa.ecoop.ee/assets/img/icon-sad-empty-cart.svg" alt="" />
    </div>
  }
  
  return (
    <div>
      <div>URLs olev muutuja: {index}</div>  
      <h2>Esinduse nimi: {vastus.nimi} </h2>
      <hr />
      <p>Aadress: {vastus.aadress} </p>
      <p>Telefon: {vastus.tel} </p>
    </div>
  )
}

export default YksEsindus