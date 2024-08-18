import React, { useState } from 'react'

function Telefon() {
    const [v2rv, uuendaV2rv] = useState("Vali värv!");

  return (
    <div>
        <br />
        {v2rv === "Vali värv!" && <div>Telefoni värv on valimata!</div>}
        <div>Telefoni värvus: {v2rv}</div>
        <button onClick={() => uuendaV2rv("must")}>Must</button>
        <button onClick={() => uuendaV2rv("kuldne")}>Kuldne</button>
        <button onClick={() => uuendaV2rv("sinine")}>Sinine</button>
        <button onClick={() => uuendaV2rv("punane")}>Punane</button>
        <button onClick={() => uuendaV2rv("lilla")}>Lilla</button>

        { v2rv === "must" && <div className="must-ring"></div>}
        { v2rv === "kuldne" && <div className="kuldne-ring"></div>}
        { v2rv === "sinine" && <div className="sinine-ring"></div>}
        { v2rv === "punane" && <div className="punane-ring"></div>}
        { v2rv === "lilla" && <div className="lilla-ring"></div>} 


    </div>
  )
}

export default Telefon