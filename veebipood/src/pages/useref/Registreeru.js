import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import kasutajadFailist from "../../data/kasutajad.json";

function Registreeru() {
    const kasutajanimiRef = useRef();
    const paroolRef = useRef();
  
    const register = () => {
      if (kasutajanimiRef.current.value.length < 5) {
        toast.error("Kasutajanimi on liiga lühike");  
       return;
      }

      if (kasutajanimiRef.current.value.length > 5) {
        toast.error("Kasutajanimi on liiga pikk");  
       return;
      }
  
      if (kasutajanimiRef.current.value.toLowerCase() !== kasutajanimiRef.current.value) {
        toast.error("Kasutajanimi ei ole läbiv väike täht");  
       return;
      }

      if (kasutajanimiRef.current.value.startsWith("a") === false) {
        toast.error('Kasutajanimi ei alga "a" tähega');  
       return;
      }
      // 01234
      // admin
      // if (kasutajanimiRef.current.value.value.charAt(0) !== "a" )
      // if (kasutajanimiRef.current.value.value[0] !== "a" ) {
      //  toast.error("Kasutajanimi on liiga lühike");  
      //  return;
      // }
       
      if (paroolRef.current.value !== "midagi"){
        toast.error("Parool pole kokkulepitud parool");
        return;
     }

      kasutajadFailist.push(kasutajanimiRef.current.value);

      toast.success("Registreerutud");
    }
  
    return (
      <div>
          <label>Kasutajanimi</label> <br />
          <input ref={kasutajanimiRef} type="text" /> <br />
          <label>Parool</label> <br />
          <input ref={paroolRef} type="password" /> <br />
          <button onClick={register}>Registreeru</button>
  
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            theme="dark"
          />
      </div>
    )
  }
  
  export default Registreeru