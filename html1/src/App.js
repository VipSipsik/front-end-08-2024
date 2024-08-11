//import logo from 'logo.svg;'
import React from 'react'
import './App.css';



function App() {
  return (
    <div className="App">
     <img className="picture" src="https://images.pexels.com/photos/5490178/pexels-photo-5490178.jpeg" alt="" /> <br />
     <button className="button">Button</button> <br />
     <text className="textBlue">This is written in blue color.</text> <br />
     <text className="textGreen">This is written in green color.</text> <br /> <br />

     <table className="table"></table>

     <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>

      <tr>
        <td>Alfreds Futtrkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>

      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>

      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>

      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>

      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>

    </table> 

    <div className="container"> 
      <iframe title="This is a unique title" ClassName="responsive-iframe" 
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
    </div>

    {/* <iframe title="This is a unique title" width="420" height="345" 
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe> */}

    </div>
  );
}

export default App;
