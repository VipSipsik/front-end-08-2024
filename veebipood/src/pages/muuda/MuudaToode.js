import React, {useRef} from 'react'
import { useParams, Link } from 'react-router-dom'
import tootedFailist from '../../data/tooted.json';

function MuudaToode() {
  const {index} = useParams();
  const leitud = tootedFailist[index];
  // Kodus: Nagu Esindus, nagu Hind / haldaesindusi
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
 

  const muuda = () => {
    tootedFailist[index] = {
      "nimi": nimiRef.current.value, 
      "hind": hindRef.current.value, 
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.value
    }
  }

  if (leitud === undefined) {
      // kui on tingimused täidetud, siis siin kohal HTMLi väljakuvamine lõppeb
      return <div>toodet ei leitud</div>
  }


  return (
    <div>
      <label>Toote nimetus:</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
      
      <label>Toote hind:</label> <br />
      <input type="text" ref={hindRef} defaultValue={leitud.hind} /> <br />

      <label>Toote pilt:</label> <br />
      <input type="text" ref={piltRef} defaultValue={leitud.pilt} /> <br />

      <label>Toote aktiivsus:</label> <br />
      <input type="text" ref={aktiivneRef} defaultValue={leitud.aktiivne} /> <br />
      

      <Link to="/halda-tooteid">
      <button onClick= {muuda} >Muuda</button> <br />
      </Link>

    </div>
  )
}

export default MuudaToode