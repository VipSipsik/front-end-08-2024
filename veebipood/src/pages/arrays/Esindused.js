import React, { useState } from 'react'

// muutuja - JS sõna, mis sisaldab enda sees väärtust, mida võib koodis iga hetk asendada (nt sisselogitud kasutaja)
// muutja - JS sõna, mis on funktsioon ja mis muudab muutujat
// algväärtus - refreshi või esialgselt lehele tuleku väärtus

function Esindused() {
    // muutuja, muutja  =        algväärtus
    const [linn, muudaLinn] = useState("Tallinn");
    const [keskused, muudaKeskused] = useState(["Ülemiste", "Rocca al Mare", 
                                              "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  return (
    <div>
        <div>Hetkel on aktiivne linn: {linn}</div>
         <button className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
         <button className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tartu")}>Tartu</button>
         <button className={linn === "Narva" ? "linn-aktiivne" : "linn"}onClick={() => muudaLinn("Narva")}>Narva</button>
         <button className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

        
        {linn === "Tallinn" &&
        <div>
          {/* <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div> allpool ARRAY-na  */}
          {keskused.map(keskus => <div>{keskus} <button>Vt lähemalt</button> </div>)}
        </div>}

        
        {linn === "Tartu" &&
        <div>
         <div>Raatuse</div>
         <div>Lõunakesus</div>
        </div>}
        
        {linn === "Narva" && <div>Fama</div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}

    </div>
  )
}

export default Esindused