import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../../data/tooted.json"
import keskusedFailist from "../../data/keskused.json";

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa juurde üks toode");
    const nimiRef = useRef(); // inputi luger: tema abil saan teada, mida kasutaja kirjutas
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef();
    const keskusRef = useRef();
   
    

  //function sisesta() {
      //nimiRef.current.value; <-- nii siin refi seest väärtusi kätte
      // true ? _ : _ ( ternary operator ..lühendatud ifelse)

   //   if (nimiRef.current.value === "") {
   //     muudaSonum("Tühja nimega toodet ei saa lisada!");
   //     toast.error("Tühja nimega toodet ei saa lisada!");
   //   } else {
   //     muudaSonum("Toode lisatud: " + nimiRef.current.value);
   //     toast.success("Ostukorvi lisatud!");
   //   }
   // }

    const lisa = () => {
      tootedFailist.push(
      {
        "nimi": nimiRef.current.value,
        "hind": hindRef.current.value,
        "pilt": piltRef.current.value,
        "keskus": keskusRef.current.value,
        "aktiivne": aktiivneRef.current.value
      }
    );
      //uuendaTooted(tootedFailist.slice());
      muudaSonum("Edukalt toode lisatud!")
      toast.success("Edukalt toode lisatud!");
  }
    
  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimetus</label> <br />
        <input ref={nimiRef}  type="text" /> <br />
        <label>Toote hind</label> <br />
        <input ref={hindRef}  type="text" /> <br />
        <label>Toote pilt</label> <br />
        <input ref={piltRef}  type="text" /> <br />
        <label>Toote aktiivsus</label> <br />
        <input ref={aktiivneRef}  type="text" /> <br /><br />

        <label>Toote keskus</label> <br />
        <select ref={keskusRef} >
          {keskusedFailist.map(keskus => <option>{keskus.nimi}</option>)}
        </select> <br /><br />
        {/* <label>Toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={sisesta}>Sisesta</button> <br /> */}

        <button onClick={lisa}>Lisa</button> <br />

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
        />
    </div>
  )
}

export default LisaToode