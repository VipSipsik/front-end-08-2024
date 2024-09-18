import React from 'react'
import { useState, useRef } from 'react';

function HaldaJooke() {

  const [joogid, uuendaJoogid] = useState (["Põltsamaa", "Aura", "Kadarbik", "Saku", "Värska", "Sprite"]);
  const jookRef = useRef();
  
  function kustuta (index) {
    joogid.splice(index,1);
    uuendaJoogid(joogid.slice());
  }

  return (
     <div> Joogid:
         { joogid.map((jook, index) => 
         <div key={index}>
         <span>{jook}</span>
         <button onClick={() => kustuta(index)}>x</button>
         </div> )} 
         <br />
         <label>Lisa uus jook</label>
         <input ref={jookRef} type="text"/>
         <button></button>
    </div>
  )
}

export default HaldaJooke