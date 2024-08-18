import './App.css';
import { Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        
        <Routes>
          <Route path="" element={ <Navbar />} />
          <Route path="work" element={ <Work /> } />
          <Route path="hobbies" element={ <Hobbies /> } />
          <Route path="courses" element={ <Courses /> } />
        </Routes>

        <iframe className="youtube" width="460" height="215" src="https://www.youtube.com/embed/XyBV4yoEZ6A?si=O-mtYHHeuww94deV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <a className="facebook-button" href="www.facebook.com"> 
          <img src="/facebook.png" alt="" />
          <span>Facebook</span>
        </a>

    </div>
  );
}

export default App;
