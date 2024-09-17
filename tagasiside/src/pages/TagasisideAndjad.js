import React, { useState } from 'react'
import { useRef } from 'react'
import AndjateFail from "../nimed.json";

function TagasisideAndjad() {

    const [andjad, uuendaAndjad] = useState(AndjateFail);
    
    
    const kustuta = (index) => {
        andjad.splice(index, 1)
        uuendaAndjad(andjad.slice());
    } 

    const andjaRef = useRef();

    const lisa = () => {
        andjad.push(andjaRef.current.value);
        uuendaAndjad(andjad.slice());
    }

    const insertEST = () => {
        const vastus = andjad.map(nimi => "EST-" + nimi);
        uuendaAndjad(vastus)
    }

    const filtreeriM = () => {
        const vastus = andjad.filter(nimi => nimi.startsWith("M"));
        uuendaAndjad(vastus);
    }

    const filtreeri6Tahte = () => {
        const vastus = andjad.filter(nimi => nimi.length === 6);
        uuendaAndjad(vastus)
    }

    const FiltreeriYLopus = () => {
        const vastus = andjad.filter(nimi => nimi.endsWith("y"));
        uuendaAndjad(vastus);
    }

    const sortZA = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }
    
    

  return (
    <div>
        <div>Tagasisideandjad: {andjad.length} tk</div><br />
        <button onClick={filtreeriM}>Filtreeri M-tähega algavad nimed</button>
        <button onClick={filtreeri6Tahte}>Filtreeri 6-kohalised nimed</button>
        <button onClick={FiltreeriYLopus}>Filtreeri "y" lõpus</button><br />
        <button onClick={insertEST}>Kirjuta iga nime ette EST</button>
        <button onClick={sortZA}>Sorteeri Z-A</button><br /><br />
        
        
    {andjad.map((nimi,index) =>
    <div key={nimi}>
        {nimi} 
        
        <button onClick={() => kustuta(index)}>x</button> 
    </div>)}

    <label>Lisa uus nimi lõppu</label> <br />
    <input ref= {andjaRef} type="text" /> <br />
    <button onClick={lisa}>Lisa</button>

    </div>
  )
}

export default TagasisideAndjad