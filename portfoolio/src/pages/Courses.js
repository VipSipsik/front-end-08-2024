import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata");
  return (
    <div>
        <Link to="/">
         <button>Tagasi</button>
        </Link>
        <div>
          <button className={kursus === "udemy" ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaKursus ("udemy")}>Udemy</button>
          <button className={kursus === "coursera" ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaKursus ("coursera")}>Coursera</button>
          <button className={kursus === "codeacademy" ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaKursus ("codeacademy")}>Codeacademy</button>
          <button className={kursus === "udacity" ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaKursus ("udacity")}>Udacity</button>
          {kursus === "udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
          {kursus === "coursera" && <div>Siin on kirjeldus (loend) Coursera.org läbitud kursustest</div>}
          {kursus === "codeacademy" && <div>Siin on kirjeldus (loend) Codeacademy.com läbitud kursustest</div>}
          {kursus === "udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
        </div>
    </div>
  )
}

export default Courses