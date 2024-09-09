import React, {useState, useRef} from 'react'
import hinnadJSON from "../../data/hinnad.json";
import { Link } from 'react-router-dom';

function HaldaHindu() {
    
    const [hinnad, muudaHinnad] = useState (hinnadJSON.slice());
    const hindRef = useRef();

    const kustuta = (index) => {
        hinnadJSON.splice(index,1);
        muudaHinnad(hinnadJSON.slice());
    }

    const lisa = () => {
        hinnadJSON.push(hindRef.current.value);
        muudaHinnad(hinnadJSON.slice());
    }


    return (
     <div>
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