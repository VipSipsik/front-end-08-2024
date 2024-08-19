import React, { useState } from 'react'

function Loader() {
    const [kasLaeb, uuendaLaadimist] = useState(true);

  return (
    <div>
       {kasLaeb === true && <div class="lds-dual-ring"></div> }
       <button onClick={() => uuendaLaadimist(false)}>Lõpeta laadimine</button>
    </div>
  )
}

export default Loader