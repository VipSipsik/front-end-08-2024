import {useState} from "react";

function App() {
  const [kasutajanimi, muudaKasutajanimi] = useState("Kasutaja1");
  const [kogus, muudaKogus] = useState(5);
  const [teade, muudaTeade] = useState("Tere");
  const [vanus, muudaVanus] = useState(65);


  return (
    <div classname="App">
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
