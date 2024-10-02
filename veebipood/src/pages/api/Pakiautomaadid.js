import React, { useEffect, useState } from 'react'

function Pakiautomaadid() {
    const [pakiautomaadid, setPakiautomaadid] = useState([]);

    //uef -> enter
    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json") // milliselt aadressilt
        .then(res => res.json())      // mis kujul need andmed on (.json )
        .then(body => setPakiautomaadid(body))        // mida me nende andmetega peale hakkame 
    }, []);


  return (
    <select>
        {pakiautomaadid.map(automaat => <option>{automaat.NAME}</option>)}
    </select>
  )
}

export default Pakiautomaadid