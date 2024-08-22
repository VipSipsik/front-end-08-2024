import React from 'react'
import { Link } from "react-router-dom";
function Menyy() {
  return (
    <div>
    <Link to="avaleht">
    <img className="pilt" src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="" />
    </Link>

    <Link to="kinkekaart">
      <button className="nupp">Osta kinkekaart</button>
    </Link>

    <Link to="esindused">
      <button className="nupp">Vaata ,meie esindusi</button>
    </Link>

    <Link to="lisa-toode">
      <button className="nupp">Lisa uus toode</button>
    </Link>

    <Link to="ostukorv">
      <button className="nupp">Ostukorvi</button>
    </Link>

    <Link to="seaded">
      <button className="nupp">Seaded</button>
    </Link>

    <Link to="profiil">
      <button className="nupp">Profiil</button>
    </Link>

    <Link to="logi-sisse">
      <button className="nupp">Logi sisse</button>
    </Link>

    <Link to="registreeru">
      <button className="nupp">Registreeru</button>
    </Link>

    <Link to="hinnad">
      <button className="nupp">Hinnad</button>
    </Link>
    <Link to="tooted">
      <button className="nupp">Tooted</button>
    </Link>
    <Link to="töötajad">
      <button className="nupp">Töötajad</button>
    </Link>
    
    </div>

    
  )
}

export default Menyy