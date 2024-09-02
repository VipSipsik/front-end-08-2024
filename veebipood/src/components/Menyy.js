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
    <Link to="tootajad">
      <button className="nupp">Tootajad</button>
    </Link>
    

    <Link to="halda-esindusi">
      <button className="nupp">Halda esindusi</button>
    </Link>

    <Link to="halda-hindu">
      <button className="nupp">Halda hindu</button>
    </Link>

    <Link to="halda-tootajaid">
      <button className="nupp">Halda tootajaid</button>
    </Link>

    <Link to="Halda-tooteid">
      <button className="nupp">Halda tooteid</button>
    </Link>

    </div>

    
  )
}

export default Menyy