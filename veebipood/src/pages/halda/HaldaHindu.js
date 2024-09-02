import React, {useState, useRef} from 'react'
import hinnadJSON from "../../data/hinnad.json";

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
         <div>
          {hind} 
            <button onClick={() => kustuta(index)}>x</button> 
         </div>)}
     </div>
  )
}

export default HaldaHindu