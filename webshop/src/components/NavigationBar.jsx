import React from 'react'
import { Link } from 'react-router-dom';
import websiteLogo from '../images/webshop.png';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import englishflag from '../images/united-kingdom.png';
import darkImage from '../images/dark.png'
import lightImage from '../images/light.png'

// Edit navigation barist maha 
function NavigationBar(props) {
  const { t, i18n } = useTranslation();


  const changeLanguageEt = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("language", "et");
  }

  const changeLanguageEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLanguageRus = () => {
    i18n.changeLanguage("ru");
    localStorage.setItem("language", "ru");
  }

  const changeLanguageLv = () => {
    i18n.changeLanguage("lv");
    localStorage.setItem("language", "lv");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      
        
        <Navbar.Brand as= {Link} to=  "/"><img src={websiteLogo}
          width="150" height="auto"
          alt="Logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact-us">{t("Contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("Cart")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("Shops")}</Nav.Link>
            <Nav.Link as={Link} to="/admin">{t("Maintain")}</Nav.Link>
          </Nav>
          <Nav>
            <img className='lang' onClick={changeLanguageEn} src={englishflag} alt=''/>
          <button onClick={changeLanguageEt}>EST</button>
          <button onClick={changeLanguageEn}>ENG</button>
          <button onClick={changeLanguageRus}>RUS</button>
          <button onClick={changeLanguageLv}>LV</button>
            <Nav.Link as={Link} to="/signup">{t("Signup")}</Nav.Link>
            <Nav.Link as={Link} to="/login">{t("Login")}</Nav.Link>
            {props.dark === "true" && <img className="lang" src={lightImage} onClick={props.changeToLightMode} alt=''/>}
            {props.dark === "false" && <img className="lang" src={darkImage} onClick={props.changeToDarkMode} alt=''/>}
          </Nav>
          <Nav>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

//     <div className='navbar'>
//       <img className='website-logo' src={websiteLogo} alt="Logo" />

//       <button onClick={() => i18n.changeLanguage("et")}>EST</button>
//       <button onClick={() => i18n.changeLanguage("en")}>ENG</button>

//       <div>
//         <Link to=" ">
//           <button className='btn'>{t("Homepage")}</button>
//         </Link>

//         <Link to="cart">
//           <button className='btn'>{t("Cart")} </button>
//         </Link>

//         <Link to="contact-us" >
//           <button className='btn'>{t("Contact")}</button>
//         </Link>

//         <Link to="shops" >
//           <button className="btn">{t("Shops")}</button>
//         </Link>

//         <Link to="login" >
//           <button className="btn">{t("Login")}</button>
//         </Link>

//         <Link to="signup" >
//           <button className="btn">{t("Signup")}</button>
//         </Link>

//         <Link to="admin" >
//           <button className="btn">Admin home</button>
//         </Link>

//         {/* <Link to="admin/edit-product" >
//         <button className="btn">Edit product</button>
//       </Link> */}
//         {/* <Link to="admin/maintain-categories" >
//           <button className="btn">Maintain categories </button>
//         </Link>
//         <Link to="admin/maintain-products" >
//           <button className="btn">Maintain products</button>
//         </Link>
//         <Link to="admin/maintain-shops" >
//           <button className="btn">Maintain Shops</button>
//         </Link> */}
//         {/* <Link to="not-found" >
//         <button className="btn">Not found</button>
//       </Link> */}
//         {/* <Link to="single-product" >
//         <button className="btn">Single product</button>
//       </Link> */}
//         {/* <Link to="admin/add-product" >
//         <button className="btn">Add product</button>
//       </Link> */}

//       </div>
//     </div>

//   )
// }

export default NavigationBar