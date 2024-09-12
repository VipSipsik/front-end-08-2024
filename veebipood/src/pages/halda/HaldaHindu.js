import React, {useState, useRef} from 'react'
import hinnadJSON from "../../data/hinnad.json";
import { Link } from 'react-router-dom';

function HaldaHindu() {
    
    const [hinnad, muudaHinnad] = useState (hinnadJSON.slice());
    const hindRef = useRef();
    const otsinguRef = useRef();

    const kustuta = (index) => {
        hinnadJSON.splice(index,1);
        muudaHinnad(hinnadJSON.slice());
    }

    const lisa = () => {
        hinnadJSON.push({"number" : hindRef.current.value, "lisaja": "Peeter"});
        muudaHinnad(hinnadJSON.slice());
    }

    const otsiHindadest = () => {
        const vastus = hinnadJSON.filter(hind => 
            String(hind.number).includes(otsinguRef.current.value));
        muudaHinnad(vastus);
    }

    return (
     <div>
        <div>Otsing</div>
        <input type="text" ref={otsinguRef} onChange={otsiHindadest} />

        
        <br /><br />
        <label>Hind</label> <br />
        <input ref={hindRef}  type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br />

        {hinnad.map((hind, index) => 
         <div key={index}>
          {hind.number} 
            <button onClick={() => kustuta(index)}>x</button> 
            <Link to={"/muuda-hind/" + index}>
             <button>Muuda</button> 
            </Link>
         </div>)}
     </div>
  )
}

export default HaldaHindu