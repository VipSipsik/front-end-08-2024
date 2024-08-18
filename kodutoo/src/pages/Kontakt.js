import React from 'react'
import { useState } from 'react'

function Kontakt() {
    const [aadress, m22raAdress] = useState("Tallinn");
    const [telefon, m22raTelefon] = useState("55512345");
    const [email, m22raEmail] = useState("bla@aa.com");

    const ingliseks = () => {
        m22raAdress("London");
        m22raTelefon("123123432");
        m22raEmail("london@london.com");
    }


  return (
    <div>
        <div> { aadress } </div>
        <div> { telefon } </div>
        <div> { email } </div>
        <button onClick={ingliseks}>Muuda inglise keelseks</button>
    </div>
  )
}

export default Kontakt