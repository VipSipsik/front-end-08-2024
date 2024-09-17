import React from 'react'
import { useState } from 'react';


function months() {
  const months = [" March", " Jan", " Feb", " Dec"];  
  //  const [months, setMonths] = useState(["March", "Jan", "Feb", "Dec"]);
  //  months = []
    
   // const set = () => {
   //     setMonths(["UUED", "KUUD"]);
   // }
//<button onClick={set}>Määra</button>
  return (
    <div>
        
        { months.map(months => <div>{months}</div> )}
    </div>
  )
}

export default months


      