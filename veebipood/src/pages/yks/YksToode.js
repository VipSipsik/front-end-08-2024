import React from 'react'
import { useParams } from 'react-router-dom';
import tootedFailist from "../../data/tooted.json";

// KODUS: Nagu Esindus, nagu Hind
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