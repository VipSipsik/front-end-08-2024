import React from 'react'
import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import esindusedFailist from '../../data/keskused.json'

function MuudaEsindus() {
    /* App.js:muuda-esindus/:jrknr */
  const {jrknr} = useParams();
  const vastus = esindusedFailist[jrknr];
  const nimiRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  
  
  const muuda = () => {
    esindusedFailist[jrknr] = {
      "nimi": nimiRef.current.value , 
      "tel": telefonRef.current.value , 
      "aadress": aadressRef.current.value
    }
  }

  if (vastus === undefined) {
      // kui on tingimused täidetud, siis siin kohal HTMLi väljakuvamine lõppeb
      return <div>Esindust ei leitud</div>
  }

  return (
    <div>
        <label>Esinduse nimi:</label> <br />
        <input type="text" ref={nimiRef} defaultValue={vastus.nimi} /> <br />       

        <label>Esinduse telefon:</label> <br />
        <input type="text" ref={telefonRef} defaultValue={vastus.tel} /> <br />
        
        <label>Esinduse aadress:</label> <br />
        <input type="text" ref={aadressRef} defaultValue={vastus.aadress} /> <br />
        <Link to="/halda-esindusi">
        <button onClick= {muuda} >Muuda</button> <br />
        </Link>
    </div>
  )
}

export default MuudaEsindus