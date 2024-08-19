import React from 'react'
import { useState } from 'react'

function Kontakt() {
    const [aadress, m22raAdress] = useState("Tallinn");
    const [telefon, m22raTelefon] = useState("55512345");
    const [email, m22raEmail] = useState("bla@aa.com");
    const [ingliseKeelne, m22raIngliseKeelne] = useState("ei");

    const ingliseks = () => {
        m22raAdress("London");
        m22raTelefon("123123432");
        m22raEmail("london@london.com");
        m22raIngliseKeelne("jah");
    }


  return (
    <div>
        <div> { aadress } </div>
        <div> { telefon } </div>
        <div> { email } </div>
        <button onClick={ingliseks}>Muuda inglise keelseks</button>
        { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
    </div>
  );
}

export default Kontakt