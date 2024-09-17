import React from 'react'
import { useState } from 'react'

function Animals() {
    
    const [animals, muudaAnimals] = useState ([" pigs", " goats", " sheep"]);

    const reset = () => {
      muudaAnimals([" pigs", " goats", " sheep"]);
    }

    return (
    <div>
      <br />
      <button onClick={reset}>Reset</button><br /><br />
      { animals.map(animals => <div>{animals}</div> )}
      
    </div>
  )
}

export default Animals