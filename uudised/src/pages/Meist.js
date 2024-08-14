import React from 'react'
import { useState } from 'react'


function Meist() {
   const [kontakt, n2itakontakt] = useState("");


  return ( 
 <div>
    
    <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
    <div className='meieTootajad'>Meie töötajad</div>
    <br />
    <div>Arvo Part</div>
    <div>Uudisklippide taustamuusika</div>
    <button onClick={() => n2itakontakt("+351231231")}>Võta ühendust!</button>
    <br /><br />
    <div>Kelly Siltaru</div>
    <div>Püstolreporter</div>
    <button onClick={() => n2itakontakt("+351267231")}>Võta ühendust!</button>
    <br /><br />
    <div>Edward von Glitter</div>
    <div>Uudiste kujundamine</div>
    <button onClick={() => n2itakontakt("+356791231")}>Võta ühendust!</button>
    <br /><br />
    <div>Kerli Koiv</div>
    <div>Välisturgude spetsialist</div>
    <button onClick={() => n2itakontakt("+350941231")}>Võta ühendust!</button>
    <br /><br />
    { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    
 </div> )
}

export default Meist