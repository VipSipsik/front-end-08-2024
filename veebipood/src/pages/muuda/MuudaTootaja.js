import React from 'react'
import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import tootajadFailist from '../../data/tootajad.json';

// Kodus: Nagu Esindus, nagu Hind / haldaesindusi, haldahindu 

function MuudaTootaja() {
  const {index} = useParams();
  const leitud = tootajadFailist[index];
  const eesnimiRef = useRef();
  const telefonRef = useRef();
  const emailRef = useRef();

  const muuda = () => {
    tootajadFailist[index] = {
      "eesnimi": eesnimiRef.current.value,
      "telefon": telefonRef.current.value,
      "email": emailRef.current.value
    }
  }

  if (leitud === undefined) {
    return <div>Töötajat ei leitud</div>
  }

  return (
    <div>
      <label>Töötaja eesnimi:</label> <br />
      <input type="text" ref={eesnimiRef} defaultValue={leitud.eesnimi} /> <br />
      <label>Töötaja telefon:</label> <br />
      <input type="text" ref={telefonRef} defaultValue={leitud.telefon} /> <br />
      <label>Töötaja email:</label> <br />
      <input type="text" ref={emailRef} defaultValue={leitud.email} /> <br />
      
      <Link to="halda-tootajaid">
      <button onClick= {muuda} >Muuda</button> <br />
      </Link>
    </div>
  )
}

export default MuudaTootaja