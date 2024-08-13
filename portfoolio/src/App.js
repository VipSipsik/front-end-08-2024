import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
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

        <iframe width="460" height="215" src="https://www.youtube.com/embed/XyBV4yoEZ6A?si=O-mtYHHeuww94deV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <Routes>
          <Route path="work" element={ <Work /> } />
          <Route path="hobbies" element={ <Hobbies /> } />
          <Route path="courses" element={ <Courses /> } />
        </Routes>

        <a className="facebook-button" href="www.facebook.com"> 
          <img src="/facebook.png" alt="" />
          <span>Facebook</span>
        </a>

    </div>
  );
}

export default App;
