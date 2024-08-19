import {useState, useRef} from "react";

function App() {
  const [kasutajanimi, muudaKasutajanimi] = useState("Kasutaja1");
  const [kogus, muudaKogus] = useState(5);
  const [teade, muudaTeade] = useState("Tere");
  const [vanus, muudaVanus] = useState(65);
  const [meil, muudaMeil] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const [nimi, muudaNimi] = useState("ei");
  
   
  const emailRef = useRef();
  const nimiRef = useRef();


 // const sisestaEmail = () => {
 //  if (emailRef.current.value === "12345") {
 //   muudaMeil("jah");
 //   muudaSonum(emailRef.current.value + ",e-mail sisestatud");
 // } 
 //   else {
 //     muudaSonum("Vale e-mail");
 //   }
 // }

  const sisestaNimi = () => {
   if (nimiRef.current.value === "karlos") {
    muudaNimi("jah");
    muudaSonum("Nimi sisestatud");
   } else {
    muudaSonum("Vale nimi");
   }
  }


  return (
    <div classname="App">
     <div>{ sonum }</div> <br />

      <div>
      <label>Nimi</label>
      <input ref={nimiRef} type="text"  /> <br />
      </div> 

    { nimi === "ei" && <button onClick={sisestaNimi}>Sisesta nimi</button>}
    { nimi === "jah" && <button onClick={() => muudaNimi("")}>Kustuta nimi</button>}
      


      
         
      {<div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /><br />
      </div>}

      {/* {meil === "ei" && <button onClick={sisestaEmail}>Sisesta e-mail</button>} */}
      {meil === "jah" && <button onClick={() => muudaMeil("jah")}>Sisselogitud</button>}
      
      {kasutajanimi}
      <br />
        <button onClick={() => muudaKasutajanimi("MuuKasutaja2")}>Muuda</button>
      <br /><br />
      
      {kogus}
      <button onClick={() => muudaKogus(kogus * 3)}></button><br /><br />

      {teade === "Tere Maailm!" && teade}
      <button onClick={() => muudaTeade(teade + " Maailm!")}>Vajuta</button><br /><br />

      {vanus}
      <br></br> 
      {vanus >= 65 && "Oled pensionil"}
      {vanus < 65 && "Oled tööealine"}
      <button onClick={() => muudaVanus(vanus - 1)}>-</button>
      <button onClick={() => muudaVanus(vanus + 1)}>+</button>
    </div>
  )
}
export default App;
