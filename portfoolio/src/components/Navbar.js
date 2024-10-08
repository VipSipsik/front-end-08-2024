import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   
    <div className="App">
        <img className="main-picture" src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
        alt="" />
        <div className="rectangle"></div>

        <div className="navigation-pictures">

        <Link className="main-link" to="work">
          <img src="https://img.freepik.com/premium-photo/decaying-maple-leaf-black-background_764640-258.jpg" 
          alt="" />
          <p>Tööde lehele</p>
        </Link>

        <Link className="main-link" to="hobbies">
          <img src="https://img.freepik.com/free-photo/flat-lay-beautifully-colored-autumn-leaves_23-2148769160.jpg" 
          alt="" />
          <p>Hobide lehele</p>
        </Link>

        <Link className="main-link" to="courses">
          <img src="https://img.freepik.com/premium-photo/top-view-leaves-with-copy-space_23-2148769011.jpg" 
          alt="" />
          <p>Kursuste lehele</p>
        </Link>

        
        </div>
    </div>
        
  )
}

export default Navbar