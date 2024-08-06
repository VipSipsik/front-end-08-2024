
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [vastus, muudaVastus] = useState(0);
  const input1Ref = useRef();
  const input2Ref = useRef();

  function korruta() {
    muudaVastus(Number(input1Ref.current.value) * Number(input2Ref.current.value));
  }

  function lahuta() {
    muudaVastus(Number(input1Ref.current.value) - Number(input2Ref.current.value));
  }

  function jaga() {
    muudaVastus(Number(input1Ref.current.value) / Number(input2Ref.current.value));
  }

  function liida() {
    muudaVastus(Number(input1Ref.current.value) + Number(input2Ref.current.value));
  }

  return (
    <div className="App">
      <input ref={input1Ref} type="text"/>
      <input ref={input2Ref} type="text"/>
      <br />
      {vastus}
      <button onClick={korruta}>Korruta</button>
      <button onClick={lahuta}>Lahuta</button>
      <button onClick={jaga}>Jaga</button>
      <button onClick={liida}>Liida</button>
    </div>
  );
}

export default App;
