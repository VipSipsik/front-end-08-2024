import React  from 'react'
import {useState} from 'react'
import numbridFailist from "../data/numbrid.json";

function Numbrid() {

    const [numbrid, muudaNumbrid] = useState(numbridFailist.slice());

    const reset = () => {
      muudaNumbrid(numbridFailist.slice());
    }

    const sorteeriNumberKasvavalt = () => {
      let soreeritudNumbrid = numbrid.sort((a, b) => a.number - b.number);
      muudaNumbrid(soreeritudNumbrid.slice());
    }

    const sorteeriNumberKahanevalt = () => {
      numbrid.sort((a, b) => b.number - a.number);
      muudaNumbrid(numbrid.slice());
    }

    const sorteeriEsimeseNumbriJärgiTähestikuJärjekorras = () => {
      numbrid.sort((a,b) => a.number.toString().localeCompare(b.number.toString()));
    muudaNumbrid(numbrid.slice());
    }

    const sorteeriVastupidisesJärjekorrasEsimeseNriOsas = () => {
      numbrid.sort((a,b) => b.number.toString().localeCompare(a.number.toString()));
    muudaNumbrid(numbrid.slice());
    }


    const filtreeriSuuremadKui8 = () => {
      const vastus = numbridFailist.filter(number => number.number >=8);
      muudaNumbrid(vastus);
    }

    const filtreeriVäiksemadKui10 = () => {
      const vastus = numbridFailist.filter(number => number.number <=10);
      muudaNumbrid(vastus);
    }

    const filtreeriPaarisarvud = () => {
      const vastus = numbridFailist.filter(number => number.number % 2 === 0);
      muudaNumbrid(vastus)
    }

    const filtreeriPaaritudArvud = () => {
      const vastus = numbridFailist.filter(number => number.number % 2 !== 0);
      muudaNumbrid(vastus);
    }

    const filtreeri1gaAlgavadNumbrid = () => {
      const vastus = numbridFailist.filter(number => number.number.toString().startsWith(1));
      muudaNumbrid(vastus);
    }

    const filtreeri3SisaldavadNumbrid = () => {
      const vastus = numbridFailist.filter(number => number.number.toString().includes("3"));
      muudaNumbrid(vastus);
    }

    return (
    <div>
      <br />
      <button onClick={reset}>Reset</button> <br /><br />
      
       {numbrid.map((number, index)=> 
        <div key={index}>
         {number.number} 
        </div> 
    )} <br />

      <button onClick={sorteeriNumberKasvavalt}>Sorteeri number kasvavalt</button>
      <button onClick={sorteeriNumberKahanevalt}>Sorteeri number kahanevalt</button>
      <button onClick={sorteeriEsimeseNumbriJärgiTähestikuJärjekorras}>Sorteeri esimese numbri järgi tähestiku järjekorras</button>
      <button onClick={sorteeriVastupidisesJärjekorrasEsimeseNriOsas}>Sorteeri vastupidises järjekorras esimese nri osas</button> <br /> <br />


      <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad kui 8</button>
      <button onClick={filtreeriVäiksemadKui10}>Filtreeri väiksemad kui 10</button>
      <button onClick={filtreeriPaarisarvud}>Filtreeri paarisarvud</button>
      <button onClick={filtreeriPaaritudArvud}>Filtreeri paaritud arvud</button> <br />
      <button onClick={filtreeri1gaAlgavadNumbrid}>Filtreeri 1ga algavad numbrid</button>
      <button onClick={filtreeri3SisaldavadNumbrid}>Filtreeri 3 sisaldavad numbrid</button>

    </div>
  )
}

export default Numbrid